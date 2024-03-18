function Image({ img, tech, even, link }) {
  return (
    <div
      className={`${
        even ? "images-left" : "images-right"
      } w-[80%] h-auto opacity-0 flex flex-col items-center gap-2`}
    >
      <div className="border-solid border-4 border-Oxley rounded-xl object-cover">
        <a href={link} target="_blank">
          <img
            className="cursor-pointer object-cover w-[100%] h-auto"
            src={img}
          />
        </a>
      </div>
      <div className="w-full lg:text-2xl md:text-xl flex justify-center flex-row flex-wrap gap-2 font-medium">
        {tech.map((item, index) => (
          <span
            className="bg-Oxley rounded-xl border-2 border-solid border-Marble text-white px-2 py-1"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Image;
