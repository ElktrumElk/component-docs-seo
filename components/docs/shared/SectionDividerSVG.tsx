"use client";

import React from "react";

export function SectionDividerSVG({ variant = "wave" }: { variant?: string }) {
  const paths: Record<string, string> = {
    wave: "M0,40 Q25,10 50,40 T100,40 T150,40 T200,40 T250,40 T300,40 T350,40 T400,40 T450,40 T500,40 T550,40 T600,40 T650,40 T700,40 T750,40 T800,40 T850,40 T900,40 T950,40 T1000,40 T1050,40 T1100,40 T1150,40 T1200,40 T1250,40 T1300,40 T1350,40 T1400,40",
    curl: "M0,50 C50,10 100,90 150,50 S250,10 300,50 S400,90 450,50 S550,10 600,50 S700,90 750,50 S850,10 900,50 S1000,90 1050,50 S1150,10 1200,50 S1300,90 1350,50 S1450,10 1500,50",
    dots: "M0,40 L10,40 M20,40 L30,40 M40,40 L50,40 M60,40 L70,40 M80,40 L90,40 M100,40 L110,40 M120,40 L130,40 M140,40 L150,40",
  };
  return (
    <svg
      viewBox="0 0 1500 80"
      preserveAspectRatio="none"
      className="w-full h-16 block opacity-40"
      aria-hidden="true"
    >
      <path
        d={paths[variant] || paths.wave}
        fill="none"
        stroke="rgba(99, 102, 241, 0.4)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
