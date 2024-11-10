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

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    };

    return(
        <>
            <header>
                <div className='background-columns'>
                    <div className='column'></div>
                    <div className='column'></div>
                    <div className='column'></div>
                    <div className='column'></div>
                    <div className='column '></div>
                    <div className='column desktop'></div>
                </div>
                <NavLink className="logo" to="/" onClick={handleLinkClick}>Cynthia Stephan</NavLink>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleLinkClick}>Accueil,</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projets" onClick={handleLinkClick}>Projets,</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apropos" onClick={handleLinkClick}>A propos</NavLink>
                        </li>
                        
                    </ul>
                </nav>
                <div className="nav-contact">

                    <a target="blank" href="https://www.linkedin.com/in/cynthia-stephan/">Linkedin,</a>
                    <Link to="mailto: cynthia.stephan@institutsolacroup.com">Contactez-moi</Link>

                </div>
                

                <span className="navbar-toggle" onClick={toggleMenu}>
                    <img className="menu-button" src={menuButton} alt="ouvrir le menu" />
                </span>
            </header>

            <div className={`mobile-navbar ${isOpen ? 'open' : ''}`} role="navigation">
                <div className="mobile-nav-overlay">
                    
                    <div className="mobile-open-navbar">
                        <NavLink className="logo" to="/">Cynthia <br />Stephan</NavLink>
                        <span className="navbar-toggle" onClick={toggleMenu}>
                            <img className="menu-button" src={closeButton} alt="ferme le menu" />
                        </span>
                    </div>

                    <nav className="mobile-nav" role="Navigation Mobile">
                        <ul>
                            <li>
                                <NavLink to="/projets" onClick={handleLinkClick}>Projets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/apropos" onClick={handleLinkClick}>A propos</NavLink>
                            </li>

                            <li className="mobile-nav-link">
                                <Link to="mailto: cynthia.stephan@institutsolacroup.com">Contactez-moi</Link>
                            </li>
                            <li className="mobile-nav-link">
                                <Link target="blank" to="https://www.linkedin.com/in/cynthia-stephan/">Linkedin</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}