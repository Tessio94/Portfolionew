"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { GiTBrick } from "react-icons/gi";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiGitBranchFill,
  RiGitBranchLine,
  RiGitCommitLine,
  RiGitForkFill,
  RiGitForkLine,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiPhpFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiDocker,
  SiLaravel,
  SiLinux,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

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
    <div className="border-theme2 from-bg-slate-800/80 to-theme2/30 flex w-full flex-col items-center justify-center gap-5 rounded-2xl border-2 bg-linear-to-br p-8">
      {text === "Node" && (
        <>
          <RiNodejsFill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "React" && (
        <>
          <RiReactjsFill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "Next" && (
        <>
          <RiNextjsFill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "Docker" && (
        <>
          <SiDocker className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "PostgreSQL" && (
        <>
          <SiPostgresql className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "JS" && (
        <>
          <RiJavascriptFill
            className="text-6xl"
            style={{ color: `${color}` }}
          />
        </>
      )}
      {text === "CSS" && (
        <>
          <RiCss3Fill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "HTML" && (
        <>
          <RiHtml5Fill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "PHP" && (
        <>
          <RiPhpFill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "Laravel" && (
        <>
          <SiLaravel className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "Git" && (
        <>
          <RiGitBranchFill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "Linux" && (
        <>
          <SiLinux className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "TS" && (
        <>
          <SiTypescript className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      {text === "Tailwind" && (
        <>
          <RiTailwindCssFill
            className="text-6xl"
            style={{ color: `${color}` }}
          />
        </>
      )}
      {text === "Bootstrap" && (
        <>
          <RiBootstrapFill className="text-6xl" style={{ color: `${color}` }} />
        </>
      )}
      <div
        className="relative flex h-50 w-50 flex-col items-center justify-center gap-0.5 rounded-full bg-slate-800 before:absolute before:inset-1.25 before:rounded-full before:bg-slate-700 before:opacity-80 before:content-[''] after:absolute after:h-35 after:w-35 after:rounded-full after:border-15 after:border-slate-400 after:bg-slate-600 after:opacity-80 after:shadow-[inset_0_5px_10px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.75),0_-2px_2px_rgba(255,255,255,0.5),inset_0_4px_2px_rgba(0,0,0,0.25),inset_0_-2px_2px_rgba(255,255,255,0.5)] after:content-['']"
        style={{
          background: `conic-gradient(${color} ${degree}%, #222 0%)`,
        }}
        ref={circleRef}
      >
        <p
          className="font-jet relative z-10 text-3xl text-slate-100"
          style={{ color }}
        >
          {degree}
          <span className="text-xs font-medium">%</span>
        </p>
        <h4
          className={cn(
            "font-orbitron relative z-10 font-medium text-slate-100",
            text === "PostgreSQL" ? "text-[13px]" : "text-base",
          )}
        >
          {text}
        </h4>
      </div>
    </div>
  );
};

export default Circle;
