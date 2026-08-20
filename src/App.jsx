import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Hire from "./components/Hire";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Hire />
      <Qualification />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;