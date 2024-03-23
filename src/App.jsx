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
      })
        .to(
          ".bracket",
          {
            color: "#50727B",
            duration: 1,
          },
          "<"
        )
        .to(
          "#about",
          {
            backgroundColor: "#344955",
            duration: 1,
          },
          "<"
        )
        .to(
          "#projects",
          {
            backgroundColor: "#344955",
            color: "#78A083",
            duration: 1,
          },
          "<"
        )
        .from(
          ".images-left, .texts-left",
          {
            x: -100,
            duration: 1,
          },
          "<"
        )
        .from(
          ".texts-right, .images-right",
          {
            x: 100,
            duration: 1,
          },
          "<"
        )
        .to(
          ".texts-right, .images-right, .images-left, .texts-left",
          {
            opacity: 1,
            duration: 1,
          },
          "<"
        )
        .to(
          "#close, #menu",
          {
            filter:
              "invert(57%) sepia(21%) saturate(416%) hue-rotate(84deg) brightness(101%) contrast(89%)",
            duration: 1,
          },
          "<"
        )
        .to(
          "#slider",
          {
            color: "#D9D9D9",
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
