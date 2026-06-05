"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const CinematicBackground = dynamic(() => import("@/components/CinematicBackground"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Music = dynamic(() => import("@/components/Music"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Socials = dynamic(() => import("@/components/Socials"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
  useEffect(() => {
    if (!isLoading) {
      // Load heavy components when the browser is idle (after the intro animation)
      const scheduleIdle = (cb) => {
        if (typeof requestIdleCallback === "function") {
          requestIdleCallback(cb);
        } else {
          // Fallback for browsers without requestIdleCallback (e.g., Safari iOS)
          setTimeout(cb, 200);
        }
      };
      scheduleIdle(() => {
        import("@/components/Music");
        import("@/components/Gallery");
        import("@/components/Socials");
        import("@/components/Footer");
      });
    }
  }, [isLoading]);
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
