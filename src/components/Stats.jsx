"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    const node = ref.current;
    if (!node) return;

    // Parse numeric value and any suffix (like M+, K+, etc.)
    const numericPart = parseFloat(value);
    const suffix = value.replace(numericPart.toString(), "");

    const controls = animate(0, numericPart, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1], // premium ease-out
      onUpdate(latest) {
        // Format with thousands separator if appropriate
        const formatted = Math.floor(latest).toLocaleString("en-US");
        node.textContent = formatted + suffix;
      },
    });

    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>0</span>;
}

const statsData = [
  {
    label: "Streams Globales",
    value: "1.5M+",
    glow: "glow-purple",
    borderColor: "group-hover:border-brand-neon-purple/30",
    labelColor: "text-brand-neon-purple",
  },
  {
    label: "Reproducciones",
    value: "850K+",
    glow: "glow-blue",
    borderColor: "group-hover:border-brand-neon-blue/30",
    labelColor: "text-brand-neon-blue",
  },
  {
    label: "Seguidores",
    value: "45K+",
    glow: "glow-purple",
    borderColor: "group-hover:border-brand-neon-purple/30",
    labelColor: "text-brand-neon-purple",
  },
  {
    label: "Lanzamientos Oficiales",
    value: "12",
    glow: "glow-blue",
    borderColor: "group-hover:border-brand-neon-blue/30",
    labelColor: "text-brand-neon-blue",
  },
];

export default function Stats() {
  return (
    <section className="relative w-full py-20 overflow-hidden px-6 md:px-16 lg:px-24 bg-[#050505]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-brand-neon-purple/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group glass-panel p-6 md:p-8 rounded-sm border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-[1.02] ${stat.borderColor}`}
            >
              {/* Stat Value (Counter) */}
              <h3 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-heading">
                <Counter value={stat.value} />
              </h3>

              {/* Stat Label */}
              <span className={`mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans font-bold ${stat.labelColor}`}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
