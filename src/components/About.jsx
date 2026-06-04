"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-bolge"
      className="relative w-full py-24 md:py-36 overflow-hidden px-6 md:px-16 lg:px-24 bg-gradient-to-b from-transparent to-[#0a0a0a]/50"
    >
      {/* Huge floating decorative Ø in the background */}
      <div className="absolute right-[-10%] top-1/4 select-none pointer-events-none opacity-5 z-0">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="block text-[40vw] font-light text-white leading-none font-sans"
        >
          Ø
        </motion.span>
      </div>

      <div className="absolute left-[-5%] bottom-10 select-none pointer-events-none opacity-5 z-0">
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="block text-[30vw] font-extralight text-brand-neon-blue leading-none font-sans"
        >
          Ø
        </motion.span>
      </div>

      {/* Main Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Art Photo with overlays */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] rounded-sm"
          >
            {/* Glowing purple ambient circle behind the image */}
            <div className="absolute -inset-4 rounded-full bg-brand-neon-purple/20 blur-[60px] -z-10 animate-pulse duration-[4000ms]" />

            {/* Premium minimal border */}
            <div className="absolute inset-0 border border-white/10 rounded-sm z-20 pointer-events-none" />

            <img
              src="/fotos/IMG_5904.jpg"
              alt="BØLGE Artistic Portrait"
              loading="lazy"
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        </div>



      </div>
    </section>
  );
}
