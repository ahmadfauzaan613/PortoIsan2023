import React, { useState } from 'react'
import Profile from '../components/Profile'
import About from './About'
import Home2 from './Home2'
import Portofolio from './Portofolio'

function Home() {
  const [toggleState, setToggleState] = useState(1)
  const buttonToggle = (index) => {
    setToggleState(index)
  }
  return (
    <>
      <div className="flex items-center justify-center gap-x-[20px] mt-[3rem]">
        <p onClick={() => buttonToggle(1)} className={`${toggleState === 1 ? 'font-bold text-[#F2CD5C]' : 'font-normal'} cursor-pointer`}>
          Home
        </p>
        <p onClick={() => buttonToggle(2)} className={`${toggleState === 2 ? 'font-bold text-[#F2CD5C]' : 'font-normal'} cursor-pointer`}>
          About
        </p>
        <p onClick={() => buttonToggle(3)} className={`${toggleState === 3 ? 'font-bold text-[#F2CD5C]' : 'font-normal'} cursor-pointer`}>
          Portofolio
        </p>
      </div>
      {toggleState === 1 ? <Home2 /> : ''}
      {toggleState === 2 ? <About /> : ''}
      {toggleState === 3 ? <Portofolio /> : ''}
    </>
  )
}

export default Home
