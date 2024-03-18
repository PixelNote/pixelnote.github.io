import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar";
import About from "./components/Sections/About";
import Home from "./components/Sections/Home";
import Projects from "./components/Sections/Projects/Projects";

function App() {
  const main = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const mn = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "top 300px",
          toggleActions: "restart none none reverse",
        },
      });
      mn.to("#navbar", {
        backgroundColor: "#35374B",
        color: "#78A083",
        duration: 1,
      });
      mn.to(
        ".bracket",
        {
          color: "#50727B",
          duration: 1,
        },
        "<"
      );
      mn.to(
        "#about",
        {
          backgroundColor: "#344955",
          duration: 1,
        },
        "<"
      );
      mn.to(
        "#projects",
        {
          backgroundColor: "#344955",
          color: "#78A083",
          duration: 1,
        },
        "<"
      );
      mn.from(
        ".images-left, .texts-left",
        {
          x: -100,
          duration: 1,
        },
        "<"
      );
      mn.from(
        ".texts-right, .images-right",
        {
          x: 100,
          duration: 1,
        },
        "<"
      );
      mn.to(
        ".texts-right, .images-right, .images-left, .texts-left",
        {
          opacity: 1,
          duration: 1,
        },
        "<"
      );
    },
    { scope: main }
  );

  return (
    <div ref={main}>
      <NavBar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
