"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, Code2, Database } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const skillBars = [
  { name: "SQL", level: "95%" },
  { name: "Tableau", level: "90%" },
  { name: "Power BI", level: "85%" },
  { name: "Python", level: "85%" },
  { name: "Machine Learning", level: "75%" },
];

const groups = [
  { icon: Database, title: "Data", items: ["SQL Server", "SQL", "ETL", "Data Modeling"] },
  { icon: BarChart3, title: "Visualization", items: ["Tableau", "Power BI", "Excel", "Dashboards"] },
  { icon: Brain, title: "AI / ML", items: ["Python", "Pandas", "Scikit-learn", "Gemini API"] },
  { icon: Code2, title: "Tools", items: ["GitHub", "VS Code", "Streamlit", "React"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-[clamp(1.25rem,4vw,4rem)] py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle eyebrow="Technical Skills" title="Tools I use to turn data into" highlight="decisions." />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="p-5">
            <h3 className="text-xl font-black tracking-[-0.05em]">Core Strengths</h3>

            <div className="mt-5 space-y-5">
              {skillBars.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-bold text-white/85">{skill.name}</span>
                    <span className="font-black text-blue-300">{skill.level}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.06 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <GlassCard className="h-full p-4">
                    <Icon className="mb-3 text-blue-300" size={22} />
                    <h3 className="text-lg font-black tracking-[-0.04em]">{group.title}</h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}