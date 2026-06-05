"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const skipTimer  = setTimeout(() => setShowSkip(true), 900);
    const exitTimer  = setTimeout(() => setVisible(false), 3000);
    const doneTimer  = setTimeout(() => {
      document.body.style.overflow = "";
      onComplete?.();
    }, 3600);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    setTimeout(() => {
      document.body.style.overflow = "";
      onComplete?.();
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Ambient halos */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7C3AED]/12 blur-[160px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#2563EB]/8 blur-[130px] translate-x-16 translate-y-12 pointer-events-none" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5"
          >
            {/* Wordmark */}
            <h1
              className="text-[clamp(60px,14vw,110px)] leading-none tracking-[0.12em] text-white select-none"
              style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 300 }}
            >
              B<span style={{ color: "#7C3AED", fontWeight: 500, textShadow: "0 0 30px rgba(124,58,237,0.7)" }}>Ø</span>LGE
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-[11px] tracking-[0.38em] uppercase text-[#94A3B8] select-none"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >

            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-36 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 3.0, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#3B82F6]"
            />
          </div>

          {/* Skip button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                key="skip"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={handleSkip}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.28em] uppercase text-[#94A3B8] hover:text-white transition-colors duration-300 cursor-pointer select-none"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                Entrar al sitio ↓
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
