import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Home from "./Home";
import Services from "./Services";
import Footer from "./Footer";


function App() {
  return (
    
      <div>
        <Navbar />
          <Home />
          <Projects />
          <About/>
          <Skills />
          <Services />
          <Footer />
      </div>
    
  );
}

export default App;
