"use client";

import React, { useEffect, useState, useRef } from "react";

const Circle = ({
  text,
  targetDegree,
  color,
  speed = 50,
}: {
  text: string;
  targetDegree: number;
  color: string;
  speed?: number;
}) => {
  const [degree, setDegree] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5 }, // 50% visible
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setDegree((prev) => {
        if (prev >= targetDegree) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, targetDegree, speed]);

  return (
    <div
      className="relative flex h-50 w-50 flex-col items-center justify-center gap-0.5 rounded-full bg-slate-800 before:absolute before:inset-1.25 before:rounded-full before:bg-slate-700 before:opacity-80 before:content-[''] after:absolute after:h-35 after:w-35 after:rounded-full after:border-15 after:border-slate-400 after:bg-slate-600 after:opacity-80 after:shadow-[inset_0_5px_10px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.75),0_-2px_2px_rgba(255,255,255,0.5),inset_0_4px_2px_rgba(0,0,0,0.25),inset_0_-2px_2px_rgba(255,255,255,0.5)] after:content-['']"
      style={{
        background: `conic-gradient(${color} ${degree}%, #222 0%)`,
      }}
      ref={circleRef}
    >
      <p className="relative z-10 text-3xl text-slate-100" style={{ color }}>
        {degree}
        <span className="text-xs font-medium">%</span>
      </p>
      <h4 className="relative z-10 text-base font-medium text-slate-100">
        {text}
      </h4>
    </div>
  );
};

export default Circle;
