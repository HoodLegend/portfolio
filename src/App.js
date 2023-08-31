import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Home from "./Home";
import Services from "./Services";
import Footer from "./Footer";
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
        <div>
        <Navbar />
          <Home />
          <Projects />
          <About/>
          <Skills />
          <Services />
          <Footer />
      </div>
    </Router>
    
    
    
  );
}

export default App;
