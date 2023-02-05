import React, { useState } from 'react'
import About from '../pages/About'
import Home from '../pages/Home'

function Navbar() {
  const [toggleState, setToggleState] = useState(1)
  const buttonToggle = (index) => {
    setToggleState(index)
  }

  return (
    <>
      <div className="flex items-center justify-center gap-x-[20px]">
        <p onClick={() => buttonToggle(1)} className={`${toggleState === 1 ? 'font-bold' : 'font-normal'}`}>
          Home
        </p>
        <p onClick={() => buttonToggle(2)} className={`${toggleState === 2 ? 'font-bold' : 'font-normal'}`}>
          About
        </p>
        <p onClick={() => buttonToggle(3)} className={`${toggleState === 3 ? 'font-bold' : 'font-normal'}`}>
          Portofolio
        </p>
        <p onClick={() => buttonToggle(4)} className={`${toggleState === 4 ? 'font-bold' : 'font-normal'}`}>
          Contact
        </p>
      </div>
      {toggleState === 1 ? <Home /> : ''}
      {toggleState === 2 ? <About /> : ''}
    </>
  )
}

export default Navbar
