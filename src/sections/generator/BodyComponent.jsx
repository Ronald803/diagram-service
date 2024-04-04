import React, { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import GraphRender from "./GraphRender";
import { postPythonCode } from "../../modules/generator/api/diagram-functionality";

function BodyComponent() {
  const [textCode, setTextCode] = useState("");
  const [validCode, setValidCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageURL, setImageURL] = useState("");
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
  return (
    <div className="flex w-full px-10 py-5">
      <CodeEditor className="w-1/2" setterCode={setTextCode} />
      <GraphRender
        className="w-1/2"
        urlImage={imageURL}
        dataFromEditor={textCode}
        validCode={validCode}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default BodyComponent;
