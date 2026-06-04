"use client";

import { motion } from "framer-motion";

const footerSocials = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/4Lu8zzPkOAP592vdHFHKA0?si=ceX1x5ewQGe5AsLarqqGSA",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.67-.136-.746-.472-.075-.337.136-.67.472-.747 3.856-.88 7.15-.509 9.82 1.13.297.18.39.563.207.862zm1.224-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.413.125-.85-.106-.975-.52-.125-.413.107-.85.52-.975 3.666-1.112 8.232-.574 11.345 1.34.37.227.49.708.26 1.078zm.105-2.825C14.39 8.766 8.583 8.574 5.213 9.597c-.523.158-1.078-.143-1.237-.666-.158-.522.143-1.078.666-1.237 3.864-1.173 10.283-.946 14.346 1.467.47.28.625.892.345 1.362-.28.47-.892.625-1.362.345z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bolge__",
    svg: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@bolge_?_r=1&_t=ZS-96qs1flYcML",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18.99 1.13 2.37 1.83 3.86 2.07v3.83c-1.8-.08-3.55-.78-4.9-1.99-.29-.26-.54-.53-.78-.83v6.78c-.02 1.6-.46 3.19-1.34 4.54a8.62 8.62 0 0 1-5.71 3.99c-1.89.37-3.88.08-5.59-.85A8.679 8.679 0 0 1 1.05 16.3c-.66-1.78-.65-3.76.02-5.53A8.647 8.647 0 0 1 5.92 5.56c1.39-.42 2.89-.35 4.23.2v3.9c-.83-.41-1.77-.52-2.67-.32a4.73 4.73 0 0 0-3.32 2.92c-.44 1.15-.36 2.45.24 3.53a4.73 4.73 0 0 0 3.73 2.35c1.4.08 2.82-.67 3.47-1.92.35-.69.49-1.47.47-2.25V.02z" />
      </svg>
    ),
  },
  {
    name: "Tidal",
    url: "https://tidal.com/artist/8953328/u",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 7.156l-4.844 4.844 4.844 4.844 4.844-4.844L12 7.156zM4.844 12L0 16.844l4.844 4.844 4.844-4.844L4.844 12zm14.312 0l-4.844 4.844 4.844 4.844L24 16.844 19.156 12zM12 0L7.156 4.844 12 9.688l4.844-4.844L12 0z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@bolge-i4h",
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] overflow-hidden pt-20 pb-24 border-t border-white/5 select-none">
      
      {/* 
        Slow black fade overlay mask.
        As the user scrolls to the absolute bottom, the solid black fades,
        leaving ONLY the background particles of the Three.js viewport visible.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-transparent pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center relative z-10 text-center">
        {/* Footer Brand Logo */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white font-heading"
        >
          B<span className="text-brand-neon-purple font-normal">Ø</span>LGE
        </motion.h2>

        {/* Cinematic Goodbye Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xs md:text-sm tracking-[0.3em] text-brand-smoke-gray uppercase font-light font-sans"
        >
          Gracias por formar parte del viaje.
        </motion.p>

        {/* Minimalist social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="mt-10 flex items-center gap-6"
        >
          {footerSocials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-smoke-gray hover:text-white transition-colors duration-300 transform hover:scale-115 transition-transform"
              title={social.name}
            >
              {social.svg}
            </a>
          ))}
        </motion.div>

        {/* Copyright & Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="mt-16 text-[9px] md:text-xs font-sans tracking-widest text-brand-smoke-gray uppercase font-semibold flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <span>© {new Date().getFullYear()} BØLGE.</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1">
            SITIO CREADO POR{" "}
            <a
              href="https://optimizatedigital.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-neon-purple transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-brand-neon-purple/50"
            >
              OPTIMIZATEDIGITAL
            </a>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
