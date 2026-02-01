"use client";

import React, { useEffect, useEffectEvent, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [hambActive, setHambActive] = useState<boolean>(false);

  const path = usePathname();

  const removeSidebar = useEffectEvent(() => {
    setHambActive(false);
  });

  useEffect(() => {
    removeSidebar();
  }, [path]);

  return (
    <header className="fixed right-0 left-0 z-1000 flex max-w-screen flex-row items-center justify-between bg-slate-900/70 px-6 py-3 sm:px-10 lg:px-18">
      <div>
        <p className="text-4xl font-semibold text-slate-100 uppercase">ŠK</p>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex items-center lg:gap-4 xl:gap-14 2xl:gap-22">
          <li>
            <Link
              href="/"
              className="relative inline-block cursor-pointer text-base font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 xl:text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/o-meni"
              className="relative inline-block cursor-pointer text-base font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 xl:text-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/o-meni"
              className="relative inline-block cursor-pointer text-base font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 xl:text-lg"
            >
              Stack
            </Link>
          </li>

          <li>
            <Link
              href="/kontakt"
              className="relative inline-block cursor-pointer text-base font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 xl:text-lg"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* ------------------mobile navigation---------------------------- */}
      <div className="bg-theme1/60 ml-auto block rounded-2xl p-2 lg:hidden">
        <div
          className="relative z-50 h-[35px] w-12.5 rotate-0 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => setHambActive((prev) => !prev)}
        >
          <span
            className={cn(
              "transition-300 border-theme1 absolute left-0 block h-[5px] w-full rounded-[9px] border bg-slate-100 transition-all ease-in-out",
              hambActive ? "top-[16px] rotate-135" : "top-0 rotate-0",
            )}
          ></span>
          <span
            className={cn(
              "transition-300 border-theme1 absolute top-[15px] block h-[5px] w-full rotate-0 rounded-[9px] border bg-slate-100 transition-all ease-in-out",
              hambActive ? "-left-[60px] opacity-0" : "left-0 opacity-100",
            )}
          ></span>
          <span
            className={cn(
              "transition-300 border-theme1 absolute left-0 block h-[5px] w-full rounded-[9px] border bg-slate-100 transition-all ease-in-out",
              hambActive ? "top-[16px] -rotate-135" : "top-[30px] rotate-0",
            )}
          ></span>
        </div>
      </div>
      <nav
        className={cn(
          "border-theme3 bg-theme4 fixed top-0 bottom-0 left-0 z-9999 w-[300px] border-r-2 bg-[url(/logo_transparent.png)] bg-contain bg-repeat shadow-[inset_-50px_0_50px_-50px_var(--theme3)] transition-all duration-300 max-[410px]:w-[260px] sm:w-[330px] lg:hidden",
          hambActive ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="from-theme3 to-theme3/80 absolute inset-0 -z-10 bg-linear-to-r" />
        <div className="scrollbar-slate flex h-full max-h-screen flex-col justify-between gap-25 overflow-y-auto py-12">
          <ul className="flex flex-col gap-6 text-2xl">
            <li className="w-full">
              <Link
                href="/"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/about"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                About
              </Link>
            </li>

            <li className="w-full">
              <Link
                href="/projects"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
