function Section({ id, children, classes }) {
  return (
    <section
      id={id}
      className={`w-[100vw] h-[100vh] flex justify-center items-center z-10 ${classes}`}
    >
      {children}
    </section>
  );
}
export default Section;
