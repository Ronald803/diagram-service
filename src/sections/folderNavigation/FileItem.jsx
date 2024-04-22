import React from 'react'

function FileItem(props) {
    let fileImage = ""
    switch (props.itemType) {
        case "folder":
            fileImage = "./src/assets/folder_image.png"
            break;
        case "file":
            fileImage = "./src/assets/png_image.png"
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