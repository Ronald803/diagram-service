const userId = "userid"
const url = "http://localhost:3005/api/storage/google";
const token = "abcdefgh"


export async function getFoldersFilesGoogle(parentId){
    if(!parentId || parentId == ""){
        parentId = "1-zrmLaBzo-3nDviKCR6Gb9wP4DySx8o6"
    }
    const getFolders = fetch(`${url}/folders/${parentId}`,{method: "get",headers:{'authorization':token}})
    const getFiles = fetch(`${url}/files/${parentId}`,{method: "get",headers:{'authorization':token}})
    return Promise.all([getFolders,getFiles])
        .then((values)=>{return values})
        .catch(error=>{console.log(error)})
}

export async function getDataFromFileGoogle(file){
    return fetch(`${url}/files/getdata/${file._id}`,{
        method: "get",
    })
    .then(async response=>{
        if(!response.ok){ throw new Error("Error be") }
        const res = await response.json();
        return res.data
    }).catch(error=>{
        console.log(error);
    })
}

export async function postDataContentGoogle(data,type){
    let urlPath = ''
    type=="folder"? urlPath = url+'/folders' : urlPath = url+'/files'
    data.parentFolderId = data.parentFolderId ?? "1-zrmLaBzo-3nDviKCR6Gb9wP4DySx8o6";
    return fetch(urlPath,{
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'authorization':token
        },
        body: JSON.stringify(data),
    })
    .then(response=>{
        if(!response.ok){ throw new Error("Error be") }
        return response
    }).catch(error=>{
        console.log(error);
    })
}