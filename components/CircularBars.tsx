"use client";

import Circle from "./Circle";

const CircularBars = () => {
  return (
    <section id="stack">
      <div className="bg-theme1 flex flex-col items-start justify-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <h2 className="font-orbitron text-5xl text-slate-100">Frontend</h2>
        <div className="grid w-full items-stretch gap-10 rounded-2xl sm:grid-cols-2 xl:grid-cols-4">
          <Circle text="HTML" targetDegree={95} color="#E34F26" />
          <Circle text="CSS" targetDegree={95} color="#1572B6" />
          <Circle text="Tailwind" targetDegree={95} color="#06B6D4" />
          <Circle text="Bootstrap" targetDegree={90} color="#7952B3" />
          <Circle text="JS" targetDegree={90} color="#F7DF1E" />
          <Circle text="TS" targetDegree={85} color="#3178C6" />
          <Circle text="React" targetDegree={90} color="#61DAFB" />
          <Circle text="Next" targetDegree={90} color="#FFFFFF" />
        </div>
      </div>
      <div className="from-theme1 to-theme2/10 relative flex flex-col items-start gap-12 bg-linear-to-b from-57% to-50% px-6 py-16 sm:px-10 sm:py-20 md:flex-row md:gap-20 md:bg-linear-to-r md:from-50% md:to-50% lg:gap-36 lg:px-18 lg:py-26">
        <div className="bg-theme2/10 absolute inset-0"></div>
        <div className="flex w-full flex-col items-start justify-center gap-10 md:w-1/2">
          <h2 className="font-orbitron text-5xl text-slate-100">Backend</h2>
          <div className="grid w-full items-stretch gap-10 rounded-2xl xl:grid-cols-2">
            <Circle text="Node" targetDegree={85} color="#339933" />
            <Circle text="PostgreSQL" targetDegree={80} color="#336791" />
            <Circle text="PHP" targetDegree={70} color="#777BB4" />
            <Circle text="Laravel" targetDegree={70} color="#FF2D20" />
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-10 max-md:pt-15 md:w-1/2">
          <h2 className="font-orbitron text-5xl text-slate-100">DevOps</h2>
          <div className="grid w-full items-stretch gap-10 rounded-2xl xl:grid-cols-2">
            <Circle text="Git" targetDegree={80} color="#F05032" />
            <Circle text="Linux" targetDegree={75} color="#E6B800" />
            <Circle text="Docker" targetDegree={70} color="#2496ED" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularBars;
