import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { rolesList } from "../../data";

const WordTransition = () => {
  const wordsRef = useRef([]);
  const total = rolesList.length;

  useGSAP(() => {
    gsap.set(wordsRef.current, { yPercent: 100, opacity: 0 });
    gsap.set(wordsRef.current[0], { yPercent: 0, opacity: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    rolesList.forEach((_, i) => {
      const nextIndex = (i + 1) % total;

      tl.to(wordsRef.current[i], {
        yPercent: -100,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      })
        .set(wordsRef.current[i], { yPercent: 100 })
        .to(
          wordsRef.current[nextIndex],
          {
            yPercent: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
          },
          "-=0.8"
        );
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="inline-flex flex-col text-5xl md:text-7xl font-bold font-ragnear">
      <div className="relative inline-block h-[1.1em] overflow-hidden">
        {rolesList.map((word, i) => (
          <div
            key={i}
            ref={(el) => (wordsRef.current[i] = el)}
            className="absolute top-0 left-0 text-primary flex h-full w-full md:max-w-fit items-center justify-center uppercase whitespace-nowrap"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordTransition;
