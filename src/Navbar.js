import './css/navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      
      <nav className="navigation">
        <a href="/" className="my-name">
          Mofya Ndabala
        </a>
        <button className="hamburger-icon" onClick={ () => setIsNavExpanded(!isNavExpanded)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/Services">Projects</a>
            </li>
            <li>
              <a href="/Services">Skills</a>
            </li>
          </ul>
        </div>
      </nav>
      
    );
}
 
export default Navbar;