import React from 'react'
import { motion } from 'framer-motion'

const Plagette = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-start p-4 md:p-16 space-y-4 md:space-y-6">

      <motion.img
        src='/PLAGETTE 32Tilal Al Ghaf.png'
        alt='Plagette'
        className='w-full max-w-[1200px] h-auto z-20'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      />


      <motion.img
        src='/plagette32-by-majid.png'
        alt='Plagette'
        className='w-full max-w-[1100px] h-auto z-20'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />


      <motion.img
        src="/plagette921.png"
        alt="Group 921"
        className="absolute top-1/3 right-0 transform -translate-y-1/2 w-[280px] h-auto z-20"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />


      <motion.img
        src="/Group 921.png"
        alt="Group 921"
        className="absolute top-[11.9%] right-[-250px] transform -translate-y-1/2 w-[1600px] h-auto z-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.6 }}
      />


      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16 w-full z-30 mt-6 md:mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div 
          className="flex-1 min-w-[250px] bg-white/10 backdrop-blur-md p-6 border border-white/30 flex justify-center"
          style={{ boxShadow: '0 8px 20px -4px #91cfc8' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/STARTING PRICEAED 7.5M.png" 
            alt="Starting Price" 
            className="h-30 w-auto object-contain" 
          />
        </motion.div>
        
        <motion.div 
          className="flex-1 min-w-[250px] bg-white/10 backdrop-blur-md p-6 border border-white/30 flex justify-center"
          style={{ boxShadow: '0 8px 20px -4px #91cfc8' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/HANDOVER2026.png" 
            alt="Handover 2026" 
            className="h-30 w-auto object-contain" 
          />
        </motion.div>
        
        <motion.div
          className="flex-1 min-w-[250px] bg-white/10 backdrop-blur-md p-6 border border-white/30 flex justify-center"
          style={{ boxShadow: '0 8px 20px -4px #91cfc8' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/PAYMENTPLAN60-40.png" 
            alt="Payment Plan" 
            className="h-30 w-auto object-contain" 
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Plagette;