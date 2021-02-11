import About from "./components/About";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Homepage/>
        <About />
        <hr></hr>
        <Skills />
        <hr></hr>
        <Projects />
        <Contact/>
      </div>
  );
}

export default App;
