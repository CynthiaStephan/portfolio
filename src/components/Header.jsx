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

                <a target="blank" href="https://www.linkedin.com/in/cynthia-stephan/">Linkedin</a>
                
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