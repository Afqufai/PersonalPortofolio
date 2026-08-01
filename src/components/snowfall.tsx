"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
  size: string;
}

export default function Snowfall() {
  const [flakes, setFlakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate 75 snowflakes with randomized properties
    const generatedFlakes = Array.from({ length: 75 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s fall time
      animationDelay: `-${Math.random() * 20}s`, // Start at different times
      opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5 opacity
      size: `${Math.random() * 4 + 2}px`, // 2px to 6px size
    }));
    setFlakes(generatedFlakes);
  }, []);

  if (flakes.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full animate-snowfall shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            top: '-10px',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(20px);
          }
          100% {
            transform: translateY(110vh) translateX(-20px);
          }
        }
        .animate-snowfall {
          animation-name: snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
