import React from 'react'

function FileItem(props) {
    let fileImage = ""
    switch (props.itemType) {
        case "folder":
            fileImage = 'https://cdn-icons-png.flaticon.com/512/3767/3767084.png'
            break;
        case "file":
            fileImage = 'https://cdn-icons-png.freepik.com/512/8422/8422275.png'
            break;
        case "svg":
            fileImage = "./src/assets/svg_image.png"
            break;
        default:
            break;
    }
  return (
    <div className='w-16 m-1 hover:my-0'>
        <img src={fileImage}/>
        <p className='text-center truncate text-xs'>{props.itemName}</p>
    </div>
  )
}

export default FileItem