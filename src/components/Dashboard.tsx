"use client";

import { BarChart3, Database, Gauge, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "SQL Queries", value: "37+", width: "w-[78%]" },
  { label: "Dashboards", value: "15+", width: "w-[64%]" },
  { label: "AI Projects", value: "4", width: "w-[46%]" },
  { label: "Data Pipelines", value: "10+", width: "w-[55%]" },
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
      className="relative w-full max-w-[min(30vw,440px)]"
    >
      <div className="absolute -left-10 top-0 h-36 w-36 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-purple-500/25 blur-3xl" />

      <div className="relative rounded-[1.7rem] border border-purple-400/50 bg-black/45 p-5 shadow-[0_0_35px_rgba(168,85,247,0.4)] backdrop-blur-2xl">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-white/85">
            Portfolio Dashboard
          </span>
          <span className="text-xs text-white/75">
            <span className="text-green-400">●</span> Open to Work
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <Gauge className="mb-3 text-blue-400" size={30} />
            <p className="text-[clamp(1.6rem,2.2vw,2.4rem)] font-black tracking-[-0.07em]">
              50%
            </p>
            <p className="mt-2 text-xs leading-5 text-white/65">
              Dashboard speed improvement
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <BarChart3 className="mb-3 text-purple-400" size={30} />
            <p className="text-[clamp(1.6rem,2.2vw,2.4rem)] font-black tracking-[-0.07em]">
              15+
            </p>
            <p className="mt-2 text-xs leading-5 text-white/65">
              Dashboards built
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-4">
          {metrics.map((item) => (
            <div key={item.label} className="mb-4 last:mb-0">
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-semibold text-white/80">{item.label}</span>
                <span className="font-black">{item.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className={`${item.width} h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_14px_rgba(124,58,237,0.8)]`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { title: "SQL", text: "Extraction", Icon: Database },
            { title: "Python", text: "Analysis", Icon: Code2 },
            { title: "BI", text: "Dashboards", Icon: BarChart3 },
          ].map(({ title, text, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"
            >
              <Icon className="mx-auto mb-2 text-blue-300" size={22} />
              <p className="text-sm font-black">{title}</p>
              <p className="mt-1 text-[0.65rem] text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}