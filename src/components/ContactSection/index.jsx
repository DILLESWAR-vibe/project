import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { myInfo, social_links } from "../../data";
import Signature from "../Signature";
import { FaArrowUp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const animatedDivRef = useRef(null);
  const sectionRef = useRef(null);
  const formPartRef = useRef(null);
  const imagePartRef = useRef(null);
  const contentRefs = useRef([]);
  const containerRef = useRef(null);
  const buttonOverlayRef = useRef(null);
  const formRef = useRef(null);
  const [isSignatureAnimating, setSignatureAnimating] = useState(false);

  const handleMouseEnter = () => {
    gsap.to(buttonOverlayRef.current, {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      borderRadius: "50%",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonOverlayRef.current, {
      y: "-100%",
      opacity: 1,
      duration: 0.7,
      ease: "power3.in",
      onComplete: () => {
        gsap.set(buttonOverlayRef.current, { y: "100%" });
      },
    });
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    const createAnimation = (scaleValue) => {
      return gsap.fromTo(
        animatedDivRef.current,
        { scale: 0 },
        {
          scale: scaleValue,
          borderRadius: "50%",
          duration: 3,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: animatedDivRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    };

    mm.add("(max-width: 576px)", () => createAnimation(4.7));
    mm.add("(min-width: 769px)", () => createAnimation(3.995));

    return () => mm.revert();
  }, []);

  const showFormContainer = () => {
    setSignatureAnimating(true);
    gsap.set(containerRef.current, { zIndex: 50, visibility: "visible" });
    const tl = gsap.timeline();

    tl.fromTo(
      formPartRef.current,
      { y: "100%" },
      { y: "0%", duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        imagePartRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.8, ease: "power3.out" },
        "<"
      )
      .fromTo(
        contentRefs.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.5"
      );
  };

  const hideFormContainer = () => {
    setSignatureAnimating(false);
    const tl = gsap.timeline();

    tl.to(formPartRef.current, { y: "-100%", duration: 0.8, ease: "power3.in" })
      .to(
        imagePartRef.current,
        { y: "100%", duration: 0.8, ease: "power3.in" },
        "<"
      )
      .to(
        contentRefs.current,
        { y: 50, opacity: 0, duration: 0.4, stagger: -0.1, ease: "power2.in" },
        "<"
      )
      .add(() =>
        gsap.set(containerRef.current, { zIndex: -1, visibility: "hidden" })
      );
  };

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form["name"].value.trim();
    const email = form["email"].value.trim();
    const message = form["message"].value.trim();

    if (!name) {
      toast.error("Please enter your name");
      return;
    }
    if (name.length <= 4) {
      toast.error("Name should be greater than 4 characters");
      return;
    }
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!message) {
      toast.error("Please enter your message");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent:", result.text);
        toast.success("Message sent successfully!");
        form.reset();
        hideFormContainer();
      },
      (error) => {
        console.error("Email sending error:", error.text);
        toast.error("Failed to send message, please try again later.");
      }
    );
  };

  return (
    <>
      <Toaster />
      <section
        id="contact"
        ref={sectionRef}
        className="relative overflow-hidden px-5"
      >
        <div className="flex items-center flex-col md:flex-row justify-center md:justify-between px-4 md:px-16 xl:px-32 pt-16 pb-8 md:pb-16 lg:px-32">
          <div>
            <span className="block text-white text-2xl font-bold mb-8 md:mb-10 font-stretch-ultra-condensed uppercase">
              {myInfo.name}
            </span>
            <h2 className="text-4xl text-center md:text-left sm:text-5xl md:text-6xl font-light font-ragnear max-w-3xl uppercase leading-tight">
              Why keep your ideas grounded?
              <span className="text-primary">
                {" "}
                When I can float them <br className="hidden md:inline" />
                securely in the cloud...!
              </span>
            </h2>
          </div>
          <button
            onClick={showFormContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="target relative mt-6 h-28 md:h-60 w-28 md:w-60 border-2 font-ragnear text-lg bg-transparent sm:text-xl rounded-full overflow-hidden z-10 cursor-pointer"
          >
            <span
              ref={buttonOverlayRef}
              className="absolute inset-0 bg-primary flex items-center justify-center transform rounded-none translate-y-full opacity-1 pointer-events-none "
            >
              <FaArrowUp className="mt-14 md:mt-20 text-md md:text-2xl" />
            </span>
            <span className="relative z-20 text-lg md:text-3xl">
              Get in Touch
            </span>
          </button>
        </div>

        <div
          ref={containerRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-black/80 grid place-items-center h-full w-full -translate-y-1/2 z-[-1] invisible"
        >
          <div className="h-[95vh] w-[90vw] flex flex-col justify-center md:flex-row">
            <div
              ref={formPartRef}
              className="flex- md:flex-1 p-4 md:p-8 flex flex-col justify-center rounded-2xl md:rounded-tr-none md:rounded-l-2xl bg-background border md:border-r-0"
              style={{ transform: "translateY(100%)" }}
            >
              <div
                ref={(el) => (contentRefs.current[0] = el)}
                className="content opacity-0"
              >
                <div className="flex justify-end">
                  <button
                    onClick={hideFormContainer}
                    className="md:hidden -top-10 right-2  text-xl md:text-3xl group cursor-pointer"
                  >
                    <span className="relative flex items-center before:content-[''] mb-10 before:w-2 before:h-2 before:md:w-3 before:md:h-3 before:bg-white before:rounded-full before:mr-2">
                      close
                    </span>
                  </button>
                </div>
                <h3 className="text-5xl md:text-8xl text-center text-primary font-bold mb-6 font-ragnear">
                  Get in Touch
                </h3>

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-4 md:px-20"
                >
                  <div className="md:flex-row flex flex-col gap-2">
                    <div className="w-full">
                      <label htmlFor="name" className="block font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 border rounded-md"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email" className="block font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 border rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full p-3 border rounded-md"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="nocursor w-full py-3 bg-primary hover:bg-purple-700 cursor-pointer text-white font-medium rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div
              ref={imagePartRef}
              className="flex-1 md:flex items-center justify-center rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl bg-primary border md:border-l-0 hidden"
              style={{ transform: "translateY(-100%)" }}
            >
              <button
                onClick={hideFormContainer}
                className="absolute hidden md:flex  top-10 right-10 text-3xl group"
              >
                <span className="relative flex items-center before:content-['']  before:w-2 before:h-2 before:md:w-3 before:md:h-3 before:bg-white before:rounded-full before:mr-2 cursor-pointer">
                  close
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[1] = el)}
                className="content opacity-0 p-2 flex-col flex"
              >
                <Signature
                  startAnimation={isSignatureAnimating}
                  stopAnimation={!isSignatureAnimating}
                />
              </div>
              <ul className="absolute bottom-5 md:bottom-10 right-5 md:right-10 flex gap-2">
                {social_links.map((link) => (
                  <li
                    key={link.id}
                    className="target relative h-12 w-12 rounded-full flex items-center justify-center"
                  >
                    <button className="text-2xl md:text-3xl">
                      <link.icon />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
