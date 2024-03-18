function Text({ title, info, even }) {
  return (
    <div
      className={`${
        even ? "texts-right" : "texts-left"
      } opacity-0 flex flex-col gap-2`}
    >
      <p
        className={`${
          even ? "md:text-right" : "md:text-left"
        } lg:text-3xl md:text-2xl text-white text-center text-xl font-extrabold`}
        style={{
          WebkitTextStroke: "1px #78A083",
          MozTextStroke: "1px #78A083",
          textStroke: "1px #78A083",
        }}
      >
        {title}
      </p>
      <p
        className={`${
          even ? "md:text-right" : "md:text-left"
        } lg:text-2xl md:text-xl text-justify font-semibold`}
      >
        {info}
      </p>
    </div>
  );
}
export default Text;
