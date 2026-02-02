"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimateText = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      className="text-theme2 font-jet inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayed}
    </motion.span>
  );
};
