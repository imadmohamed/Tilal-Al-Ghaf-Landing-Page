import React from 'react';
import { motion } from 'framer-motion';

const Register = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const float = {
    hidden: { y: 0 },
    show: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className='relative left-[150px]'
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Floating Header */}
      <motion.img
        src='Register Now-1.png'
        alt='Register headline'
        className='absolute top-[1600px] width-full h-[80px] left-[300px]'
        variants={float}
      />

      {/* Form Container */}
      <div className='relative left-[0px]'>
        {/* Form Background */}
        <motion.img
          src="Rectangle 359.png"
          alt="form bg"
          className="absolute top-[1660px] left-[150px] w-[600px] h-[1080px] shadow-md py-7"
          style={{ boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}
          variants={item}
        />

        {/* Name Field */}
        <motion.div className='absolute top-[1750px] w-[520px] h-[80px] left-[190px]' variants={item}>
          <input
            type="text"
            placeholder="test Name*"
            className="w-full h-full pl-6 text-gray-800 bg-transparent border-none focus:outline-none 
                      placeholder:text-2xl placeholder:font-light placeholder:opacity-80"
            style={{
              backgroundImage: "url('/Rectangle 362.png')",
              backgroundSize: '100% 100%',
              paddingTop: '24px',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          />
        </motion.div>

        {/* Email Field */}
        <motion.div className='absolute top-[1860px] w-[520px] h-[80px] left-[190px]' variants={item}>
          <input
            type="email"
            placeholder="Email*"
            className="w-full h-full pl-6 text-gray-800 bg-transparent border-none focus:outline-none 
                      placeholder:text-2xl placeholder:font-light placeholder:opacity-80"
            style={{
              backgroundImage: "url('/Rectangle 362.png')",
              backgroundSize: '100% 100%',
              paddingTop: '24px',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          />
        </motion.div>

        {/* Mobile Field */}
        <motion.div className='absolute top-[1970px] w-[520px] h-[80px] left-[190px]' variants={item}>
          <input
            type="tel"
            placeholder="Mobile*"
            className="w-full h-full pl-6 text-gray-800 bg-transparent border-none focus:outline-none 
                      placeholder:text-2xl placeholder:font-light placeholder:opacity-80"
            style={{
              backgroundImage: "url('/Rectangle 362.png')",
              backgroundSize: '100% 100%',
              paddingTop: '24px',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          />
        </motion.div>

        {/* Preferred Language Field */}
        <motion.div className='absolute top-[2080px] w-[520px] h-[80px] left-[190px]' variants={item}>
          <input
            type="text"
            placeholder="Preferred language*"
            className="w-full h-full pl-6 text-gray-800 bg-transparent border-none focus:outline-none 
                      placeholder:text-2xl placeholder:font-light placeholder:opacity-80"
            style={{
              backgroundImage: "url('/Rectangle 362.png')",
              backgroundSize: '100% 100%',
              paddingTop: '24px',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          />
        </motion.div>

        {/* Message Field */}
        <motion.div className='absolute top-[2190px] w-[520px] h-[320px] left-[190px]' variants={item}>
          <textarea
            placeholder="Message (optional)"
            className="w-full h-full pl-6 pt-6 text-gray-800 bg-transparent border-none focus:outline-none 
                      placeholder:text-2xl placeholder:font-light placeholder:opacity-80 resize-none"
            style={{
              backgroundImage: "url('/Rectangle 364.png')",
              backgroundSize: '100% 100%',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button 
          className="absolute top-[2560px] w-[520px] h-[60px] left-[190px] bg-transparent border-none cursor-pointer overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <img
            src="Rectangle 358.png"
            alt="submit button background"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <motion.img
            src="SUBMIT.png"
            alt="submit"
            className="absolute w-[80px] h-auto"
            style={{
              left: '220px',
              top: '12px'
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.button>
      </div>

      {/* Right Side Graphics */}
      <motion.img
        src='THE BESTDealsARE THERESULTSOF OUREXPERTISE.png'
        alt='THE BESTDealsARE THERESULTSOF OUREXPERTISE'
        className='absolute top-[1840px] w-[820px] h-[550px] left-[890px]'
        variants={float}
      />

      <motion.img
        src='Group 1271.png'
        alt='Group 1271'
        className='absolute top-[1700px] w-[750px] h-[300px] left-[930px]'
        variants={item}
      />

      <motion.img
        src='Contact us today.png'
        alt='Contact us today'
        className='absolute top-[2600px] w-[500px] h-[50px] left-[890px]'
        variants={item}
      />

      <motion.img
        src='+971 56 604 5684.png'
        alt='contact us'
        className='absolute top-[2650px] w-[450px] h-[50px] left-[890px]'
        variants={item}
      />
    </motion.div>
  )
}

export default Register;
