import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useState } from "react";
import menuButton from "../assets/img/menu-button.svg"
import closeButton from "../assets/img/close-button.svg"

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <>
            <header>
                <NavLink className="logo" to="/">Cynthia <br />Stephan</NavLink>

                <a href="mailto: cynthia.stephan@institutsolacroup.com">Contactez-moi</a>

                <a href="#">Linkedin</a>
                
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/projets">Projets,</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a-propos">A propos</NavLink>
                        </li>
                        
                    </ul>
                </nav>

                <span className="navbar-toggle" onClick={toggleMenu}>
                    <img className="menu-button" src={menuButton} alt="ouvrir le menu" />
                </span>
            </header>

            <div className={`mobile-navbar ${isOpen ? 'open' : ''}`} role="navigation">
                <div className="mobile-nav-overlay">
                    <span className="navbar-toggle" onClick={toggleMenu}>
                        <img className="menu-button" src={closeButton} alt="ferme le menu" />
                    </span>

                    <nav className="mobile-nav" role="Navigation Mobile">
                        <ul>
                            
                            <li>
                                <NavLink to="/projets">Projets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/a-propos">A propos</NavLink>
                            </li>
                            <li>
                                <Link to="mailto: cynthia.stephan@institutsolacroup.com">Contactez-moi</Link>
                            </li>
                            <li>
                                <Link target="blank" to="https://www.linkedin.com/in/cynthia-stephan/">Linkedin</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };
  
//     return (
//       <header>
//         <NavLink className="logo" to="/">Cynthia <br />Stephan</NavLink>
  
//         <a href="mailto:cynthia.stephan@institutsolacroup.com">Contactez-moi</a>
  
//         <a href="#">LinkedIn</a>
  
//         <nav className={isOpen ? 'open' : ''}>
//           <ul>
//             <li>
//               <NavLink to="/a-propos">A propos</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projets">Projets</NavLink>
//             </li>
//           </ul>
//         </nav>
  
//         <span className="navbar-toggle" onClick={toggleMenu}>
//           <svg height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <line y1="1" x2="20" y2="1" stroke="black" strokeWidth="2" />
//             <line y1="13" x2="20" y2="13" stroke="black" strokeWidth="2" />
//             <path d="M5 7L20 7" stroke="black" strokeWidth="2" />
//           </svg>
//         </span>
//       </header>
//     );
//   };
  
//   export default Navbar;