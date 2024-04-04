import { useState } from "react";
import NavigatorCard from "../folderNavigation/NavigatorCard";

function GraphRender(props) {
  const [openNavigatorCard, setOpenNavigatorCard] = useState(false)
  const toggleMyDiagramsButton = ()=>{
    setOpenNavigatorCard(!openNavigatorCard)
  }
  return (
    <div className="w-full flex-col">
      <div className="p-1 border-b-2 border-primary text-center">
        <button 
          className='bg-tertiary py-1 px-3 rounded-lg text-black hover:bg-primary hover:text-white'
          onClick={()=>toggleMyDiagramsButton()}
        >
          My diagrams
        </button>
      </div>
      {
        openNavigatorCard == true
        ?
        <NavigatorCard dataFromEditor={props.dataFromEditor}/>
        :
        <div className="bg-tertiary w-full h-auto">
          {(props.validCode && (
            <div className="self-center w-full">
              <img src={props.urlImage} alt="Imagen" className="mx-auto" />
            </div>
          )) || <p>{props.errorMessage}</p>}
        </div>
      }
    </div>
  );
}

export default GraphRender;
