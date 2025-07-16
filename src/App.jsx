import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import useLenis from "./customHooks/useLenis";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollToPlugin);

const ScrollHandler = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const scrollToTop = () => {
      if (lenis && lenis.scrollTo) {
        lenis.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
        gsap.to(window, {
          duration: 0,
          scrollTo: { y: 0, autoKill: true },
        });
      }
    };

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    scrollToTop();

    const handlePageShow = (event) => {
      if (event.persisted) {
        scrollToTop();
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [location.pathname, lenis]);

  return null;
};

const App = () => {
  useLenis();

  return (
    <Router basename="/project">
      <ScrollHandler />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
