import React from 'react'

const Video = () => {
  return (
    <div className="relative h-screen">

      <img
        src="/VIDEO.png"
        alt="Video"
        className="absolute bottom-44 left-24 w-[980px] h-auto z-30"
      />


      <div className="flex justify-center items-end h-full pb-10">

        <img 
          src="/12.png" 
          alt="12" 
          className="absolute top-211 left-24 w-[1490px] h-auto z-30"
        />
        
        <img
          src="/Path 918.png"
          alt="Floating Decoration"
          className="absolute top-[1100px] left-[700px] w-[150px] h-auto z-40"
          style={{
            transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
          }}
        />
      </div>
    </div>
  )
}

export default Video;

