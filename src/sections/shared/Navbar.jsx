import React, { useState } from 'react'
import LoginCard from '../login/LoginCard'

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [hideLoginCard, setHideLoginCard] = useState("hidden")
  const openLoginCard = () => {
    if (hideLoginCard == "hidden") {
      setHideLoginCard("")
    } else {
      setHideLoginCard("hidden")
    }
  }
  const logOut = () => {

  }
  return (
    <div className='text-white relative'>
      <nav className="bg-primary border-gray-200 p-3">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="items-center w-1/2">
            <span className="text-3xl font-semibold pl-5">Diagram Generator</span>
          </div>
          <div className="w-1/2 pr-5" >
            <ul className="font-medium flex flex-col">
              {
                loggedIn == false
                  ?
                  <li className='self-end'>
                    <button onClick={openLoginCard} className="text-2xl hover:text-black ">Login</button>
                  </li>
                  :
                  <li className='self-end'>
                    <button onClick={logOut} className="text-2xl hover:text-black ">Cerrar Sesión</button>
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
      <div className={hideLoginCard}>
        <div className='fixed right-0'>
          <LoginCard />
        </div>
      </div>
    </div>
  )
}

export default Navbar