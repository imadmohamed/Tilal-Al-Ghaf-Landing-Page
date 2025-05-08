

import React from 'react'

const Video = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video Image */}
      <img
        src="/VIDEO.png"
        alt="Video"
        className="absolute bottom-14 left-24 w-[980px] h-auto z-30"
      />

      {/* Main Image Container */}
      <div className="flex justify-center items-end h-full pb-10">
        {/* Existing 12.png image */}
        <img 
          src="/12.png" 
          alt="12" 
          className="absolute top-240 left-24 w-[1490px] h-auto z-30"
        />
        
        {/* New Floating Path 918.png image */}
        <img
          src="/Path 918.png"
          alt="Floating Decoration"
          className="absolute top-[1210px] left-[700px] w-[150px] h-auto z-40"
          style={{
            transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
          }}
        />
      </div>
    </div>
  )
}

export default Video;

