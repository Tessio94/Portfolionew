"use client";

import React, { useEffect, useState } from "react";
import Circle from "./Circle";

const CircularBars = () => {
  return (
    <div className="mx-auto grid w-fit items-stretch gap-10 sm:grid-cols-3">
      <Circle text="React" targetDegree={90} color="#61DAFB" />
      <Circle text="Next" targetDegree={95} color="#FFFFFF" />
      <Circle text="Node" targetDegree={85} color="#339933" />
    </div>
  );
};

export default CircularBars;
