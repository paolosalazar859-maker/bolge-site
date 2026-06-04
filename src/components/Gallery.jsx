"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
  { src: "/fotos/IMG_4013.jpg" },
  { src: "/fotos/IMG_8371.jpg" },
  { src: "/fotos/aa.png" },
  { src: "/fotos/IMG_6093.jpg" },
  { src: "/fotos/IMG_6608.jpg" },
  { src: "/fotos/IMG_7463.jpg" },
  { src: "/fotos/IMG_5904.jpg" },
  { src: "/fotos/IMG_5333.jpg" },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  // Simple touch swipe handlers for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext(); // Swipe left -> Next image
    }
    if (touchEndX - touchStartX > 50) {
      handlePrev(); // Swipe right -> Previous image
    }
  };

  return (
    <section
      id="galeria"
      className="relative w-full py-24 md:py-36 overflow-hidden px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-neon-purple" />
            <span className="text-xs uppercase tracking-[0.3em] text-brand-neon-purple font-sans font-bold">
              Visuales
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-wide text-white leading-tight">
            Galería Editorial
          </h2>
        </div>

        {/* Pinterest Premium Masonry Grid (2 columns on mobile, 3 on desktop) */}
        <div className="columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              onClick={() => setActiveIdx(index)}
              className={`break-inside-avoid relative overflow-hidden rounded-sm border border-white/5 bg-[#111111]/30 group cursor-zoom-in group-hover:border-white/10 transition-all duration-300
                ${index === 3 ? "lg:mt-16" : ""}
                ${index === 6 ? "lg:mt-8" : ""}
              `}
            >
              {/* Overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white/80 border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Photo Image */}
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover grayscale brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white rounded-full bg-white/5 border border-white/10 transition-colors z-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Control (Desktop Only) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 w-12 h-12 hidden md:flex items-center justify-center text-white/70 hover:text-white rounded-full bg-white/5 border border-white/10 transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Control (Desktop Only) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 hidden md:flex items-center justify-center text-white/70 hover:text-white rounded-full bg-white/5 border border-white/10 transition-colors z-50 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] px-4 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activeIdx}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={photos[activeIdx].src}
                alt=""
                className="max-w-full max-h-[80vh] object-contain rounded-sm border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
