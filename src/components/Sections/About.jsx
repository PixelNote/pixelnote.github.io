import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../Section";
import Like from "../Icons/About/Like";
import Comment from "../Icons/About/Comment";
import Share from "../Icons/About/Share";
import Save from "../Icons/About/Save";
import Ellipse from "../Icons/About/Ellipse";
import Person from "../Images/Person.png";

function About() {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 200px",
          toggleActions: "restart none none reverse",
        },
      });
      st.from(
        "#text, #image",
        {
          x: 50,
          duration: 1.5,
        },
        "<"
      ).to(
        "#image, #text",
        {
          opacity: 1,
          duration: 1.5,
        },
        "<"
      );
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <Section
        id={"about"}
        classes={
          "relative bg-LightGrey z-10 flex-col pt-24 p-5 lg:flex-row lg:gap-10"
        }
      >
        <div
          id="image"
          className="opacity-0 relative bg-gradient-to-r from-Marble to-Oxley min-[1300px]:w-[520px] xl:w-[400px] md:w-[60%] sm:w-[70%] w-[80%] h-auto rounded-lg"
        >
          <div className="absolute top-0 bg-black w-full h-[12%] flex items-center lg:px-5 px-3 gap-2 rounded-t-lg">
            <Ellipse
              size={24}
              color={"#50727B"}
              classes={"lg:w-[36px] lg:h-[36px] sm:w-[28px] sm:h-[28px]"}
            />
            <p className="text-white font-semibold lg:text-2xl sm:text-xl">
              PixelNote
            </p>
          </div>
          <img src={Person} className="object-cover w-[100%] h-auto" />
          <div className="absolute bottom-0 bg-black w-full h-[12%] flex justify-between items-center px-3 lg:rounded-b-lg">
            <div className="flex flex-row gap-3">
              <Like
                size={24}
                color={"#FF3040"}
                classes={"lg:w-[32px] lg:h-[32px] sm:w-[28px] sm:h-[28px]"}
              />
              <Comment
                size={24}
                color={"#FFFFFF"}
                classes={"lg:w-[32px] lg:h-[32px] sm:w-[28px] sm:h-[28px]"}
              />
              <Share
                size={24}
                color={"#FFFFFF"}
                classes={"lg:w-[32px] lg:h-[32px] sm:w-[28px] sm:h-[28px]"}
              />
            </div>
            <div>
              <Save
                size={24}
                color={"#FFFFFF"}
                classes={"lg:w-[32px] lg:h-[32px] sm:w-[28px] sm:h-[28px]"}
              />
            </div>
          </div>
        </div>
        <div
          id="text"
          className="opacity-0 lg:bg-Marble bg-black xl:w-[40%] md:w-[60%] sm:w-[70%] w-[80%] lg:h-[50%] lg:flex lg:items-center lg:p-16 p-6 pt-0 rounded-b-xl lg:rounded-lg"
        >
          <p className="text-white lg:font-semibold text-justify font-light xl:text-3xl sm:text-xl md:text-2xl">
            <span className="lg:hidden pr-1 font-semibold">PixelNote </span>I am
            Andres Jimenez, a software developer born in Colombia. I am
            passionate in making creative solutions with quality and attention
            to details.
          </p>
        </div>
      </Section>
    </div>
  );
}
export default About;
