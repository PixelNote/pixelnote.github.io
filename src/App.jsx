import NavBar from "./components/NavBar";
import About from "./components/Sections/About";
import Home from "./components/Sections/Home";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
