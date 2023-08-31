import { useState } from 'react';
import './css/skills.css';

const Skills = () => {
  const [content, setContent] = useState("Skills");

  const handleClick = () => {
    if (content === "Skills") {
      setContent("Education");
    } else {
      setContent("Skills");
    }
  };

  return (
    <div className="container" id="skills">
      <div className="skills-section">
        <article>
          <div className="info">
            <button
              onClick={handleClick}
              className="skills-btn"
              style={{
                marginRight: "10px"
              }}
            >
              Skills ↗
            </button>
            <button className="education-btn" onClick={handleClick}>
              Education ↗
            </button>
          </div>
          {content === "Skills" ? (
            <div className="skills">
              <ul>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript-icon"
                  />
                  <p>Javascript</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="java-icon"
                  />
                  <p>Java</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                    alt="spring-icon"
                  />
                  <p>Spring boot</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="html-icon"
                  />
                  <p>HTML5</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                  />
                  <p>CSS3</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="git-icon"
                  />
                  <p>Git & GitHub</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    alt="sql-icons"
                  />
                  <p>MySQL</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                    alt="bootstrap-icon"
                  />
                  <p>Bootstrap CSS</p>
                </li>
                <li>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="react-icons"
                  />
                  <p>React</p>
                </li>
              </ul>
            </div>
          ) : (
            <div className="education">
              <p>2018 - present</p>
              <small>Copperbelt University</small>
              <p>Bsc Computer Science</p>

              <p>2014 - 2016</p>
              <small>David Kaunda National Technical School</small>
              <p>High School Certificate</p>

              <p>2012 - 2013</p>
              <small>St. Marys Junior Seminary</small>
              
              <p>2003 - 2011</p>
              <small>Sun City Primary School</small>
              <p>Grade 7 Certificate</p>
              
            </div>
          )}
        </article>
      </div>
    </div>
  );
};
 
export default Skills;