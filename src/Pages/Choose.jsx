import React from 'react';

const Choose = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">

      <img
        src="/WHY CHOOSEPlagette 32 - Tilal Al Ghaf.png"
        alt="Why Choose Plagette"
        className="absolute top-0 left-10 mt-8 ml-8 w-[1200px] h-auto z-30"
      />

      <img
        src="/Group 1269.png"
        alt="Group 1269"
        className="absolute left-0 top-1/2 transform -translate-y-1/3 w-[700px] h-auto z-20"
      />
      
      <img
        src="/Group 1265.png"
        alt="Group"
        className="absolute right-0 top-1/2 h-auto z-20"
        style={{
          width: '2600px',
          maxWidth: 'none',
          transform: 'translateY(-66%) translateX(33%) scale(1.1)',
          transformOrigin: 'right center'
        }}
      />

      <img
        src="/Plagette-32.png"
        alt="Plagette 32"
        className="absolute right-10 top-1/2 transform -translate-y-[28%] w-[850px] h-auto z-20"
      />


      <div className="absolute bottom-0 right-20 z-30">
        <div className="relative">

          <img 
            src="/Rectangle 654.png" 
            alt="Button background" 
            className="h-18 w-auto"
          />

          <img
            src="/LEARN MORE-1.png"
            alt="Download Renders"
            className="absolute inset-0 h-9 w-auto m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;

