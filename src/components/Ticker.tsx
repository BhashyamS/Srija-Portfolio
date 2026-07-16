const tickerItems = [
  "Data Science",
  "Analytics",
  "AI Builder",
  "Machine Learning",
  "SQL",
  "Python",
  "Tableau",
  "Power BI",
  "Data Visualization",
];

export default function Ticker() {
  return (
    <div className="fixed left-0 top-[clamp(5.5rem,8vw,7rem)] z-40 w-full overflow-hidden border-y border-blue-400/20 bg-black/45 py-[clamp(.5rem,1vw,.8rem)] backdrop-blur-xl">
      <div className="ticker whitespace-nowrap text-[clamp(.75rem,1vw,1rem)] font-medium text-blue-200">
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="mx-[clamp(.9rem,2vw,1.5rem)]">
            {item} <span className="ml-[clamp(.9rem,2vw,1.5rem)] text-purple-400">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}