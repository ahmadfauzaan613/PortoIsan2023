import React from 'react'
import foto2 from '../assets/foto2.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'

function Profile() {
  return (
    <div className="flex items-center mt-[10%] justify-between">
      <div>
        <p className="font-bold text-[36px]">Hai,</p>
        <p className="font-bold text-[62px]">
          I'm <span className="text-[#F2CD5C]">Rahmatul Ikhsan</span>
        </p>
        <p className="font-bold text-[36px]">Content Writer</p>
        <div className="mt-[6%] flex items-center gap-x-[20px]">
          <button className="text-[#F2CD5C] cursor-pointer hover:underline outline-none">Download CV & Portofolio </button>
          <img src={linkedin} alt="" className="w-[24px] cursor-pointer" />
          <img src={whatsapp} alt="" className="w-[24px] cursor-pointer" />
          <span class="text-[#F2CD5C] text-[30px] cursor-pointer material-symbols-outlined">mail</span>
        </div>
      </div>
      <div>
        <img src={foto2} alt="" className="" />
      </div>
    </div>
  )
}

export default Profile
