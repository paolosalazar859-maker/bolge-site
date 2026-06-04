"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Social networks configurations
const socialNetworks = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/4Lu8zzPkOAP592vdHFHKA0?si=ceX1x5ewQGe5AsLarqqGSA",
    username: "BØLGE",
    bgColor: "hover:bg-[#1DB954]/5",
    borderColor: "hover:border-[#1DB954]/40",
    glowColor: "group-hover:shadow-[0_0_35px_rgba(29,185,84,0.3)]",
    iconColor: "text-[#1DB954]",
    svg: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.67-.136-.746-.472-.075-.337.136-.67.472-.747 3.856-.88 7.15-.509 9.82 1.13.297.18.39.563.207.862zm1.224-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.413.125-.85-.106-.975-.52-.125-.413.107-.85.52-.975 3.666-1.112 8.232-.574 11.345 1.34.37.227.49.708.26 1.078zm.105-2.825C14.39 8.766 8.583 8.574 5.213 9.597c-.523.158-1.078-.143-1.237-.666-.158-.522.143-1.078.666-1.237 3.864-1.173 10.283-.946 14.346 1.467.47.28.625.892.345 1.362-.28.47-.892.625-1.362.345z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bolge__",
    username: "@bolge__",
    bgColor: "hover:bg-[#E1306C]/5",
    borderColor: "hover:border-[#E1306C]/40",
    glowColor: "group-hover:shadow-[0_0_35px_rgba(225,48,108,0.3)]",
    iconColor: "text-[#E1306C]",
    svg: (
      <svg className="w-8 h-8 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@bolge_?_r=1&_t=ZS-96qs1flYcML",
    username: "@bolge_",
    bgColor: "hover:bg-[#00f2fe]/5",
    borderColor: "hover:border-[#00f2fe]/40",
    glowColor: "group-hover:shadow-[0_0_35px_rgba(0,242,254,0.25)]",
    iconColor: "text-[#00f2fe]",
    svg: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18.99 1.13 2.37 1.83 3.86 2.07v3.83c-1.8-.08-3.55-.78-4.9-1.99-.29-.26-.54-.53-.78-.83v6.78c-.02 1.6-.46 3.19-1.34 4.54a8.62 8.62 0 0 1-5.71 3.99c-1.89.37-3.88.08-5.59-.85A8.679 8.679 0 0 1 1.05 16.3c-.66-1.78-.65-3.76.02-5.53A8.647 8.647 0 0 1 5.92 5.56c1.39-.42 2.89-.35 4.23.2v3.9c-.83-.41-1.77-.52-2.67-.32a4.73 4.73 0 0 0-3.32 2.92c-.44 1.15-.36 2.45.24 3.53a4.73 4.73 0 0 0 3.73 2.35c1.4.08 2.82-.67 3.47-1.92.35-.69.49-1.47.47-2.25V.02z" />
      </svg>
    ),
  },
  {
    name: "Tidal",
    url: "https://tidal.com/artist/8953328/u",
    username: "BØLGE",
    bgColor: "hover:bg-[#333333]/10",
    borderColor: "hover:border-white/30",
    glowColor: "group-hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]",
    iconColor: "text-white",
    svg: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 7.156l-4.844 4.844 4.844 4.844 4.844-4.844L12 7.156zM4.844 12L0 16.844l4.844 4.844 4.844-4.844L4.844 12zm14.312 0l-4.844 4.844 4.844 4.844L24 16.844 19.156 12zM12 0L7.156 4.844 12 9.688l4.844-4.844L12 0z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@bolge-i4h",
    username: "BØLGE",
    bgColor: "hover:bg-[#FF0000]/5",
    borderColor: "hover:border-[#FF0000]/40",
    glowColor: "group-hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]",
    iconColor: "text-[#FF0000]",
    svg: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Socials() {
  return (
    <section
      id="redes"
      className="relative w-full py-24 md:py-36 overflow-hidden px-6 md:px-16 lg:px-24 bg-[#050505]"
    >
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-neon-blue/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-neon-purple/10 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-neon-purple" />
            <span className="text-xs uppercase tracking-[0.3em] text-brand-neon-purple font-sans font-bold">
              Conexión
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-white leading-tight">
            Comunidad & Canales
          </h2>
        </div>

        {/* Social Grid (2 columns on mobile/tablet, 3 on intermediate, 5 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {socialNetworks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group glass-panel p-5 md:p-6 rounded-sm border border-white/5 flex flex-col justify-between h-40 md:h-48 transition-all duration-500 hover:scale-[1.03] ${social.bgColor} ${social.borderColor} ${social.glowColor} cursor-pointer relative overflow-hidden
                ${index === 4 ? "col-span-2 md:col-span-1" : ""}
              `}
            >
              {/* Dynamic glare lines (diagonal reflections) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-in-out" />

              {/* Icon & Arrow block */}
              <div className="flex items-start justify-between">
                <span className={`transition-transform duration-500 group-hover:scale-110 ${social.iconColor}`}>
                  {social.svg}
                </span>
                <span className="text-white/20 group-hover:text-white/80 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              {/* Text labels */}
              <div className="flex flex-col">
                <span className="text-[10px] font-sans tracking-widest text-brand-smoke-gray uppercase font-semibold">
                  {social.name}
                </span>
                <span className="text-white text-base font-light tracking-wide mt-1 group-hover:text-white transition-colors duration-300">
                  {social.username}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
