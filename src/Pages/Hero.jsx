import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background image */}
      <motion.img 
        src="/1.png" 
        alt="Background image" 
        className="h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Left-side rectangle */}
      <motion.img
        src="/Rectangle 5.png"
        alt="Rectangle"
        className="absolute top-0 left-0 h-full w-auto z-10 md:w-[400px] sm:w-[250px]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />

      {/* Bottom image */}
      <motion.img
        src='/Rectangle 2.png'
        alt='Bottom image'
        className='absolute bottom-0 left-0 w-full h-auto z-0 md:h-[300px] sm:h-[200px]'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Logo */}
      <motion.img
        src='/Group-4.png'
        alt='Logo'
        className='absolute top-8 left-8 md:top-16 md:left-15 w-[150px] h-auto z-10 md:w-[280px]'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />

      {/* Group 6 */}
      <motion.img
        src='/Group 6.png'
        alt='Group 6'
        className='absolute bottom-8 left-8 w-[200px] h-auto z-10 md:bottom-16 md:left-20 md:w-[480px]'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />

      {/* Buttons & Group 2 */}
      <motion.div 
        className="absolute bottom-4 right-4 md:bottom-10 md:right-15 flex flex-col items-end space-y-2 md:space-y-4 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <img 
          src="/Group 2.png" 
          alt="Group 2" 
          className="w-[120px] h-auto mb-0 md:w-[600px]" 
        />

        <button className="px-6 py-3 md:px-12 md:py-5 bg-white/10 border border-none rounded-3xl backdrop-blur-md hover:bg-white/20 hover:opacity-100 transition duration-300">
          <img 
            src="/DOWNLOAD BROCHURE.png" 
            alt="Download Brochure" 
            className="h-4 md:h-6" 
          />
        </button>

        <button className="px-6 py-3 md:px-12 md:py-5 bg-white/10 border border-none rounded-3xl backdrop-blur-md hover:bg-white/20 hover:opacity-100 transition duration-300">
          <img 
            src="/REGISTER NOW.png" 
            alt="Register Now" 
            className="h-4 md:h-6" 
          />
        </button>
      </motion.div>
    </div>
  )
}

export default Hero;



