import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { navLinks, social_links } from "../../data";
import { FiLink } from "react-icons/fi";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";

gsap.registerPlugin(ScrollToPlugin);

const HeaderSection = ({ onScrollTo }) => {
  const [showNav, setShowNav] = useState(false);

  // Refs for animations
  const sidebarRef = useRef(null);
  const navLinksRef = useRef([]);
  const iconRefs = useRef([]);
  const logoRef = useRef(null);

  // GSAP hook for initial state
  useGSAP(() => {
    gsap.set(sidebarRef.current, { x: "100%", opacity: 0 });
    gsap.set(navLinksRef.current, { x: -50, opacity: 0 });
    gsap.set(iconRefs.current, { opacity: 0 });
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });
  });

  const toggleNav = () => {
    if (!showNav) {
      setShowNav(true);

      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(navLinksRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          });

          gsap.to(iconRefs.current, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          });

          gsap.to(logoRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          });
        },
      });
    } else {
      gsap.to(navLinksRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });

      gsap.to(iconRefs.current, {
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });

      gsap.to(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
      });

      gsap.to(sidebarRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setShowNav(false),
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[8vh] flex items-center justify-between px-12 md:px-24 py-10 md:py-16 z-50">
        <div className="mix-blend-difference">
          <a href="#home" onClick={(e) => onScrollTo(e, "home")}>
            <img src={logo} alt="Logo" className="target w-8 md:w-12" />
          </a>
        </div>
        <div className="relative">
          <button
            className="text-lg md:text-2xl flex items-center cursor-pointer"
            onClick={toggleNav}
          >
            <span className="relative flex items-center before:content-[''] before:w-2 before:h-2 before:md:w-3 before:md:h-3 before:bg-white before:rounded-full before:mr-2 mix-blend-difference">
              menu
            </span>
          </button>
        </div>
      </header>

      <aside
        ref={sidebarRef}
        className="sidebar fixed top-0 left-0 z-50 min-h-screen w-full flex items-center flex-col justify-center bg-background text-white"
      >
        {/* Sidebar Logo */}
        <div
          className="mix-blend-difference absolute top-12 left-20 opacity-0"
          ref={logoRef}
        >
          <a href="#home" onClick={(e) => onScrollTo(e, "home")}>
            <img src={logo} alt="Logo" className="w-8 md:w-12" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-5 font-ragnear">
          {navLinks.map((navLink, index) => (
            <div key={navLink.id} className="flex gap-3 items-center">
              <div
                className="overflow-hidden h-16 md:h-18 cursor-pointer"
                ref={(el) => (navLinksRef.current[index] = el)}
              >
                <li
                  className="nav-link flex flex-col hover:-translate-y-1/2 duration-500"
                  onClick={toggleNav}
                >
                  <a
                    href={navLink.link}
                    className="text-7xl md:text-7xl text-white"
                    onClick={(e) =>
                      onScrollTo(e, navLink.link.replace("#", ""))
                    }
                  >
                    {navLink.name}
                  </a>
                  <a
                    href={navLink.link}
                    className="text-primary text-7xl md:text-7xl"
                    onClick={(e) =>
                      onScrollTo(e, navLink.link.replace("#", ""))
                    }
                  >
                    {navLink.name}
                  </a>
                </li>
              </div>
              <div
                ref={(el) => (iconRefs.current[index] = el)}
                className="opacity-0 self-end"
              >
                <FiLink />
              </div>
            </div>
          ))}
        </ul>

        {/* Close Button */}
        <button
          className="text-lg md:text-2xl flex items-center cursor-pointer absolute top-12 right-20"
          onClick={toggleNav}
        >
          <span className="relative flex items-center before:content-[''] before:w-2 before:h-2 before:md:w-3 before:md:h-3 before:bg-white before:rounded-full before:mr-2">
            close
          </span>
        </button>

        {/* Social Links */}
        <ul className="nocursor absolute bottom-5 md:bottom-10 left-5 md:left-10 flex gap-2 z-20">
          {social_links.map((navlink) => (
            <a
              key={navlink.id}
              href={navlink.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              <li className="relative h-12 w-12 rounded-full flex items-center justify-center z-10 before:absolute before:content[''] before:h-full before:w-full before:bg-primary before:rounded-full before:-z-10 before:scale-0 hover:before:scale-100 transition-all before:duration-500 cursor-pointer group">
                <button className="text-gray-600 cursor-pointer text-2xl md:text-3xl  group-hover:text-white transition-colors duration-500">
                  <navlink.icon />
                </button>
              </li>
            </a>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default HeaderSection;

HeaderSection.propTypes = {
  onScrollTo: PropTypes.func.isRequired,
};
