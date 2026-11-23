"use client";

import { useEffect, useRef, useState } from "react";
import { LOCATIONS, HQ_LOCATION, type LocationData } from "@/lib/locations-data";

const OTHERS = LOCATIONS.filter((l) => !l.isHQ);

/** Curved path from Dubai to a place, bowing upwards in proportion to distance. */
function arcPath(to: LocationData) {
  const from = HQ_LOCATION.map;
  const dx = to.map.x - from.x;
  const dy = to.map.y - from.y;
  const dist = Math.hypot(dx, dy);
  const cx = from.x + dx / 2;
  const cy = from.y + dy / 2 - Math.max(2, dist * 0.35);
  return `M ${from.x} ${from.y} Q ${cx.toFixed(2)} ${cy.toFixed(2)} ${to.map.x} ${to.map.y}`;
}

/**
 * Animated dotted world map: arcs from Dubai HQ to every location, pulsing pins and
 * travelling dots. Animation starts when the map is scrolled into view.
 */
export default function PresenceMap({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hq = HQ_LOCATION.map;

  return (
    <div ref={ref} className={`gp-map relative aspect-[118/64] w-full ${visible ? "is-visible" : ""} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/world-map.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        draggable={false}
      />

      <svg
        viewBox="0 0 118 64"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label={`Map showing CuroCode's headquarters in Dubai and presence in ${OTHERS.map((p) => p.name).join(", ")}`}
      >
        <defs>
          <linearGradient id="gp-arc" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#d9c3a0" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#e8d9bf" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9c3a0" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="gp-glow">
            <stop offset="0%" stopColor="#d9c3a0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d9c3a0" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={hq.x} cy={hq.y} r="9" fill="url(#gp-glow)" className="gp-fade" />

        {/* Arcs + travelling dots */}
        {OTHERS.map((p, i) => {
          const d = arcPath(p);
          return (
            <g key={p.slug} style={{ ["--d" as string]: `${0.3 + i * 0.22}s` }}>
              <path d={d} pathLength={1} className="gp-arc" stroke="url(#gp-arc)" />
              <circle r="0.42" className="gp-traveller" fill="#f3eadb">
                <animateMotion dur={`${3.2 + (i % 3) * 0.6}s`} begin={`${1.2 + i * 0.4}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          );
        })}

        {/* Pins */}
        {OTHERS.map((p, i) => (
          <g key={p.slug} className="gp-pin" style={{ ["--d" as string]: `${0.9 + i * 0.22}s` }}>
            <circle cx={p.map.x} cy={p.map.y} r="0.7" className="gp-ring" />
            <circle cx={p.map.x} cy={p.map.y} r="0.6" fill="#d9c3a0" />
            <text x={p.map.x + p.map.lx} y={p.map.y + p.map.ly} textAnchor={p.map.anchor} className="gp-label hidden md:block">
              {p.name}
            </text>
          </g>
        ))}

        {/* HQ pin */}
        <g className="gp-pin" style={{ ["--d" as string]: "0.1s" }}>
          <circle cx={hq.x} cy={hq.y} r="1" className="gp-ring gp-ring-hq" />
          <circle cx={hq.x} cy={hq.y} r="1.05" fill="#111111" stroke="#e8d9bf" strokeWidth="0.35" />
          <circle cx={hq.x} cy={hq.y} r="0.5" fill="#f3eadb" />
          <text x={hq.x + hq.lx} y={hq.y + hq.ly} textAnchor={hq.anchor} className="gp-label gp-label-hq hidden md:block">
            Dubai HQ
          </text>
        </g>
      </svg>
    </div>
  );
}
