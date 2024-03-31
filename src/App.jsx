import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./components/NavBar";
import About from "./components/Sections/About";
import Home from "./components/Sections/Home";
import Projects from "./components/Sections/Projects/Projects";
import Quote from "./components/Sections/Quote";
import SplitType from "split-type";

function App() {
  const main = useRef();
  const split = new SplitType("#quote-text");
  console.log(split);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const mn = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "top 40%",
          toggleActions: "restart reverse restart reverse",
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
        .from("#projects-title", {
          opacity: 0,
          y: -40,
          duration: 1,
        })
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

      const qt = gsap.timeline({
        scrollTrigger: {
          trigger: "#quote",
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "restart reverse restart reverse",
        },
      });
      qt.to("#navbar", {
        backgroundColor: "#35374B",
        color: "#78A083",
        duration: 1,
      })
        .to(
          "#quote",
          {
            backgroundColor: "#344955",
            color: "#78A083",
            duration: 1,
          },
          "<"
        )
        .to(
          "#home",
          {
            backgroundColor: "#344955",
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
        .to(".char", {
          opacity: 1,
          stagger: 0.05,
          duration: 0.1,
        });
    },
    { scope: main }
  );

  return (
    <div ref={main}>
      <NavBar />
      <main>
        <Home />
        <Quote />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
