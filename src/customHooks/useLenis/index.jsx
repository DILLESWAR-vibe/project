import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      smoothTouch: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1.001, -1000 * t)),
      direction: "vertical",
      infinite: false,
      syncTouch: true,
      touchMultiplier: 1,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    let lastTime = 0;
    const raf = (time) => {
      if (time - lastTime >= 16) {
        lenis.raf(time);
        lastTime = time;
      }
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    lenis.start();

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return lenisRef.current;
};

export default useLenis;
