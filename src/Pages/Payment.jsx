import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Payment = () => {
  const paymentImgRef = useRef(null);
  const cardsRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const infoImgRef = useRef(null);
  const groupImgRef = useRef(null);
  const formRef = useRef(null);

  const paymentImgInView = useInView(paymentImgRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const infoImgInView = useInView(infoImgRef, { once: true });
  const groupImgInView = useInView(groupImgRef, { once: true });
  const formInView = useInView(formRef, { once: true });

  return (
    <div className="relative w-full h-screen">
      {/* Payment Plan Image with fade-in */}
      <motion.img
        ref={paymentImgRef}
        src="/PAYMENT PLAN.png"
        alt="Payment Plan"
        className="absolute top-170 left-20 w-[1150px] h-auto object-contain -mt-4 ml-4"
        initial={{ opacity: 0 }}
        animate={paymentImgInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      />

      {/* Cards Container */}
      <motion.div 
        ref={cardsRef}
        className="flex flex-col space-y-14 w-[580px] absolute right-[55%] bottom-[-50%] z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* First Card */}
        <motion.div 
          ref={card1Ref}
          className="bg-white p-6 border-none text-center"
          style={{ boxShadow: '4px 4px 8px -4px #91cfc8, -4px 4px 8px -4px #91cfc8' }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={card1InView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.img 
            src="/During Construction60_.png" 
            alt="During Construction" 
            className="mx-auto w-[250px] h-auto mb-2"
          />
        </motion.div>

        {/* Second Card */}
        <motion.div 
          ref={card2Ref}
          className="bg-white p-6 border-none text-center"
          style={{ boxShadow: '4px 4px 8px -4px #91cfc8, -4px 4px 8px -4px #91cfc8' }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={card2InView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.img 
            src="/on Handover40_.png" 
            alt="On Handover" 
            className="mx-auto w-[150px] h-auto mb-4"
          />
          <div className="relative">
            <motion.img
              ref={infoImgRef}
              src="/NEED FINANCIAL INFORMATION.png"
              alt="Need Financial Information"
              className="absolute bottom-[500px] right-[-650px] w-[500px] h-auto z-30"
              initial={{ opacity: 0 }}
              animate={infoImgInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Group 1282 Image with subtle float */}
      <motion.img
        ref={groupImgRef}
        src="/Group 1282.png"
        alt="Group 1282"
        className="absolute top-[930px] left-210 w-[400px] h-[600px] z-30"
        animate={groupImgInView ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Form Container */}
      <motion.div 
        ref={formRef}
        className="absolute top-[98%] right-[24%] bg-white shadow-xl py-12 p-6 w-[420px] h-[630px] z-30"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={formInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <form 
          className="relative w-full max-w-[400px] mx-auto"
          onSubmit={(e) => e.preventDefault()}  
        >
          <div className="space-y-6">
            {['name', 'email', 'mobile', 'language'].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -10 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <input
                  type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                  id={field}
                  name={field}
                  className="w-full h-20 text-lg border-t-0 border-l-0 border-r-0 border-b-0 px-6 focus:outline-none focus:ring-2 focus:ring-[#92d0c9]"
                  style={{ boxShadow: '0 -2px 4px rgba(0,0,0,0.1)', fontSize: '1.125rem', borderBottom: 'none' }}
                  placeholder={field === 'language' ? 'Preferred language*' : field.charAt(0).toUpperCase() + field.slice(1) + '*'}
                />
                <div className="border-b border-gray-300 mt-[-1px]"></div>
              </motion.div>
            ))}

          <motion.button
                    type="submit"
                    className="w-full h-16 bg-[#92d0c9] text-white font-extrabold text-xl mt-8 transition-colors cursor-pointer"
                    style={{ boxShadow: '0 -3px 6px rgba(0,0,0,0.15)', letterSpacing: '0.5px' }}
                    whileHover={{ scale: 1.02, backgroundColor: "#7fc1ba", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    initial={{ opacity: 0 }}
                    animate={formInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.1 }}
                    >
          SUBMIT
          </motion.button>

          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Payment;
