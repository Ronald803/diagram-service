import React from 'react'
import FormLogin from './FormLogin'

function LoginCard(props) {
  return (
    <div className="flex w-full">
      <div className="w-full flex  items-center justify-center">
        <FormLogin secondary={props.secondary}/>
      </div>
    </div>
  )
}

export default LoginCard