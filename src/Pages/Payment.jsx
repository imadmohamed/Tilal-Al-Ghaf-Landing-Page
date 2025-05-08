import React from 'react'

const Payment = () => {
  return (
          <div className="relative w-full h-screen">
          <img
            src="/PAYMENT PLAN.png"
            alt="Payment Plan"
            className="absolute top-170 left-20 w-[1150px] h-auto object-contain -mt-4 ml-4"
          />

<div className="flex flex-col space-y-14 w-[580px] absolute right-[55%] bottom-[-50%] z-30">
  {/* First Card */}
  <div 
    className="bg-white p-6 border-none text-center"
    style={{ 
      boxShadow: '4px 4px 8px -4px #91cfc8, -4px 4px 8px -4px #91cfc8',
    }}
  >
    <img 
      src="/During Construction60_.png" 
      alt="During Construction" 
      className="mx-auto w-[250px] h-auto mb-2"
    />
  </div>

  {/* Second Card */}
  <div 
    className="bg-white p-6 border-none text-center"
    style={{ 
      boxShadow: '4px 4px 8px -4px #91cfc8, -4px 4px 8px -4px #91cfc8',
    }}
  >
    <img 
      src="/on Handover40_.png" 
      alt="On Handover" 
      className="mx-auto w-[150px] h-auto mb-4"
    />
    <div className="relative">
  <img
    src="/NEED FINANCIAL INFORMATION.png"
    alt="Need Financial Information"
    className="absolute bottom-[500px] right-[-700px] w-[500px] h-auto z-30"
  />
</div>
  </div>
  
  </div>
  <img
  src="/Group 1282.png"
  alt="Group 1282"
  className="absolute top-[930px] left-210 w-[400px] h-[600px] z-30"
/>






      <div className="absolute top-[98%] right-[24%] bg-white shadow-xl py-12  p-6 w-[420px] h-[630px] z-30">

      <form className="relative w-full max-w-[400px] mx-auto">
  <div className="space-y-6">
    {/* Name Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="name"></label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full h-20 text-lg border-t-0 border-l-0 border-r-0 border-b-0 px-6 focus:outline-none focus:ring-2 focus:ring-[#92d0c9]"
        style={{ 
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
          fontSize: '1.125rem',
          borderBottom: 'none' // Explicit removal
        }}
        placeholder="Name*"
      />
      <div className="border-b border-gray-300 mt-[-1px]"></div> {/* Visual border replacement */}
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full h-20 text-lg border-t-0 border-l-0 border-r-0 border-b-0 px-6 focus:outline-none focus:ring-2 focus:ring-[#92d0c9]"
        style={{ 
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
          fontSize: '1.125rem',
          borderBottom: 'none'
        }}
        placeholder="Email*"
      />
      <div className="border-b border-gray-300 mt-[-1px]"></div>
    </div>

    {/* Mobile Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile"></label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        className="w-full h-20 text-lg border-t-0 border-l-0 border-r-0 border-b-0 px-6 focus:outline-none focus:ring-2 focus:ring-[#92d0c9]"
        style={{ 
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
          fontSize: '1.125rem',
          borderBottom: 'none'
        }}
        placeholder="Mobile*"
      />
      <div className="border-b border-gray-300 mt-[-1px]"></div>
    </div>

    {/* Language Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="language"></label>
      <input
        type="text"
        id="language"
        name="language"
        className="w-full h-20 text-lg border-t-0 border-l-0 border-r-0 border-b-0 px-6 focus:outline-none focus:ring-2 focus:ring-[#92d0c9]"
        style={{ 
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
          fontSize: '1.125rem',
          borderBottom: 'none'
        }}
        placeholder="Preferred language*"
      />
      <div className="border-b border-gray-300 mt-[-1px]"></div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full h-16 bg-[#92d0c9] text-white font-extrabold text-xl mt-8 hover:bg-[#7fc1ba] transition-colors"
      style={{ 
        boxShadow: '0 -3px 6px rgba(0,0,0,0.15)',
        letterSpacing: '0.5px'
      }}
    >
      SUBMIT
    </button>
  </div>
</form>
      </div>



</div>
        
  )
}

export default Payment