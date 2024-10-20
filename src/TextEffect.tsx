import { useRef } from "react";
import clsx from "clsx";

function TextEffect({ text, className }: { text: string; className?: string }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef<null | HTMLHeadingElement>(null);

  const animateText = () => {
    if (!textRef.current) return;
    let iteration = 0;
    const interval = setInterval(() => {
      const startingText = text.toUpperCase();
      const textContent = textRef.current?.textContent || startingText;

      const newContent = textContent
        .split("")
        .map((_, i) => {
          if (i < iteration) {
            return startingText[i];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      if (textRef.current) textRef.current.textContent = newContent;

      if (iteration >= letters.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <h2
      className={clsx(
        "text-white text-[5rem] font-mono hover:bg-white hover:text-black rounded-xl p-4 font-bold",
        className
      )}
      onMouseEnter={animateText}
      ref={textRef}
    >
      {text.toUpperCase()}
    </h2>
  );
}

export default TextEffect;
