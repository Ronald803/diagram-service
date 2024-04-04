import React from 'react'
import { useState } from 'react'
import { postDataContent } from './NavigationRequests';

function CreateNewFolderForm(props) {
    const [nameNewFile, setNameNewFile] = useState('')
    const handleClick = () => {
        console.log(nameNewFile);
        const newFolder ={
            parentFolderId: props.parentId,
            name: nameNewFile
        }
        postDataContent(newFolder,'folder')
            .then(answer=>{
                props.getContent(props.parentId)
                props.setNewFileMenu(false)
            })
            .catch(e=>{
                console.log(e);
            })
    }
    return (
    <div className='bg-secondary rounded-b-lg border-2 border-gray-600'>
        <div className='pt-2 px-2'>
            <div className='flex border-2 border-gray-600 rounded-lg'>
                <div className='w-1/4 pl-1 border-r-2 border-gray-600'><label>Name</label></div>
                <input className='w-3/4 rounded-r-lg px-2' onChange={(e)=>{setNameNewFile(e.target.value)}}/>
            </div>
        </div>
        <div className='text-center'>
            <button 
                className='border-2 my-1 px-1 border-gray-600 rounded-lg bg-tertiary text-black hover:bg-primary hover:text-white'
                onClick={()=>{handleClick()}}    
            >
                Create New Folder
            </button>
        </div>
    </div>
  )
}

export default CreateNewFolderForm