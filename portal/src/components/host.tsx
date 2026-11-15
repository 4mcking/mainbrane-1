"use client";

import { useEffect, useRef } from "react";

export function Face() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const pupils = svg.querySelectorAll<SVGElement>("[data-pupil]");

    function look(event: PointerEvent) {
      if (!svg) return;
      const box = svg.getBoundingClientRect();
      const dx = event.clientX - (box.left + box.width / 2);
      const dy = event.clientY - (box.top + box.height / 2);
      const distance = Math.hypot(dx, dy) || 1;
      const reach = Math.min(1, distance / 220) * 3.2;
      const x = ((dx / distance) * reach).toFixed(2);
      const y = ((dy / distance) * reach).toFixed(2);
      pupils.forEach((pupil) => pupil.setAttribute("transform", `translate(${x} ${y})`));
    }

    window.addEventListener("pointermove", look, { passive: true });
    return () => window.removeEventListener("pointermove", look);
  }, []);

  return (
    <svg
      ref={ref}
      className="face"
      viewBox="-4 -18 112 122"
      role="img"
      aria-label="the host of the hive, a small six-sided face"
    >
      <g fill="none" stroke="#1b1915" strokeWidth="3.5" strokeLinecap="round">
        <path d="M40 10q-3-13-13-15" />
        <path d="M60 10q3-13 13-15" />
      </g>
      <circle cx="26" cy="-6" r="4" fill="#ff5c39" stroke="#1b1915" strokeWidth="3" />
      <circle cx="74" cy="-6" r="4" fill="#ff5c39" stroke="#1b1915" strokeWidth="3" />
      <polygon points="31,14 77,14 100,54 77,94 31,94 8,54" fill="#1b1915" />
      <polygon
        points="27,10 73,10 96,50 73,90 27,90 4,50"
        fill="#ffb629"
        stroke="#1b1915"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="60" r="4.5" fill="#ff5c39" opacity="0.75" />
      <circle cx="76" cy="60" r="4.5" fill="#ff5c39" opacity="0.75" />
      <g className="lids">
        <circle cx="38" cy="45" r="9.5" fill="#fffaf0" stroke="#1b1915" strokeWidth="3" />
        <circle cx="62" cy="45" r="9.5" fill="#fffaf0" stroke="#1b1915" strokeWidth="3" />
        <circle data-pupil cx="38" cy="46" r="4.2" fill="#1b1915" />
        <circle data-pupil cx="62" cy="46" r="4.2" fill="#1b1915" />
      </g>
      <path d="M42 66q8 8 16 0" fill="none" stroke="#1b1915" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
