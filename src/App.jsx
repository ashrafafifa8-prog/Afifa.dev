import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Tools />
        <WorkExperience />
        <Contact />
      </main>
    </>
  );
}

export default App;