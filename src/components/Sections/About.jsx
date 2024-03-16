import Section from "../Section";
import StarSVG from "../Icons/Star";
import Ellipse from "../Icons/Ellipse";
import Person from "../Images/Person.png";
import Circles from "../Icons/Circles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 200px",
        toggleActions: "play",
      },
    });
    tl.from(
      "#left-star",
      {
        duration: 2,
        rotation: -360,
      },
      "<"
    )
      .from(
        "#right-star",
        {
          duration: 2,
          rotation: 360,
        },
        "<"
      )
      .to(
        "#left-star, #right-star, #about-title",
        { opacity: 1, duration: 2 },
        "<"
      )
      .from("#about-image", { x: -50, duration: 2 }, "<")
      .from("#about-text", { x: 50, duration: 2 }, "<")
      .to(
        "#about-text, #about-image",
        {
          opacity: 1,
          duration: 2,
        },
        "<"
      );
  });
  const Star = (id) => {
    return (
      <StarSVG
        id={id}
        color={"#78A083"}
        classes={"opacity-0 sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"}
      />
    );
  };

  return (
    <div ref={container}>
      <Section id={"about"} classes={"relative bg-LightGrey z-10"}>
        <div className="absolute xl:top-36 sm:top-32 top-24 flex flex-row items-center gap-4">
          {Star("left-star")}
          <p
            id="about-title"
            className="opacity-0 sm:text-4xl text-2xl font-medium"
          >
            About
          </p>
          {Star("right-star")}
        </div>
        <div className="relative flex lg:flex-row flex-col gap-12 justify-center items-center">
          <div
            id="about-image"
            className="opacity-0 xl:w-[600px] xl:h-[600px] sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] border-Tuna border-4 rounded-full"
          >
            <Ellipse color={"#50727B"} classes={"w-full h-full"} />
            <img
              src={Person}
              className="rounded-full object-contain absolute top-0 left-15 xl:w-[600px] xl:h-[600px] sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]"
            />
          </div>
          <div
            id="about-text"
            className="opacity-0 flex flex-col items-center gap-8 xl:w-[40%] lg:w-[50%]"
          >
            <p className="text-justify w-[80%] xl:text-4xl sm:text-3xl text-2xl font-medium">
              I am Andres Jimenez, a software developer born in Colombia. I am
              passionate in making creative solutions with quality and attention
              to details.
            </p>
            <Circles
              id={"circles"}
              color={"#50727B"}
              classes={"md:hidden sm:w-[80px] sm:h-[80px]"}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
export default About;
