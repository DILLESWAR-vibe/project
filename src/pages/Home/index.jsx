import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import StampCircle from "../../components/StampCircle";
import HeaderSection from "../../components/HeaderSection";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import ExperienceSection from "../../components/ExperienceSection";
import ContactSection from "../../components/ContactSection";
import FooterSection from "../../components/FooterSection";
import ScrollingText from "../../components/ScrollingText";
import NotAvailable from "../../components/NotAvailable";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (!id) return;

    gsap.to(window, {
      duration: 1.5,
      scrollTo: `#${id}`,
      ease: "power2.out",
    });
  };

  return (
    <div className="relative bg-background text-white">
      <HeaderSection onScrollTo={scrollToSection} />

      <HeroSection />

      <NotAvailable />

      <div className="overflow-hidden border-y-2 py-2 md:py-5">
        <ScrollingText />
      </div>

      <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10 z-50">
        <StampCircle
          onScrollTo={scrollToSection}
          label="DK"
          rotatingText="Hire me ~ Hire me ~ Hire me ~ "
        />
      </div>

      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <FooterSection onScrollTo={scrollToSection} />
    </div>
  );
};

export default Home;
