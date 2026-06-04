"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-[18vh] md:items-start md:justify-start overflow-hidden px-6 md:px-16 lg:px-24 text-center md:text-left"
    >
      {/* Locked Background image — positioned to feature the guitar */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/fotos/IMG_5333.jpg')",
          backgroundPosition: "60% 65%",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Mobile gradient overlay (vertical fade to ensure text readability on narrow viewports) */}
      <div
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(5,5,5,1) 0%, rgba(5,5,5,0.95) 45%, rgba(5,5,5,0.6) 75%, rgba(5,5,5,0.2) 100%)",
        }}
      ></div>

      {/* Desktop gradient overlay (cinematic horizontal soft fade) */}
      <div
        className="hidden lg:block absolute inset-0 z-0"
        style={{
          background: "linear-gradient(110deg, rgba(5,5,5,1) 45%, rgba(5,5,5,0.9) 55%, rgba(5,5,5,0) 75%)",
        }}
      ></div>

      {/* Decorative glow elements */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full bg-brand-neon-blue/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-neon-purple/10 blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Side: Typography & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">


          {/* Artist Name (Responsive sizes for mobile viewports) */}
          <motion.h1
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-light tracking-[0.08em] text-white leading-none select-none"
          >
            B<span className="text-brand-neon-purple glow-text-purple font-normal">Ø</span>LGE
          </motion.h1>

          {/* Slogan */}


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection("musica")}
              className="group relative px-8 py-4 bg-[#050505] text-white font-medium tracking-[0.15em] text-xs uppercase border border-brand-neon-purple/40 rounded-sm overflow-hidden transition-all duration-500 hover:border-brand-neon-purple hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-neon-purple/20 to-brand-electric-blue/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
              ESCUCHAR AHORA
            </button>
            {/* Secondary CTA */}
            <a
              href="https://www.instagram.com/bolge__"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 bg-white/5 border border-white/10 text-[#F8FAFC] font-medium tracking-[0.15em] text-xs uppercase rounded-sm overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2"
            >
              SEGUIR EN INSTAGRAM
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollToSection("musica")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-[10px] tracking-[0.2em] text-brand-smoke-gray uppercase font-light">
          Descubrir
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-full h-4 bg-brand-neon-purple"
          />
        </div>
      </motion.div>
    </section>
  );
}
