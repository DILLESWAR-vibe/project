import { useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import TextFlip from "../TextFlip";
import PropTypes from "prop-types";
import { myInfo } from "../../data";

import logo from "../../assets/logo.svg";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(1);

  useGSAP(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(
        {},
        {
          duration: 2,
          progressValue: 100,
          onUpdate: function () {
            setProgress(Math.round(this.progress() * 100));
          },
        }
      )
        .to(".split-left", {
          x: "-100%",
          duration: 1.5,
          ease: "power4.inOut",
        })
        .to(
          ".split-right",
          {
            x: "100%",
            duration: 1.5,
            ease: "power4.inOut",
          },
          "<"
        )
        .call(onComplete, [], "-=0")
        .to(
          [".loader-logo", ".loader-text"],
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(".loader", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => gsap.set(".loader", { display: "none" }),
        });
    }, 2000);
  }, []);

  return (
    <div className="relative">
      <div className="loader fixed top-0 left-0 w-[100vw] h-[100vh] bg-background flex items-center justify-center z-[100]">
        {/* Split Divs */}
        <div className="split-left absolute top-0 left-0 w-[120%] md:w-5/4 h-[300vh] bg-primary/60"></div>
        <div className="split-right absolute top-0 right-0 w-[120%] md:w-5/4 h-[300vh] bg-primary/60"></div>

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="loader-logo md:bottom-10 bottom-5 md:right-20 right-5 w-16 h-16 md:w-20 md:h-20 z-50"
        />

        {/* Progress Number */}
        <span className="loader-text absolute font-ragnear text-4xl md:text-8xl md:bottom-10 bottom-20 md:right-20 right-10">
          {progress}%
        </span>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const textRef = useRef(null);
  const surnameRef = useRef(null);

  useGSAP(() => {
    if (!loading) {
      const splitText = new SplitType(textRef.current, { types: "chars" });

      gsap.set(splitText.chars, { yPercent: 50, opacity: 0 });
      gsap.set(surnameRef.current, { opacity: 0 });

      gsap.to(splitText.chars, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.09,
        duration: 2,
        ease: "elastic.out(1, 0)",
        onComplete: () => {
          gsap.to(surnameRef.current, {
            opacity: 1,
            duration: 2,
          });
        },
      });

      return () => splitText.revert();
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col gap-y-4 leading-tight overflow-hidden">
          <h1
            ref={textRef}
            className="text-9xl md:text-20xl font-bold text-gray-600 font-ragnear "
          >
            {myInfo.name}
          </h1>
          <p
            ref={surnameRef}
            className="self-end font-middleburg pb-10 text-2xl md:text-5xl"
          >
            {myInfo.surname}
          </p>

          <TextFlip />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

Loader.propTypes = {
  onComplete: PropTypes.func.isRequired, // Must be a function and is required
};
