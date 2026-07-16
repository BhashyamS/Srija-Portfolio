"use client";

import { motion } from "framer-motion";
import { Mail, Link, FileText, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="relative px-[clamp(1.25rem,4vw,4rem)] py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle eyebrow="Contact" title="Let's build something" highlight="together." />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="mt-10 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-3xl font-black tracking-[-0.05em]">
                  Open to opportunities.
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                  I'm currently looking for Data Analyst, Data Science, Business
                  Intelligence, Analytics Engineering, and AI-related roles. If you're
                  hiring or simply want to chat about data, I'd love to hear from you.
                </p>
              </div>

              <div className="grid gap-3">
                <a href="mailto:bhashyam.srija1103@gmail.com" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-blue-400 hover:bg-white/10">
                  <span className="flex items-center gap-3"><Mail size={18} /> Email</span>
                  <ArrowRight size={14} />
                </a>

                <a href="https://www.linkedin.com/in/srija-bhashyam/" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-blue-400 hover:bg-white/10">
                  <span className="flex items-center gap-3"><Link size={18} /> LinkedIn</span>
                  <ArrowRight size={14} />
                </a>

                <a href="https://github.com/BhashyamS" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-blue-400 hover:bg-white/10">
                  <span className="flex items-center gap-3"><Link size={18} /> GitHub</span>
                  <ArrowRight size={14} />
                </a>

                <a href="/projects/Srija_Bhashyam.pdf"
                  target="_blank"
                  rel="noopener noreferrer"className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-blue-400 hover:bg-white/10">
                  <span className="flex items-center gap-3"><FileText size={18} /> Resume</span>
                  <ArrowRight size={14} />
                </a>

              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}