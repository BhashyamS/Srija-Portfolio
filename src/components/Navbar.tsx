"use client";

import { Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 flex w-[min(90vw,1280px)] -translate-x-1/2 items-center justify-between rounded-[1.4rem] border border-blue-300/20 bg-black/45 px-5 py-2.5 shadow-[0_0_32px_rgba(59,130,246,0.22)] backdrop-blur-2xl"
    >
      <a className="rounded-xl border border-white/20 bg-black px-3 py-1.5 text-lg font-black shadow-[0_0_14px_rgba(147,197,253,0.4)]">
        SB
      </a>

      <div className="hidden gap-8 text-sm font-semibold text-white/85 md:flex">
        <a href="#about" className="transition hover:text-blue-200">
          About
        </a>
      
        <a href="#experience" className="transition hover:text-blue-200">
          Experience
        </a>
      
        <a href="#projects" className="transition hover:text-blue-200">
          Projects
        </a>
      
        <a href="#blog" className="transition hover:text-blue-200">
          Blog
        </a>
      
        <a
          href="/projects/Srija_Bhashyam.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-blue-200"
        >
          Resume
        </a>
      
        <a href="#contact" className="transition hover:text-blue-200">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 md:block">
          <Moon size={16} />
        </button>

        <a
          href="mailto:bhashyam.srija1103@gmail.com"
          className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_22px_rgba(124,58,237,0.5)] transition hover:scale-105"
        >
          Email Me
        </a>
      </div>
    </motion.nav>
  );
}
