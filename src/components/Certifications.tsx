"use client";

import { motion } from "framer-motion";
import { Award, Brain, BarChart3, Palette } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const certifications = [
  { icon: BarChart3, issuer: "Microsoft", title: "Power BI Certification", status: "Completed" },
  { icon: Brain, issuer: "IBM", title: "watsonx / AI Training", status: "Completed" },
  { icon: Brain, issuer: "Udemy", title: "Agentic AI Coursework", status: "Completed" },
  { icon: Palette, issuer: "Google", title: "UX Design Certificate", status: "Completed" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-[clamp(1.25rem,4vw,4rem)] py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle eyebrow="Certifications" title="Proof of continuous" highlight="learning." />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <GlassCard className="h-full p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="text-blue-300" size={22} />
                    <Award className="text-purple-300" size={16} />
                  </div>

                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">
                    {cert.issuer}
                  </p>

                  <h3 className="mt-2 text-lg font-black tracking-[-0.04em]">
                    {cert.title}
                  </h3>

                  <p className="mt-4 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[11px] font-bold text-green-300">
                    {cert.status}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}