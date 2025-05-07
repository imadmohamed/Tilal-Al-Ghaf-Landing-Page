import React from 'react';
import { motion } from 'framer-motion';

const Gallary = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-start space-y-6 pl-16 pr-16 pb-16">
      <img
        src="/Gallaryget.png"
        alt="GALLERY - Get a glimpse of this 'Côte d'Azur' themed community"
        className="w-[1200px] h-auto z-20"
      />

      <div className="grid grid-cols-2 grid-rows-4 gap-8 w-full">

        <div className="col-span-2">
          <img src="/3.png" alt="Image 1" className="w-full h-auto object-cover" />
        </div>
        
        <div className="row-span-2 row-start-2 relative">
          <img src="/2.png" alt="Image 2" className="w-full h-full object-cover" />
          <img
            src="/Group 925.png"
            alt="Floating Decoration"
            className="absolute left-0 top-0 w-[60%] h-auto object-contain"
            style={{
              transform: 'translateY(-27%) translateX(-10%)',
              zIndex: 10
            }}
          />
        </div>
        
        <div className="row-start-2">
          <img src="/4.png" alt="Image 3" className="w-full h-full object-cover" />
        </div>
        
        <div className="col-start-2 row-start-3">
          <img src="/11.png" alt="Image 4" className="w-full h-full object-cover" />
        </div>

        <div className="relative col-span-2">
          <img src="/7.png" alt="Main Image" className="w-full h-auto object-cover" />
          <img
            src="/6.png"
            alt="Floating Image"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[100%] h-auto object-cover border-2 border-none"
            style={{
              transform: 'translateY(-7.8%) translateX(46%)',
              zIndex: 10
            }}
          />
        </div>
      </div>


      <motion.div 
        className="flex justify-end w-full mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative inline-block">

          <img 
            src="/Rectangle 654.png" 
            alt="Button background" 
            className="h-14 w-auto"
          />

          <img
            src="/DOWNLOAD RENDERS.png"
            alt="Download Renders"
            className="absolute inset-0 h-8 w-auto m-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Gallary;