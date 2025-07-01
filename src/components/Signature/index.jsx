import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const Signature = ({ startAnimation, stopAnimation }) => {
  const svgRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    animationRef.current = gsap.fromTo(
      paths,
      {
        strokeDasharray: (i, path) => path.getTotalLength(),
        strokeDashoffset: (i, path) => path.getTotalLength(),
        opacity: 0,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 5,
        stagger: 0.2,
        ease: "power2.inOut",
        paused: true,
      }
    );

    if (startAnimation) animationRef.current.play();
    if (stopAnimation) animationRef.current?.kill();

    return () => {
      animationRef.current?.kill();
    };
  }, [startAnimation, stopAnimation]);

  return (
    <div style={{ textAlign: "center" }} className="target">
      <svg
        ref={svgRef}
        width="241"
        height="96"
        viewBox="0 0 241 96"
        fill="none"
        style={{
          stroke: "#ffffff",
          strokeWidth: 2,
          fill: "none",
        }}
      >
        <path d="M44.0004 0.499969C35.2937 37.4161 33.1266 58.1079 36.0004 95M4.50045 67C2.05862 64.5623 -1.24981 64.46 4.50033 50C24.1721 4.40357 93.2494 -18.439 94.5 23C99.024 62.4009 27.1399 98.752 22 83.5C16.8601 68.248 55.3126 72.5484 69 79M98 25C94.0958 46.6694 96.2158 80.2609 97 71C97.7842 61.7391 109.344 28.8832 109 60.5C109 64 111.5 61.5 114 58.5C116.5 55.5 118.254 54 119 52M131.5 43C127.97 34.0906 120.155 50.1684 119 52M119 52C117.254 60.5 123.5 56.5 128 47C129.763 75.2844 134.5 46.5 145.666 43C156.832 39.5 125.779 78.4151 152.5 44.5C165.5 28 144.5 88.5 169.5 41.5C162.596 64.7814 167.08 59.7643 178 44.5C178.475 62.9238 184.49 59.7142 197 42.5C193.357 49.5608 190.051 44.3339 200.5 58.5C210.949 72.6661 176.325 87.263 193.5 66.5C210.675 45.737 217.632 49.9079 215 49C215 49 219 26 218 25C217 24 212.5 71.5 215 71.5C217.5 71.5 217 63 224.5 50C232 37 224.5 75.5 240 49" />
        <path d="M44.5 114.5C123.095 86.6313 165.946 78.819 240 78.9999" />
      </svg>
    </div>
  );
};

Signature.propTypes = {
  startAnimation: PropTypes.bool.isRequired,
  stopAnimation: PropTypes.bool.isRequired,
};

export default Signature;
