import Section from "../Section";

function Quote() {
  const characters = "Let's turn our creativity into reality.".split("");

  return (
    <Section id={"quote"} classes={"p-10"}>
      <p className="text-6xl sm:text-[10vw] font-bold">
        {characters.map((char, index) => (
          <span key={index} className="char opacity-0">
            {char}
          </span>
        ))}
      </p>
    </Section>
  );
}

export default Quote;
