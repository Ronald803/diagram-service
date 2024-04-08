import React, { useEffect, useState } from 'react'
import FileItem from './FileItem'
import { getFoldersFilesFromParent, postDataContent } from './NavigationRequests'
import CreateNewFolderForm from './CreateNewFolderForm'

function NavigatorCard(props) {
    const [newFileName, setNewFileName] = useState('')
    const [newFileMenu, setNewFileMenu] = useState(false)
    const [path, setPath] = useState({folderNames:[],folderIds:[]})
    const [childrenOfFolder, setChildrenOfFolder] = useState([])
    const [childChoosen, setChildChoosen] = useState({})
    useEffect(()=>{
        getContent('')
    },[])
    const getContent = (parentId)=>{
        getFoldersFilesFromParent(parentId)
            .then(async(foldersAndFiles)=>{ 
                let folders = await foldersAndFiles[0].json()
                let files = await foldersAndFiles[1].json()
                let content = [];
                folders.forEach(folder=>{ content.push({...folder,type:"folder"}) })
                files.forEach(file=>{ content.push({...file,type:"file"}) })
                setChildrenOfFolder(content)
                setChildChoosen({})
                console.log(content);
            })
            .catch(error=>{ console.log(error) })
    }
    const handleDoubleClic=(child)=>{
        if(child.type=="folder"){
            getContent(child._id);
            setPath({folderNames: [...path.folderNames,child.name],folderIds:[...path.folderIds,child._id]})
        } else {
            props.setTextCode(childChoosen.content)
            console.log("es un file");
        }
    }
    const backPath=()=>{
        if(path.folderIds.length<2){
            getContent('')
        }else{
            getContent(path.folderIds[path.folderIds.length-2])
        }
        let pathNames = [...path.folderNames];
        let pathIds = [...path.folderIds];
        pathNames.pop();
        pathIds.pop();
        setPath({folderNames:[...pathNames],folderIds:[...pathIds]})    
    }
    const saveNewFile=()=>{
        let newFile = {
            name: newFileName+'.py',
            content: props.dataFromEditor,
            parentFolderId: path.folderIds[path.folderIds.length-1]
        }
        postDataContent(newFile,'file')
            .then(answer=>{
                path.folderIds.length<1 ?getContent(''):getContent(path.folderIds[path.folderIds.length-1])
            })
            .catch(error=>{console.log(error)})
    }
  return (
    <div className='flex flex-col h-full border-4 border-primary rounded-lg mx-2'>
        <div className='flex-none p-2 bg-secondary'>
            <div className='flex relative'>
                <div className='w-3/12 pt-1 bg-gray-600 rounded-l-lg text-center'>
                    <button className='text-white' onClick={()=>backPath()}>Back</button>
                </div>
                <div className='w-8/12 p-1 border-2 border-gray-600 bg-white'>MyDiagrams:/{path.folderNames.join("/")}</div>
                <div className='w-1/12 rounded-r-lg bg-gray-600 text-center'>
                    <button onClick={()=>{setNewFileMenu(!newFileMenu)}}><img className='w-8' src='./src/assets/new_folder.png'/></button>
                </div>
                {
                    newFileMenu
                    &&
                    <div className='absolute top-9 right-2'>
                        <CreateNewFolderForm 
                            parentId={path.folderIds[path.folderIds.length-1]}
                            getContent={getContent}
                            setNewFileMenu={setNewFileMenu}
                        />
                    </div>
                }
            </div>        
        </div>
        <div className='flex-grow border-y-2 border-primary'>
            <div className='h-full p-2 flex flex-wrap'>
                {
                    childrenOfFolder.map(child=>(
                    <div key={child.id}>
                        <button 
                            onClick={()=>{setChildChoosen(child)}} 
                            onDoubleClick={()=>{handleDoubleClic(child)}}
                        >
                            <FileItem itemName={child.name} itemType={child.type}/>
                        </button>
                    </div>
                    ))
                }
            </div>
        </div>
        <div className='flex-none p-2 bg-secondary'>
            <div className='flex'>
                <div className='w-3/4 border-2 p-1 border-gray-600 rounded-l-lg bg-white'>
                    <input 
                        placeholder={childChoosen.name}
                        className='w-full'
                        onChange={(e)=>{setNewFileName(e.target.value)}}
                    />
                </div>
                <div className='w-1/4 border-2 p-1 border-gray-600 rounded-r-lg bg-tertiary text-black hover:bg-primary hover:text-white'>
                    {
                        newFileName == ""
                        ?
                        <button className='w-full' onClick={()=>{handleDoubleClic(childChoosen)}} disabled={childChoosen.name==""}>Abrir</button>
                        :
                        <button className='w-full' onClick={()=>{saveNewFile()}}>Guardar</button>                        
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavigatorCard