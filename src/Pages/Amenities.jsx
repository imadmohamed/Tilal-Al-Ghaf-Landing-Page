import React from 'react';
import { motion } from 'framer-motion';

const Amenities = () => {
  return (
    <div className='relative w-full min-h-screen big-white'>
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src='/AMENITIESPlagette.png'
        alt='Amenities Plagette'
        className="absolute left-20 top-[10%] transform -translate-y-1/2 w-[1500px] h-auto z-20"
      />

      <div className="relative w-full min-h-screen bg-white">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src="/8.png"
          alt="Left side image"
          className="absolute left-10 top-[45%] transform -translate-y-1/2 w-[800px] h-auto z-20"
        />

        <div className="relative w-full min-h-screen bg-white">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src="/asset-1.png"
            alt="Asset 1"
            className="absolute right-[-1%] top-[45%] transform -translate-y-1/2 w-[800px] h-auto z-20"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            src="/PRIVATE BEACH.png"
            alt="PRIVATE BEACH"
            className="absolute right-[18%] top-[70%] transform -translate-y-1/2 w-[160px] h-auto z-20"
          />
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          src="/KIDS' POOL.png"
          alt="KIDS' POOL"
          className="absolute left-90 top-[70%] transform -translate-y-1/2 w-[130px] h-auto z-20"
        />
      </div>

      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        src="/10.png"
        alt="RESTAURANTS.png"
        className="absolute right-[54%] top-[98%] transform -translate-y-1/2 w-[800px] h-auto z-20"
      />

      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        src="/9.png"
        alt="Asset 1"
        className="absolute right-[3%] top-[98%] transform -translate-y-1/2 w-[800px] h-auto z-20"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute left-70 bottom-[-25%] z-30"
      >
        <img
          src="/RESTAURANTS.png"
          alt="Restaurants"
          className="h-10 w-auto object-contain"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute right-[22%] bottom-[-25%] z-30"
      >
        <img
          src="/FAMILY POOL.png"
          alt="FAMILY POOL"
          className="h-10 w-auto object-contain"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="absolute bottom-[-38%] right-20 z-30"
      >
        <div className="relative">
          <img
            src="/Rectangle 654.png"
            alt="Button background"
            className="h-18 w-auto"
          />
          <img
            src="/DOWNLOAD RENDERS.png"
            alt="Download Renders"
            className="absolute inset-0 h-9 w-auto m-auto"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Amenities;