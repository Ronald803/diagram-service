import React, { useEffect, useRef, useState } from "react";
import CodeEditor from "./CodeEditor";
import GraphRender from "./GraphRender";
import { postPythonCode } from "../../modules/generator/api/diagram-functionality";
import OptionsBar from "./OptionsBar";
import NavigatorCard from "../folderNavigation/NavigatorCard";

function BodyComponent(props) {
  const [textCode, setTextCode] = useState("");
  const [validCode, setValidCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [openNavigationCard, setOpenNavigationCard] = useState(true)
  const imageRef = useRef(null);
  useEffect(() => {
    postPythonCode(textCode).then((data) => {
      if (!data.errorMessage) {
        const blob = new Blob([data.image], { type: "image/png" });
        setImageURL(URL.createObjectURL(blob));
        setValidCode(true);
      } else {
        setValidCode(false);
        setErrorMessage(data.errorMessage);
      }
    });
  }, [textCode]);
  const toggleMyDiagramButton=()=>{
    setOpenNavigationCard(!openNavigationCard)
  }
  return (
    <>
      <OptionsBar pythonCodeText={textCode} imageRef={imageRef} 
        validCode={validCode} 
        imageURL={imageURL} 
        textCode={textCode} 
        secondary={props.secondary}
        toggleMyDiagramButton={toggleMyDiagramButton}
      />
      <div className="flex w-full px-10 py-5">
        <div className="w-1/2">
          <CodeEditor className="w-1/2" setterCode={setTextCode} textCode={textCode} theme={props.theme}/>
        </div>
        <div className="w-1/2">
          {
            openNavigationCard == false
            ?
            <GraphRender
              urlImage={imageURL}
              dataFromEditor={textCode}
              validCode={validCode}
              errorMessage={errorMessage}
              imageRef={imageRef} 
            />
            :
            <NavigatorCard dataFromEditor={textCode} setTextCode={setTextCode}/>
          }

        </div>
      </div>
    </>
  );
}

export default BodyComponent;
