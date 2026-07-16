"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-8 text-white/50 md:flex-row">

        <p>
          © {new Date().getFullYear()} Srija Bhashyam
        </p>

        <p>
          Built with Next.js • React • TypeScript • Tailwind
        </p>

      </div>
    </footer>
  );
}