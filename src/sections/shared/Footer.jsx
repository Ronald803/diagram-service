import React from 'react'

function Footer(props) {
  const footerStyle = `${props.bgColor} text-white`
  return (
    <footer className={footerStyle}>
      <div className="w-full p-4">
        <span className="block text-lg text-center">BC.LT.DE.FS.04</span>
        <hr className="my-4 border-white" />
        <span className="block text-lg text-center">Full Stack - Bootcamp</span>
        <span className="block text-lg text-center">JalaSoft</span>
      </div>
    </footer>
  )
}

export default Footer