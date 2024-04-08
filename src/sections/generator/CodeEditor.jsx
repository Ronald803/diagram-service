import React from 'react'
import AceEditor from 'react-ace'

// Both imports required in order to successfully apply "mode" & "theme" props to "AceEditor".
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-dracula';

function CodeEditor(props) {
  const handleChange = (text)=>{
    props.setterCode(text)
  }
  return (
    <div className='w-full p-1 border-r-2 h-96 border-primary'>
      <AceEditor
          mode="python"
          theme={props.theme} 
          fontSize = {14}
          onChange={handleChange}
          name="code-editor"
          placeholder="Start Coding..."
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%', height: '384px' }}
          value={props.textCode}
      />
    </div>
  )
}

export default CodeEditor