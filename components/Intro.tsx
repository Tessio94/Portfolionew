"use client";

import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "motion/react";

const Intro = () => {
  return (
    <section id="about">
      <div className="bg-theme1 relative px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <h2 className="font-orbitron mb-15 text-center text-5xl text-slate-100">
          Experience & Focus
        </h2>
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          <p className="text-lg text-slate-100 xl:text-xl">
            I’m a web developer with hands-on experience building real-world
            projects for both clients and personal growth. My background spans{" "}
            <strong className="text-theme2">
              frontend and full-stack development
            </strong>
            , where I focus on creating responsive, user-friendly interfaces and
            reliable backend solutions.
          </p>
          <p className="text-lg text-slate-100 xl:text-xl">
            Professionally, I work in a studio environment developing custom CMS
            platforms and client websites with <strong>WinterCMS</strong> and{" "}
            <strong>Laravel</strong>, gaining hands-on experience.
          </p>
          <p className="text-lg text-slate-100 xl:text-xl">
            In my free time, I create personal projects using modern frontend
            technologies showcased in this portfolio’s stack section, allowing
            me to explore new ideas and continuously refine my skills.
          </p>
        </div>
      </div>
      <div className="bg-theme1 relative px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <div className="bg-theme2/10 absolute inset-0"></div>
        <h2 className="font-orbitron mb-15 text-center text-5xl text-slate-100">
          What I Bring to the Table
        </h2>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GiCheckMark className="text-theme2 shrink-0 text-xl" />
            <p className="text-sm text-slate-100 xl:text-base">
              Custom web applications built with React, Node.js, and PostgreSQL
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GiCheckMark className="text-theme2 shrink-0 text-xl" />
            <p className="text-sm text-slate-100 xl:text-base">
              Responsive, pixel-perfect interfaces using Tailwind CSS and modern
              styling tools
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GiCheckMark className="text-theme2 shrink-0 text-xl" />
            <p className="text-sm text-slate-100 xl:text-base">
              Database schema design with a focus on performance and scalability
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GiCheckMark className="text-theme2 shrink-0 text-xl" />
            <p className="text-sm text-slate-100 xl:text-base">
              RESTful API design, development, and third-party service
              integration
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GiCheckMark className="text-theme2 shrink-0 text-xl" />
            <p className="text-sm text-slate-100 xl:text-base">
              Production deployment, environment setup, and SSL configuration
            </p>
          </motion.div>

          <motion.div
            className="flex flex-row items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GiCheckMark className="text-theme2 shrink-0 text-xl" />
            <p className="text-sm text-slate-100 xl:text-base">
              Clean, maintainable code with a focus on long-term project health
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
