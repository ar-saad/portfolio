import { useEffect, useState } from "react";

const AnimatedTitles = ({
  titles,
  letterDelay = 50,
  hold = 1200,
}: {
  titles: string[];
  letterDelay?: number;
  hold?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentLen = titles[index].length;
    const duration = currentLen * letterDelay + hold;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, duration);
    return () => clearTimeout(t);
  }, [index, titles, letterDelay, hold]);

  const title = titles[index];

  return (
    <h2 className="text-xl md:text-3xl font-medium title-font my-5 border rounded-lg bg-linear-to-r from-cyan-500/30 to-blue-500/30 w-full max-w-[360px] px-3 py-2 text-center">
      <span className="inline-block mr-2 opacity-0" aria-hidden />
      <span key={index} className="inline-block" aria-label={title} role="text">
        {Array.from(title).map((ch, i) => {
          const isSpace = ch === " ";
          return (
            <span
              key={i}
              className={`letter ${isSpace ? "letter-space" : ""}`}
              style={{ animationDelay: `${i * letterDelay}ms` }}
              aria-hidden={isSpace}
            >
              {isSpace ? "\u00A0" : ch}
            </span>
          );
        })}
      </span>
    </h2>
  );
};

export default AnimatedTitles;
