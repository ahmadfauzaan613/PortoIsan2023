import React from 'react'
import foto2 from '../assets/foto2.png'
function About() {
  return (
    <div className="container mx-auto mt-[9.6rem]">
      <div className="flex items-center justify-between">
        <p className="text-[16px] w-[35vw] text-justify">
          My name is Rahmatul Ikhsan, I was born on September 30, 1997, I am an alumni of Sultan Syarif Kasim Riau State Islamic University. I graduated in 2022, with a 3.11 GPA. My work experience, I have worked at smoots.id as a Social Media Strategic where my job is to take care of making
          products as well as managing smoots.id Instagram. I also have internship experience and work at PT. Citra Media Bertuah, my position is as a journalist covering the news that will be broadcast on the Bertuahpos.com page. I also have freelance experience at Hipwee.com, at Hipwee.com I write
          several articles that are quite interesting for me to share with readers. My interest is in Content writing and Copy writing because I majored in communication science with a concentration in journalism, I am very interested in writing activities. For my expertise, I am proficient in using
          Microsoft Office, Canva design, Adobe Photoshop, Interviewing, Reporting and also Writing
        </p>
        <div>
          <img src={foto2} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default About
