"use client";

import React from "react";

export default function CinematicBackground() {
  // Simple premium background using layered gradients without costly blur filters.
  // The fixed positioning and transform promote it to its own compositor layer.
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ transform: "translateZ(0)", background: "#050505" }}>
      {/* Layer 1: Deep base gradient – subtle dark nebula */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 70% 10%, rgba(76,29,149,0.45) 0%, transparent 70%),
            radial-gradient(ellipse 70% 50% at 10% 80%, rgba(37,99,235,0.35) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(17,17,30,0.85) 0%, transparent 80%)
          `,
        }}
      />

      {/* Layer 2: Soft aurora accent – low‑blur, lightweight */}
      <div
        className="absolute rounded-full"
        style={{
            bottom: "8%",
            right: "6%",
            background: "radial-gradient(circle, rgba(124,58,237,0.38) 0%, transparent 65%)",
            filter: "blur(2px)",
            animation: "driftD 55s ease-in-out infinite",
            willChange: "transform",
            pointerEvents: "none"
          }}
        />
        

      {/* === Layer 6: Cinematic vignette === */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%,
              transparent 35%,
              rgba(5,5,5,0.55) 65%,
              rgba(5,5,5,0.92) 100%
            )
          `,
        }}
      />

        {/* Layer 7: Horizontal light streak (aurora line) */}
        <div
          className="absolute w-full pointer-events-none"
          style={{
            height: "1px",
            top: "42%",
            background: "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.12) 25%, rgba(59,130,246,0.2) 50%, rgba(124,58,237,0.12) 75%, transparent 100%)",
            filter: "blur(2px)",
            animation: "fadeStreak 8s ease-in-out infinite",
          }}
        />

      <style>{`
        @keyframes driftA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-4%, 6%) scale(1.06); }
          66%       { transform: translate(3%, -4%) scale(0.96); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(6%, -5%) scale(1.09); }
          66%       { transform: translate(-4%, 5%) scale(0.94); }
        }
        @keyframes driftC {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-6%, 7%) scale(1.1); }
        }
        @keyframes driftD {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(5%, -6%) scale(1.14); }
        }
        @keyframes fadeStreak {
          0%, 100% { opacity: 0; }
          40%, 60%  { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
