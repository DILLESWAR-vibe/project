import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StampCircle = ({ label, rotatingText, onScrollTo }) => {
  const [splitText, setSplitText] = useState([]);
  const containerRef = useRef(null);
  const [diameter, setDiameter] = useState(0);

  const labelRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const splitArray = rotatingText.split("");
    setSplitText(splitArray);
  }, [rotatingText]);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDiameter(width);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useGSAP(() => {
    const container = containerRef.current;
    const labelEl = labelRef.current;
    const arrowEl = arrowRef.current;

    gsap.set(arrowEl, { y: 20, opacity: 0 });

    const handleMouseEnter = () => {
      gsap.killTweensOf([labelEl, arrowEl]);
      gsap.to(labelEl, { opacity: 0, duration: 0.2 });
      gsap.to(arrowEl, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf([labelEl, arrowEl]);
      gsap.to(labelEl, { opacity: 1, duration: 0.2 });
      gsap.to(arrowEl, { y: 20, opacity: 0, duration: 0.2, ease: "power2.in" });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={(e) => onScrollTo(e, "contact")}
      className="target relative aspect-square w-[6rem] md:w-[8rem] rounded-full flex items-center justify-center cursor-pointer sm:w-[6rem] xs:w-[5rem]"
    >
      <div className="bg-primary relative aspect-square w-[50%] md:w-[55%] flex items-center justify-center rounded-full uppercase text-xl md:text-3xl font-semibold leading-none pointer-events-auto hover-target z-[9999]">
        <span ref={labelRef}>{label}</span>
        <span
          ref={arrowRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          ↑
        </span>
      </div>

      <div className="text-white absolute w-full h-full font-caveat animate-[spin_10s_linear_infinite] z-[9999] pointer-events-auto">
        {splitText.map((char, index) => {
          const rotateDeg = (index * 360) / splitText.length;
          return (
            <span
              key={index}
              className="absolute left-1/2 origin-[0_40%] pointer-events-none font-ragnear font-bold"
              style={{
                transform: `rotate(${rotateDeg}deg)`,
                fontSize: `clamp(0.8rem, 0.5vw, 1rem)`,
                transformOrigin: `0 ${diameter / 2}px`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

StampCircle.propTypes = {
  label: PropTypes.string.isRequired,
  rotatingText: PropTypes.string.isRequired,
  onScrollTo: PropTypes.func.isRequired,
};

export default StampCircle;
