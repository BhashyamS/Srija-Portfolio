interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
}

export default function SectionTitle({ eyebrow, title, highlight }: Props) {
  return (
    <>
      <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-blue-300">
        {eyebrow}
      </p>

      <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,6rem)] font-black leading-[0.95] tracking-[-0.07em]">
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            {highlight}
          </span>
        )}
      </h2>
    </>
  );
}