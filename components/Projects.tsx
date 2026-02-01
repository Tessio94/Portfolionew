import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section>
      <div className="bg-theme1 flex flex-col items-start justify-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <h2 className="text-5xl text-slate-100">Projects</h2>
        <div className="grid w-fit items-stretch gap-10 rounded-2xl sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group z-100 flex cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-slate-600"
            >
              <div className="shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1280}
                  height={868}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex grow flex-col justify-between gap-6 bg-slate-700/70 p-3">
                <h5 className="text-lg font-semibold text-slate-100">
                  {project.title}
                </h5>

                <p className="text-sm text-slate-100">{project.text}</p>

                <div className="flex flex-wrap gap-2 text-slate-100">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl bg-slate-600 px-2 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme2 flex w-fit items-center gap-3 text-lg font-semibold"
                >
                  See more
                  <FaArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
