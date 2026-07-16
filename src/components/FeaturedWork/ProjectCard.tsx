import { featuredProjects } from "@/data/featuredProjects";

type Project = (typeof featuredProjects)[number];

interface ProjectCardProps {
  project: Project;
  active: boolean;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  active,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[210px] min-w-[230px] max-w-[230px] snap-start flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
        active
          ? "border-blue-400 bg-blue-500/10 shadow-[0_0_28px_rgba(59,130,246,.18)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      }`}
    >
      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-300">
          {project.status}
        </p>

        <h4 className="mt-2 line-clamp-2 min-h-[38px] text-lg font-black leading-[1.05] tracking-[-0.04em]">
          {project.title}
        </h4>

        <p className="mt-2 line-clamp-1 text-xs text-white/55">
          {project.subtitle}
        </p>

        <div className="mt-3 flex h-[52px] items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-purple-500/15">
          <img
            src={project.cardImage}
            alt={project.title}
            className="h-full w-full object-contain object-top transition duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex h-[22px] flex-wrap gap-1.5 overflow-hidden">
        {project.tech.slice(0, 2).map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-white/60"
          >
            {item}
          </span>
        ))}
      </div>
    </button>
  );
}