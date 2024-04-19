import React, { useEffect, useRef, useState } from "react";
import CodeEditor from "./CodeEditor";
import GraphRender from "./GraphRender";
import { postPythonCode } from "../../modules/generator/api/diagram-functionality";
import OptionsBar from "./OptionsBar";
import NavigatorCard from "../folderNavigation/NavigatorCard";
import "../../styles/GraphRenderError.css";
import ShowDiagramError from "./ShowDiagramError";
import NodesList from "../diagramIcons/NodesList";
function BodyComponent(props) {
  const [textCode, setTextCode] = useState("");
  const [validCode, setValidCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [openNavigationCard, setOpenNavigationCard] = useState(true);
  const imageRef = useRef(null);
  useEffect(() => {
    postPythonCode(textCode).then((data) => {
      if (!data.errorMessage) {
        const blob = new Blob([data.image], { type: "image/png" });
        setImageURL(URL.createObjectURL(blob));
        setValidCode(true);
        setErrorMessage(undefined);
      } else {
        setValidCode(false);
        setErrorMessage(data.errorMessage);
      }
    });
  }, [textCode]);
  const toggleMyDiagramButton = () => {
    setOpenNavigationCard(!openNavigationCard);
  };
  return (
    <>
      <OptionsBar
        pythonCodeText={textCode}
        imageRef={imageRef}
        validCode={validCode}
        imageURL={imageURL}
        textCode={textCode}
        secondary={props.secondary}
        toggleMyDiagramButton={toggleMyDiagramButton}
      />
      <div className="flex w-full px-10 py-5">
        <NodesList></NodesList>
        <div className="w-1/2">
          <CodeEditor
            className="w-1/2"
            setterCode={setTextCode}
            textCode={textCode}
            theme={props.theme}
            error={errorMessage}
          />
        </div>
        <div
          className={`w-1/2 ${
            errorMessage && !openNavigationCard ? "error-graph" : ""
          }`}
        >
          {errorMessage && !openNavigationCard && (
            <ShowDiagramError errorText={errorMessage.possibleError} />
          )}
          {openNavigationCard == false ? (
            <GraphRender
              urlImage={imageURL}
              dataFromEditor={textCode}
              validCode={validCode}
              errorMessage={errorMessage}
              imageRef={imageRef}
            />
          ) : (
            <NavigatorCard
              dataFromEditor={textCode}
              setTextCode={setTextCode}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default BodyComponent;
