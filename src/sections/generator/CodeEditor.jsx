import React from 'react'
import AceEditor from 'react-ace'

function CodeEditor(props) {
  const handleChange = (text)=>{
    props.setterCode(text)
  }
  return (
    <div className='w-full  p-1 border-r-2 border-primary'>
      <AceEditor
          mode="javascript"
          theme="github" 
          onChange={handleChange}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%', height: '400px' }}
      />
    </div>
  )
}

export default CodeEditor