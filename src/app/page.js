"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicBackground from "@/components/CinematicBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

const navItems = [
  { id: "inicio",      label: "Inicio" },
  { id: "musica",      label: "Música" },
  { id: "galeria",     label: "Galería" },
  { id: "redes",       label: "Redes" },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("inicio");

  /* Scroll Spy (disabled for performance) */
  // useEffect(() => {
  //   if (isLoading) return;
  //
  //   const observers = [];
  //   navItems.forEach(({ id }) => {
  //     const el = document.getElementById(id);
  //     if (!el) return;
  //     const obs = new IntersectionObserver(
  //       ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
  //       { rootMargin: "-20% 0px -20% 0px", threshold: 0.5 }
  //     );
  //     obs.observe(el);
  //     observers.push(obs);
  //   });
  //
  //   return () => observers.forEach((o) => o.disconnect());
  // }, [isLoading]);

  // Simple scroll helper for top navigation
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* CSS Nebula background — stable, no WebGL, works on all devices */}
      <CinematicBackground />

      {/* Loading intro */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative min-h-screen text-white flex flex-col bg-transparent font-sans"
          >
            {/* Desktop corner logo */}
            

            {/* Navigation removed for continuous scroll */}

            {/* Sections */}
            <main className="flex-grow">
              <Hero />
              <Music />
              <Gallery />
              <Socials />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
