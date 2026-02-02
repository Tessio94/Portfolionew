"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IoRocketSharp } from "react-icons/io5";

const ScrollWrapper = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const scrollToTop = () => {
    setIsPressed(true);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => setIsPressed(false), 600);
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
          className="group bg-theme1/80 border-theme2/60 hover:bg-theme2/30 focus:bg-theme1/50 active:bg-theme1/50 shadow-theme2/60 fixed right-2 bottom-5 z-1000 flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border-2 p-3 shadow-lg transition-all duration-300"
        >
          <IoRocketSharp
            className={cn(
              "text-theme2 text-7xl transition-transform duration-500 ease-out",
              isPressed === true ? "scale-110 -rotate-45" : "",
            )}
          />
        </div>
      )}
    </>
  );
};

export default ScrollWrapper;
