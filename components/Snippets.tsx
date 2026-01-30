"use client";

import { useState } from "react";

const codeSnippets = [
  "npm install",
  "const dev = true",
  "await response.json()",
  "useEffect(() => {})",
  "console.log('hello world')",
];

type Spark = {
  id: number;
  text: string;
  x: number;
  y: number;
};

export default function Snippets() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

    const id = Date.now();

    setSparks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        x: e.clientX,
        y: e.clientY,
      },
    ]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== id));
    }, 1500);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed h-screen w-screen overflow-hidden bg-transparent"
    >
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="spark"
          style={{
            left: spark.x,
            top: spark.y,
          }}
        >
          {spark.text}
        </span>
      ))}
    </div>
  );
}
