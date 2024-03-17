import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Close from "./Icons/NavBar/Close.jsx";
import Menu from "./Icons/NavBar/Menu.jsx";

function NavBar() {
  const container = useRef();
  const [slider, setSlider] = useState(false);

  const handleSlider = () => {
    console.log(slider);
    setSlider(!slider);
  };

  useGSAP(
    () => {
      gsap.from("#navbar", {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        onComplete: function () {
          gsap.from("#logo, .links", {
            y: -4,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          });
          gsap.to("#logo, .links", {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          });
        },
      });
    },
    { scope: container }
  );

  const sections = ["Home", "About", "Projects", "Contact"];
  return (
    <div ref={container}>
      <nav
        id="navbar"
        className="flex flex-row justify-between items-center fixed w-[100vw] h-16 sm:h-20 bg-white lg:px-28 md:px-12 sm:px-8 px-5 drop-shadow-lg z-20"
      >
        <p id="logo" className="text-3xl font-semibold opacity-0">
          <span className="text-Marble">[</span>PixelNote
          <span className="text-Marble">]</span>
        </p>
        <ul className="text-xl">
          <div className="flex-row hidden gap-4 md:gap-10 sm:flex font-medium">
            {sections.map((section, sindex) => (
              <a href={`#${section.toLowerCase()}`} key={sindex}>
                <li className="links hover:cursor-pointer hover:text-Marble opacity-0">
                  {section}
                </li>
              </a>
            ))}
          </div>

          <li className="sm:hidden flex justify-center" onClick={handleSlider}>
            <Menu size={28} />
          </li>
        </ul>
      </nav>
      <div
        className={`z-20 sm:hidden w-[100vw] h-[100vh] bg-transparent fixed ${
          slider ? "-translate-x-0" : "translate-x-full"
        } transition-all duration-300 backdrop-filter backdrop-blur-md border border-gray-400 shadow-lg`}
      >
        <div className="absolute right-5 top-5" onClick={handleSlider}>
          <Close size={30} />
        </div>
        <ul className="flex flex-col w-full h-full justify-center items-center gap-10 text-4xl font-medium">
          {sections.map((section, sindex) => (
            <a
              onClick={handleSlider}
              href={`#${section.toLowerCase()}`}
              key={sindex}
            >
              <li
                key={sindex}
                className="hover:cursor-pointer hover:text-Marble"
              >
                {section}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
