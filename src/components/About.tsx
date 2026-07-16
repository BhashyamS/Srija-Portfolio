"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "01",
    title: "Computer Science Foundation",
    text: "Built a technical foundation in programming, databases, software development, and problem solving.",
  },
  {
    year: "02",
    title: "FOX Corporation Internship",
    text: "Applied SQL, Tableau, and data storytelling to real operational analytics problems.",
  },
  {
    year: "03",
    title: "AI + Analytics Training",
    text: "Expanded into IBM watsonx, agentic AI, Power BI, and applied AI product development.",
  },
  {
    year: "04",
    title: "Data Science Portfolio",
    text: "Building public case studies that show how I turn messy data into business-ready insights.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-[clamp(1.25rem,5vw,6rem)] py-[clamp(3rem,6vh,5rem)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-blue-300">
            About Me
          </p>

          <h2 className="text-[clamp(1.8rem,3.2vw,3.4rem)] font-black leading-[0.98] tracking-[-0.06em]">
            Creative analyst.
            <br />
            Technical builder.
            <br />
            Business storyteller.
          </h2>

          <p className="mt-5 max-w-xl text-[clamp(.85rem,1vw,1rem)] leading-7 text-white/65">
            I’m a Computer Science graduate building a career in data science,
            analytics, and business intelligence. I work at the intersection of
            data, design, and decision-making — turning complex datasets into
            clear dashboards, predictive insights, and AI-powered tools.
          </p>
        </motion.div>

        <div className="grid grid-rows-4 gap-3">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl transition hover:border-blue-300/40 hover:bg-white/[0.07]"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-black shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-[clamp(1rem,1.2vw,1.2rem)] font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[clamp(.75rem,.8vw,.85rem)] leading-5 text-white/60">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}