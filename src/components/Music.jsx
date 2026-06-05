"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Calendar, Lock, Volume2 } from "lucide-react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic, SiTidal } from "react-icons/si";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  // Clean audio source path
  const audioSrc = "/proximo-lanzamiento/NTANS_MASTER_FINAL.wav";
  const coverSrc = "/proximo-lanzamiento/NTANS_FINAL_CUADRADA.png";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

    const onLoadedMetadata = () => {
        setDuration(audio.duration);
      };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    const bar = progressBarRef.current;
    if (!audio || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    
    // Seek within full track duration
    const targetTime = percentage * audio.duration;
    audio.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section
      id="musica"
      className="relative w-full py-24 md:py-36 overflow-hidden px-6 md:px-16 lg:px-24 bg-[#050505]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-neon-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-neon-blue/10 blur-[130px] pointer-events-none" />

      {/* Hidden Audio Tag */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-neon-blue" />
            <span className="text-xs uppercase tracking-[0.3em] text-brand-neon-blue font-sans font-bold">
              Sonidos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-white leading-tight">
            Música Destacada
          </h2>
        </div>

        {/* Layout Grid: Featured Single & Spotify Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Spotify Official Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6 items-center w-full mx-auto"
          >
            <div className="p-1 rounded-sm bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/artist/4Lu8zzPkOAP592vdHFHKA0?utm_source=generator&theme=0"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-sm bg-[#111111]"
              />
            </div>
            <p className="text-[11px] font-sans tracking-widest text-brand-smoke-gray uppercase text-center">
                Reproductor Oficial de Spotify · Explora su discografía
              </p>
              <div className="flex flex-row gap-4 items-center justify-center mt-6 w-full mx-auto">
                <Link href="https://open.spotify.com/artist/4Lu8zzPkOAP592vdHFHKA0" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-[#050505] text-white flex items-center gap-3 text-xl hover:opacity-80 transition-opacity rounded-sm overflow-hidden">
                  <FaSpotify className="text-green-500" size={32} />
                  <span>Spotify</span>
                </Link>
                <Link href="https://music.apple.com/us/artist/b%C3%B8lge/1261895838" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-[#050505] text-white flex items-center gap-3 text-xl hover:opacity-80 transition-opacity rounded-sm overflow-hidden">
                  <SiApplemusic className="text-gray-300" size={32} />
                  <span>Apple Music</span>
                </Link>
                <Link href="https://tidal.com/artist/8953328/u" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-[#050505] text-white flex items-center gap-3 text-xl hover:opacity-80 transition-opacity rounded-sm overflow-hidden">
                  <SiTidal className="text-white" size={32} />
                  <span>Tidal</span>
                </Link>
              </div>
          </motion.div>

          {/* Right Column: Featured Release Detail with Custom Audio Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="glass-panel p-6 md:p-8 rounded-sm border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon-purple/10 rounded-full blur-2xl pointer-events-none" />

              {/* Cover Layout */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                
                {/* Large Art Cover */}
                <div
                  onClick={togglePlay}
                  className="relative w-40 h-40 flex-shrink-0 aspect-square rounded-sm overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/25 transition-colors duration-300" />
                  <img
                    src={coverSrc}
                    alt="NTANS Cover Art"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 rounded-full bg-brand-neon-purple/90 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] transform scale-95 hover:scale-105 transition-all duration-300">
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Release Details */}
                <div className="flex flex-col text-center sm:text-left flex-grow">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-brand-neon-purple font-sans font-semibold flex items-center justify-center sm:justify-start gap-2">
                     Próximo Single
                    {isPlaying && (
                      <span className="flex items-center gap-[2px]">
                        <span className="w-[2px] h-3 bg-brand-neon-purple animate-pulse" />
                        <span className="w-[2px] h-2 bg-brand-neon-purple animate-pulse delay-75" />
                        <span className="w-[2px] h-4 bg-brand-neon-purple animate-pulse delay-150" />
                      </span>
                    )}
                  </span>
                  <h3 className="mt-2 text-2xl font-light text-white tracking-wide font-heading">
                    NTANS
                  </h3>
                  <p className="mt-1 text-sm text-brand-smoke-gray font-light">
                     Sencillo · Trap Melódico · West Coast
                  </p>
                  
                  <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-xs text-brand-smoke-gray font-sans">
                    <Calendar className="w-3.5 h-3.5 text-brand-neon-purple" />
                    <span>ESTRENO 2026</span>
                  </div>

                  {/* Custom Player Interface */}
                  <div className="mt-5 w-full bg-white/[0.03] border border-white/5 rounded p-3 relative">
                    <div className="flex items-center justify-between text-[10px] font-sans text-brand-smoke-gray mb-1">
                      <span className="flex items-center gap-1">
                        <Volume2 className="w-3 h-3 text-brand-neon-purple" /> Duración completa
                      </span>
                      <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                    </div>

                    {/* Progress Bar (Clickable) */}
                    <div
                      ref={progressBarRef}
                      onClick={handleProgressClick}
                      className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer relative hover:h-2 transition-all duration-200"
                    >
                      <div
                        className="h-full bg-gradient-to-r from-brand-neon-purple to-brand-neon-blue transition-all duration-100"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>

                    {/* Interactive waveform animation when playing */}
                    {isPlaying && (
                      <div className="flex gap-[3px] items-end justify-center h-4 mt-2.5 opacity-60">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              height: [4, Math.random() * 12 + 4, 4]
                            }}
                            transition={{
                              duration: 0.8 + Math.random() * 0.4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-[2px] bg-brand-neon-purple rounded-full"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio/Description */}
              <div className="mt-6 border-t border-white/5 pt-5">
                <p className="text-xs md:text-sm text-brand-smoke-gray leading-relaxed font-light font-sans text-justify">
                  Una mezcla de trap, hip‑hop y sonidos west coast que retrata la sensación de tener a alguien dando vueltas en tu cabeza mucho después de que la noche termina.
                </p>
              </div>

            </div>



          </motion.div>
        </div>

      </div>
    </section>
  );
}
