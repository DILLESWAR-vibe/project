import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  // Moves the custom cursor along with the mouse
  useGSAP(() => {
    if (!cursorRef.current) return;
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    const hoverElements = document.querySelectorAll(".target");

    const handleMouseEnter = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 2,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    const noCursorElements = document.querySelectorAll(".nocursor");

    const hideCursor = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const showCursor = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    noCursorElements.forEach((el) => {
      el.addEventListener("mouseenter", hideCursor);
      el.addEventListener("mouseleave", showCursor);
    });

    return () => {
      noCursorElements.forEach((el) => {
        el.removeEventListener("mouseenter", hideCursor);
        el.removeEventListener("mouseleave", showCursor);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed hidden md:block top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none mix-blend-difference z-[10000]"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

export default CustomCursor;
