import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)] transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}