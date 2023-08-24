import screenshot from './images/screenshot.png';
import './css/projects.css'

const Projects = () => {
    return (
      <>
        <div className="hero">
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
            <a href="/">Ecommerce Web Application</a>
          </section>
        </div>
      </>
    );
}
 
export default Projects;