import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hire />
      <Footer />
    </div>
  );
}

export default App;