const userId = "userid"
const url = "http://localhost:3005";
const token = "abcdefgh"


export async function getFoldersFilesFromParent(parentId){
    const getFolders = fetch(`${url}/folders/${parentId}`,{method: "get",headers:{'authorization':token}})
    const getFiles = fetch(`${url}/files/${parentId}`,{method: "get",headers:{'authorization':token}})
    return Promise.all([getFolders,getFiles])
        .then((values)=>{return values})
        .catch(error=>{console.log(error)})
}

export async function postDataContent(data,type){
    let urlPath = ''
    type=="folder"? urlPath = url+'/folders' : urlPath = url+'/files'
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
