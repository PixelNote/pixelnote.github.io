import Section from "../Section";
import Dots from "../Icons/Home/Dots";
import Arrow from "../Icons/Home/Arrow";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("#dots", {
        transformOrigin: "center center",
        width: 5,
        height: 5,
        opacity: 0.5,
        duration: 2,
        ease: "power3.out",
      });
      gsap.from("#text", {
        fontSize: 0,
        opacity: 0.5,
        duration: 2,
        ease: "power3.out",
      });
      gsap
        .timeline()
        .from("#scroll", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        })
        .to("#wave", {
          y: 290,
          duration: 2,
          delay: 2,
          repeat: 3,
          repeatDelay: 2,
        })
        .set("#wave", {
          y: 0,
        });
    },
    { scope: container }
  );

  return (
    <Section id={"home"} classes={"relative"}>
      <div ref={container}>
        <div className="absolute left-[10%] top-[25%]">
          <Dots
            id="dots"
            color={"#78A083"}
            classes={"sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]"}
          />
        </div>

        <div
          id="text"
          className="flex flex-col xl:text-[160px] md:text-9xl sm:text-7xl text-5xl font-semibold z-20"
        >
          <p>Hi, I&apos;m Andres</p>
          <p
            className="text-white -mt-2"
            style={{
              WebkitTextStroke: "2px black",
              MozTextStroke: "2px black",
              textStroke: "2px black",
            }}
          >
            Hi, I&apos;m Andres
          </p>
          <p className="sm:hidden -mt-2">Hi, I&apos;m Andres</p>
        </div>

        <p
          id="scroll"
          className="text-Marble sm:text-3xl text-2xl absolute bottom-[180px] right-[20px] rotate-90"
        >
          Scroll
        </p>
        <Arrow
          id={"scroll"}
          color={"#50727B"}
          classes={
            "absolute sm:right-[25px] sm:bottom-[80px] bottom-[100px] right-[28px] sm:w-[70px] sm:h-[70px] w-[50px] h-[50px]"
          }
        />
        <div
          id="wave"
          className="absolute bg-white sm:w-[40px] w-[30px] h-[50px] bottom-[240px] right-[40px]"
        ></div>
      </div>
    </Section>
  );
}
export default Home;
