import React from 'react'
import { motion } from 'framer-motion'

const Location = () => {
  return (
    <div className='relative w-full min-h-screen bg-white'>
      <div className='relative w-full min-h-screen bg-white'>
        <motion.img
          src="/Location.png"
          alt="Location"
          className="absolute top-100 left-20 w-[1500px] h-auto z-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        />  
      </div>

      <motion.img
        src="/Group 1273.png"
        alt="Group 1273"
        className="absolute top-[80%] right-10 w-[700px] h-auto z-20"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      />

      <motion.div 
        className="absolute left-40 top-[85%] flex flex-col space-y-25 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.img 
          src="/10Mins.png" 
          alt="10 Minutes" 
          className="w-[150px] h-auto" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.img 
          src="/asset-3.png" 
          alt="Asset 1" 
          className="w-[150px] h-auto" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.img 
          src="/asset-3.png"  
          alt="Asset 2" 
          className="w-[150px] h-auto" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div 
        className="absolute left-[30%] top-[85%] flex flex-col space-y-25 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.img 
          src="/asset-2.png" 
          alt="10 Minutes" 
          className="w-[150px] h-auto" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.img 
          src="/asset-2.png" 
          alt="Asset 1" 
          className="w-[150px] h-auto" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.img 
          src="/30Mins.png"  
          alt="Asset 2" 
          className="w-[150px] h-auto" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div 
        className="absolute left-39 top-[92%] flex flex-col space-y-20 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="/City Centre Me’aisem.png" 
          alt="City Centre Me’aisem.png" 
          className="w-[140px] h-auto" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[9.3%] bottom-[-14%] flex flex-col space-y-20 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >   
        <img 
          src="/Mall of Emirates.png" 
          alt="Mall of Emirates" 
          className="w-[140px] h-auto" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[9.3%] bottom-[-32.5%] flex flex-col space-y-20 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >   
        <img 
          src="/Kempinski Hotel.png"  
          alt="Kempinski Hotel" 
          className="w-[150px] h-auto" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[29.5%] bottom-[5%] flex flex-col space-y-20 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >   
        <img 
          src="/Downtown Dubai.png"  
          alt="Downtown Dubai" 
          className="w-[150px] h-auto" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[29.5%] bottom-[-13.5%] flex flex-col space-y-20 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >   
        <img 
          src="/Al Maktoum Airport.png"  
          alt="Al Maktoum Airport" 
          className="w-[170px] h-auto" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[29.6%] bottom-[-32%] flex flex-col space-y-20 z-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >   
        <img 
          src="/DXB Airport.png"  
          alt="DXB Airport" 
          className="w-[110px] h-auto" 
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-[-52%] right-[76%] z-30 w-[250px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          <img 
            src="/Rectangle 654.png" 
            alt="Button background" 
            className="w-full h-auto"
          />
          <img
            src="/LEARN MORE-1.png"
            alt="Learn More"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Location;