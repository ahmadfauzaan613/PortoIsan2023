import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

function Home() {
  return (
    <div className="container mx-auto mt-[2rem]">
      <Navbar />
      <Profile />
    </div>
  )
}

export default Home
