"use client";

import { motion } from "framer-motion";
import Dashboard from "@/components/Dashboard";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-[clamp(1.25rem,5vw,6rem)] pt-[clamp(7rem,10vh,9rem)] pb-[clamp(2rem,4vh,4rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(14,165,233,0.32),transparent_25%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.32),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.20),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:clamp(3rem,5vw,4rem)_clamp(3rem,5vw,4rem)] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:clamp(5rem,8vw,7rem)_clamp(5rem,8vw,7rem)] opacity-20" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-[clamp(3rem,6vw,6rem)] pt-24 xl:grid-cols-[0.9fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[850px]"
        >
          <div className="mb-[clamp(1.2rem,2vw,1.75rem)] inline-flex rounded-full border border-purple-400/70 bg-black/40 px-[clamp(.9rem,1.5vw,1.25rem)] py-[clamp(.55rem,.8vw,.85rem)] text-[clamp(.65rem,.85vw,.8rem)] font-black uppercase tracking-[0.18em] text-blue-200 shadow-[0_0_24px_rgba(168,85,247,0.45)] backdrop-blur">
            Data Science · Analytics · AI Builder
          </div>

          <h1 className="text-[clamp(2.8rem,5.6vw,6rem)] font-black leading-[0.82] tracking-[-0.09em] text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]">
            Srija
            <br />
            Bhashyam
          </h1>

          <p className="mt-[clamp(1.5rem,2.5vw,2rem)] max-w-[780px] text-[clamp(1.2rem,1.8vw,2.2rem)] font-black leading-tight tracking-[-0.04em] text-white">
            I build data products that transform complex information into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              business decisions.
            </span>
          </p>

          <p className="mt-[clamp(1rem,1.6vw,1.5rem)] max-w-[700px] text-[clamp(.95rem,1vw,1.08rem)] leading-[1.75] text-white/70">
            Computer Science graduate focused on data analytics, business intelligence,
            machine learning, and AI-powered tools. Experienced with SQL, Tableau,
            Power BI, Python, and practical data storytelling.
          </p>

          <div className="mt-[clamp(1.8rem,3vw,2.5rem)] flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-[clamp(1.3rem,2vw,1.8rem)] py-[clamp(.8rem,1vw,1rem)] text-[clamp(.9rem,1vw,1.05rem)] font-black text-white shadow-[0_0_30px_rgba(59,130,246,0.55)] transition hover:scale-105"
            >
              View My Work →
            </a>
            <a
              href="#experience"
              className="rounded-2xl border border-white/20 bg-black/35 px-[clamp(1.3rem,2vw,1.8rem)] py-[clamp(.8rem,1vw,1rem)] text-[clamp(.9rem,1vw,1.05rem)] font-black text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Case Studies
            </a>
          </div>
        </motion.div>

        <div className="hidden justify-end xl:flex">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}