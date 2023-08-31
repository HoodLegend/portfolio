import screenshot from './images/screenshot.png';
import './css/projects.css'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
      <>
        <div className="hero" id="projects">
          <section>
            <h2>My recent Personal Projects</h2>
            <img
              src={screenshot}
              alt="project-screenshot"
              className="screenshot"
            />
            <br />
            <small>Zedshop</small>
            <br />
            <Link to="https://github.com/HoodLegend/zedshop">Ecommerce Web Application</Link>
          </section>
        </div>
      </>
    );
}
 
export default Projects;