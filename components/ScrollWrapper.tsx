"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { GiRocketThruster } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";

const ScrollWrapper = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className="group bg-theme1/80 border-theme2/60 hover:bg-theme1/50 focus:bg-theme1/50 active:bg-theme1/50 shadow-theme2/60 fixed right-2 bottom-5 z-50 z-1000 flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border-2 p-3 shadow-lg transition-all duration-300"
        >
          <IoRocketSharp className="text-theme2 text-7xl transition-all duration-300 group-hover:-rotate-45 group-focus:-rotate-45 group-active:-rotate-45" />
        </div>
      )}
    </>
  );
};

export default ScrollWrapper;
