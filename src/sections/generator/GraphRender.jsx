import { useRef, useState, useEffect } from "react";
import NavigatorCard from "../folderNavigation/NavigatorCard";
import '../../styles/ZoomImageStyles.css'

function GraphRender(props) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({x: 0,y:0})
  const imageRef = useRef(null)
  const graphRenderRef = useRef(null)
  const zoomIn = ()=>{setScale((scale)=>scale+0.1)}
  const zoomOut = ()=>{
    if(scale>1){setScale((scale)=>scale-0.1)}
  }
  const handleWheel = (e) => {
    e.nativeEvent.wheelDelta>0 ? zoomIn() : zoomOut()
    const graph = graphRenderRef.current.getBoundingClientRect();
    const center = {x:graph.x+(graph.width/2),y:graph.y+(graph.height/2)}
    setPosition({
        x:position.x+(center.x-e.clientX)/20,
        y:position.y+(center.y-e.clientY)/20
      })
  }
  const handleReset = () => {
    setScale(1)
    setPosition({x:0,y:0})
  }
  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = {x:0, y:0}
    const handleMouseDown = (e) => {
      isDragging = true
      prevPosition = { x: e.clientX, y: e.clientY}
    }
    const handleMouseMove = (e) => {
      if(!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;
      prevPosition = { x: e.clientX, y: e.clientY};
      setPosition((position)=>({
        x: position.x + deltaX,
        y: position.y + deltaY
      }))
    }
    const handleMouseUp = () => {
      isDragging = false
    }
    image?.addEventListener("mousedown", handleMouseDown);
    image?.addEventListener("mousemove", handleMouseMove);
    image?.addEventListener("mouseup", handleMouseUp)
    return () => {
      image?.removeEventListener("mousedown", handleMouseDown);
      image?.removeEventListener("mousemove", handleMouseMove);
      image?.removeEventListener("mouseup", handleMouseUp)
    }
  }, [imageRef,scale])
  return (
    <div className="w-full flex-col image-container" ref={graphRenderRef}>
      <div className="btn-container mt-1 ms-1">
        <button onClick={()=>zoomIn()}  className="bg-gray-200 px-2 hover:text-white w-8 hover:bg-primary">+</button>
        <button onClick={()=>handleReset()} className="bg-gray-200 px-1 hover:text-white hover:bg-primary border-x-2 border-gray-300">Reset</button>
        <button onClick={()=>zoomOut()} className="bg-gray-200 px-2 hover:text-white w-8 hover:bg-primary">-</button>
      </div>
      <div className="w-full h-96 overflow-y-auto overflow-x-auto">
        <div className="self-center" ref={imageRef}>
          <img 
            src={props.urlImage} 
            ref={props.imageRef} 
            alt="Imagen" 
            className="mx-auto min-h-96 max-h-max min-w-full max-w-prose object-cover" 
            draggable={false}
            style={{
              cursor: "move",
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`
            }}
            onWheel={(e)=>{handleWheel(e)}}
          />
        </div>
      </div>
    </div>
  );
}

export default GraphRender;