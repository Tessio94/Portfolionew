"use client";

import React from "react";
import { BiCloud, BiServer } from "react-icons/bi";
import { BsArrowDown, BsDatabase } from "react-icons/bs";
import { CgCodeSlash } from "react-icons/cg";
import { motion } from "motion/react";
import { AnimateText } from "./AnimateText";

const Cover = () => {
  return (
    <section className="pt-16">
      <div className="relative flex min-h-175 items-center justify-center overflow-hidden bg-[url(/space_bacg.jpg)] bg-cover bg-no-repeat">
        <div className="absolute inset-0 z-0 bg-slate-900/60"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-52">
          <div className="mb-15 flex flex-col items-center justify-center gap-6">
            <motion.h1
              className="font-orbitron text-5xl font-semibold text-slate-100 max-[480px]:text-4xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Šime Klapan
            </motion.h1>
            <div className="font-jet flex flex-row gap-1.5 text-3xl text-slate-100 max-[480px]:gap-1 max-[480px]:text-2xl max-[420px]:text-2xl max-[400px]:text-xl sm:gap-3 sm:text-4xl">
              <span>{"<"}</span>
              <AnimateText text="Full Stack Developer" />
              <span>{"/>"}</span>
            </div>
            <motion.p
              className="text-xl text-slate-100 sm:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Most of my work revolves around modern web technologies, and I’m
              always excited to learn new tools and improve my skills. I care
              about writing maintainable code, creating smooth user experiences,
              and continuously growing as a developer.
            </motion.p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            <motion.div
              className="from-theme2/70 to-theme1/90 border-theme2 shadow-theme2/70 flex flex-col items-center justify-start gap-4 overflow-hidden rounded-2xl border-2 bg-radial p-5 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <CgCodeSlash className="text-theme2 text-3xl" />
              <h5 className="text-xl font-semibold text-slate-100">Frontend</h5>
              <ul className="flex flex-col items-center justify-center">
                <li className="text-center text-lg text-slate-200">React</li>
                <li className="text-center text-lg text-slate-200">Next</li>
                <li className="text-center text-lg text-slate-200">
                  Typescript
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="from-theme2/70 to-theme1/90 border-theme2 shadow-theme2/70 flex flex-col items-center justify-start gap-4 overflow-hidden rounded-2xl border-2 bg-radial p-5 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BiServer className="text-theme2 text-3xl" />
              <h5 className="text-xl font-semibold text-slate-100">Backend</h5>
              <ul className="flex flex-col items-center justify-center">
                <li className="text-center text-lg text-slate-200">Node</li>
                <li className="text-center text-lg text-slate-200">Express</li>
                <li className="text-center text-lg text-slate-200">PHP</li>
              </ul>
            </motion.div>
            <motion.div
              className="from-theme2/70 to-theme1/90 border-theme2 shadow-theme2/70 flex flex-col items-center justify-start gap-4 overflow-hidden rounded-2xl border-2 bg-radial p-5 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.4 },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BsDatabase className="text-theme2 text-3xl" />
              <h5 className="text-xl font-semibold text-slate-100">Database</h5>
              <ul className="flex flex-col items-center justify-center">
                <li className="text-center text-lg text-slate-200">
                  PostgreSQL
                </li>
                <li className="text-center text-lg text-slate-200">Mongo</li>
              </ul>
            </motion.div>
            <motion.div
              className="from-theme2/70 to-theme1/90 border-theme2 shadow-theme2/70 flex flex-col items-center justify-start gap-4 overflow-hidden rounded-2xl border-2 bg-radial p-5 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.6 },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BiCloud className="text-theme2 text-3xl" />
              <h5 className="text-xl font-semibold text-slate-100">DevOps</h5>
              <ul className="flex flex-col items-center justify-center">
                <li className="text-center text-lg text-slate-200">Git</li>
                <li className="text-center text-lg text-slate-200">Docker</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.a
          href="#about"
          className="bg-theme1 border-theme2/70 hover:bg-theme1/60 absolute bottom-15 left-1/2 z-150 flex w-fit -translate-x-1/2 items-center justify-center rounded-full border-2 p-3 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.6 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <BsArrowDown className="text-3xl text-slate-100" />
        </motion.a>
      </div>
    </section>
  );
};

export default Cover;
