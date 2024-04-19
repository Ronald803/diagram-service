/* eslint-disable react/prop-types */
import { useState } from "react";
import { CodeEditorContext } from "./CodeEditorContext";
const CodeEditorProvider = ({ children }) => {
  const [codeEditorText, setCodeEditorText] = useState("");
  const updateCodeEditorText = (importString) => {
    setCodeEditorText(importString);
  };
  return (
    <CodeEditorContext.Provider
      value={{ codeEditorText, updateCodeEditorText }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
};

export default CodeEditorProvider;
