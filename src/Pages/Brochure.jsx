import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Brochure = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px 0px" });
  const plagetteRef1 = useRef(null);
  const plagetteRef2 = useRef(null);
  const plagetteInView1 = useInView(plagetteRef1, { once: true, margin: "-100px 0px" });
  const plagetteInView2 = useInView(plagetteRef2, { once: true, margin: "-100px 0px" });

  return (
    <div className="relative h-screen">
      <img
        src="/BROCHURE.png"
        alt="Video"
        className="absolute bottom-75 left-24 w-[980px] h-auto z-30"
      />

      <div className="flex justify-center items-end h-full pb-10">
        <img 
          src="/Untitled-1 copy.png" 
          alt="12" 
          className="absolute top-180 left-24 w-[1490px] h-[600px] z-30"
        />

        <img
          src="/Group 1284.png"
          alt="Floating Decoration"
          className="absolute top-[660px] left-[805px] w-[750px] h-auto z-40"
          style={{
            transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
          }}
        />

        <motion.img
          ref={plagetteRef1}
          src="/Plagette.png"
          alt="Floating Decoration"
          className="absolute top-[850px] left-[765px] w-[1150px] h-auto z-40"
          style={{
            transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={plagetteInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.2
          }}
        />

        <img
          src="/Rectangle 672.png"
          alt="Floating Decoration"
          className="absolute top-[800px] left-[105px] w-[550px] h-auto z-40"
          style={{
            transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
          }}
        />     

        <img
          src="/PLAGETTE 32 BROCHURE.png"
          alt="Floating Decoration"
          className="absolute top-[817px] left-[60px] w-[650px] h-auto z-40"
          style={{
            transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
          }}
        />        

        
      </div>

      {/* Form Container */}
      <motion.div 
        ref={formRef}
        className="absolute top-[90%] left-[11%] bg-white shadow-xl py-32 px-6 w-[520px] h-[550px] z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={formInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
      >
        <form 
          className="relative w-full max-w-[400px] mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6">
            {['name', 'email', '+971 __ ___ ____ ____'].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.3 + i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <input
                  type={field === 'Email' ? 'email' : field === '+971 __ ___ ____ ____' ? 'tel' : 'text'}
                  id={field}
                  name={field}
                  className="w-full h-15 text-lg border border-gray-300 px-6 focus:outline-none focus:ring-2 focus:ring-[#92d0c9]"
                  style={{ fontSize: '1.125rem' }}
                  placeholder={field === 'language' ? 'Preferred language*' : field.charAt(0).toUpperCase() + field.slice(1) + '*'}
                />
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full h-16 bg-[#92d0c9] text-white text-3xl font-light mt-8 transition-colors cursor-pointer"
              style={{ boxShadow: '0 -3px 6px rgba(0,0,0,0.15)', letterSpacing: '0.5px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }
              } : {}}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "#7fc1ba", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}
              whileTap={{ 
                scale: 0.98 
              }}
            >
              DOWNLOAD
            </motion.button>

            <img
              src="/Download Brochure Now.png"
              alt="Floating Decoration"
              className="absolute bottom-[370px] right-[85px] w-[320px] h-auto z-40"
              style={{
                transform: 'rotate(0deg) translateX(50px) translateY(-30px)'
              }}
            />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Brochure;
