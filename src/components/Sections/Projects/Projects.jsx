import Section from "../../Section";
import Image from "./Image";
import Text from "./Text";
import { items } from "./items";

function Projects() {
  const even = (index) => {
    if (index % 2 === 0) return true;
    else return false;
  };
  return (
    <div>
      <Section
        id={"projects"}
        classes={
          "bg-white w-full h-auto flex flex-col justify-center items-center md:gap-12 gap-20 pt-36 pb-10"
        }
      >
        <p
          id="projects-title"
          className="font-semibold text-4xl -mb-5 sm:-mb-0 md:mb-5"
        >
          Projects
        </p>
        {items.map((item, index) => (
          <div
            className={`${
              even(index) ? "md:flex-row" : "md:flex-row-reverse"
            } w-[80%] h-auto flex flex-col justify-center items-center gap-10`}
            key={index}
          >
            <Image
              img={item.img}
              tech={item.tech}
              even={even(index)}
              link={item.link}
            />
            <Text
              title={item.info.title}
              info={item.info.text}
              even={even(index)}
            />
          </div>
        ))}
      </Section>
    </div>
  );
}
export default Projects;
