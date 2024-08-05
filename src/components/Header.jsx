import { NavLink } from "react-router-dom";
import './Header.css'
import { useState } from "react";

// export default function Header(){

//     return(
//         <>
//             <header>
//                 <NavLink className="logo" to="/">Cynthia <br />Stephan</NavLink>

//                 <a href="mailto: cynthia.stephan@institutsolacroup.com">Contactez-moi</a>

//                 <a href="#">Linkedin</a>
                
//                 <nav>
//                     <ul>
//                         <li>
//                             <NavLink to="/a-propos">A propos</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/projets">Projets</NavLink>
//                         </li>
//                     </ul>
//                 </nav>

//                 <span>
//                     <svg  height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <line y1="1" x2="20" y2="1" stroke="black" strokeWidth="2"/>
//                         <line y1="13" x2="20" y2="13" stroke="black" strokeWidth="2"/>
//                         <path d="M5 7L20 7" stroke="black" strokeWidth="2"/>
//                     </svg>
//                 </span>
//             </header>

//             <div className="mobile-nav" role="navigation">
//                 <div className="mobile-nav-overlay">
//                     <nav role="Navigation Mobile">
//                         <ul>
//                             <li>
//                                 <NavLink to="/a-propos">A propos</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/projets">Projets</NavLink>
//                             </li>
//                         </ul>

//                         <a href="mailto: cynthia.stephan@institutsolacroup.com">Contactez-moi</a>
//                         <a href="#">Linkedin</a>
//                     </nav>
//                 </div>
//             </div>
//         </>
//     )
// }

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header>
        <NavLink className="logo" to="/">Cynthia <br />Stephan</NavLink>
  
        <a href="mailto:cynthia.stephan@institutsolacroup.com">Contactez-moi</a>
  
        <a href="#">LinkedIn</a>
  
        <nav className={isOpen ? 'open' : ''}>
          <ul>
            <li>
              <NavLink to="/a-propos">A propos</NavLink>
            </li>
            <li>
              <NavLink to="/projets">Projets</NavLink>
            </li>
          </ul>
        </nav>
  
        <span className="navbar-toggle" onClick={toggleMenu}>
          <svg height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="20" y2="1" stroke="black" strokeWidth="2" />
            <line y1="13" x2="20" y2="13" stroke="black" strokeWidth="2" />
            <path d="M5 7L20 7" stroke="black" strokeWidth="2" />
          </svg>
        </span>
      </header>
    );
  };
  
  export default Navbar;