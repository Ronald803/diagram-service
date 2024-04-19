import React from "react";
import AceEditor from "react-ace";
import "../../styles/CodeEditorStyles.css";

// Both imports required in order to successfully apply "mode" & "theme" props to "AceEditor".
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-dracula";

function CodeEditor(props) {
  const handleChange = (text) => {
    props.setterCode(text);
  };

  let markers = [];
  if (props.error) {
    const line = Number(props.error.errorLine);
    markers.push({
      startRow: line - 1,
      startCol: 0,
      endRow: line,
      endCol: 0,
      className:
        props.theme === "dracula"
          ? "replacement-marker-dark"
          : "replacement-marker-light",
      type: "screenLine",
    });
  }

  return (
    <div className="w-full p-1 border-r-2 h-96 border-primary">
      <AceEditor
        mode="python"
        theme={props.theme}
        fontSize={14}
        onChange={handleChange}
        name="code-editor"
        placeholder="Start Coding..."
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%", height: "384px" }}
        value={props.textCode}
        markers={markers}
      />
    </div>
  );
}

export default CodeEditor;
