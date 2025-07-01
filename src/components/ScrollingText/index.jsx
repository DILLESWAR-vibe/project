import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { scrollTextData } from "../../data"; // Adjust the import path

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const containerRef = useRef(null);
  const marqueeTimelineRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth / 2;

      const marqueeTimeline = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });
      marqueeTimeline.to(container, {
        x: `-=${totalWidth}`,
        duration: 300,
        onComplete: () => marqueeTimeline.restart(),
      });

      marqueeTimelineRef.current = marqueeTimeline;

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const baseSpeed = 1;
          let newScale = baseSpeed;
          const velocity = self.getVelocity ? self.getVelocity() : 0;

          newScale += Math.min(Math.abs(velocity) / 12000, 3);

          newScale = self.direction === -1 ? -newScale : newScale;

          gsap.to(marqueeTimeline, {
            timeScale: newScale,
            duration: 0.3,
            overwrite: true,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const repeatedText = Array.from(
    { length: 50 },
    (_, index) => scrollTextData[index % scrollTextData.length]
  );

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-10  whitespace-nowrap text-4xl text-white will-change-transform"
        ref={containerRef}
      >
        {repeatedText.map((item, index) => (
          <div
            key={`text-${index}`}
            className="flex items-center gap-5 font-ragnear text-3xl md:text-5xl"
          >
            {item.text}
            <span className="text-primary ml-5 ">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
