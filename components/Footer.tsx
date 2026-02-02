import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-theme2/90 relative flex flex-row items-center justify-center border-t-2 bg-[url(/space_bacg.jpg)] px-6 py-8 sm:px-10 lg:px-18">
      <div className="absolute inset-0 z-10 bg-slate-900/60"></div>
      <div className="z-100 flex flex-col items-center justify-center">
        <p className="font-orbitron text-slate-100">
          @ {year} Šime Klapan. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/in/%C5%A1ime-klapan-469b3815a/"
          target="_blank"
          className="text-theme2 group flex flex-row items-center gap-3"
        >
          Contact me on Linkedin{" "}
          <FaArrowRight className="text-theme2 text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
