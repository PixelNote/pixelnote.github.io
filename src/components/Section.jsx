function Section({ children, classes }) {
  return (
    <section
      className={`w-[100vw] h-[100vh] flex justify-center items-center bg-white z-10 ${classes}`}
    >
      {children}
    </section>
  );
}
export default Section;
