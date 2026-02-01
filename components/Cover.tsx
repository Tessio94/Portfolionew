import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-slate-900/60"></div>
      <Image
        className=""
        width={1920}
        height={1080}
        alt="pozadina svemir"
        src="/space_bacg.jpg"
      />
    </section>
  );
};

export default Cover;
