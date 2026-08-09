import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useState } from "react";
import menuButton from "../assets/img/menu-button.svg"
import closeButton from "../assets/img/close-button.svg"

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const baseUrl = import.meta.env.BASE_URL;
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
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
                <Link className="logo" to="/" >Cynthia Stephan</Link>

                <nav>
                    <ul>
                        <li>
                            <a href={`${baseUrl}#top`} onClick={toggleMenu}>
                                Accueil,
                            </a>
                        </li>

                        <li>
                            <a href={`${baseUrl}#project`} onClick={toggleMenu}>
                                Projets,
                            </a>
                        </li>

                        <li>
                            <a href={`${baseUrl}#about`} onClick={toggleMenu}>
                                A propos
                            </a>
                        </li>
                        
                    </ul>
                </nav>
                <div className="nav-contact">
                    <Link target="black" to="https://github.com/CynthiaStephan">GitHub,</Link>
                    <Link target="blanck" to="https://www.linkedin.com/in/cynthia-stephan/">Linkedin</Link>

                </div>
                

                <span className="navbar-toggle" onClick={toggleMenu}>
                    <img className="menu-button" src={menuButton} alt="ouvrir le menu" />
                </span>
            </header>

            <div className={`mobile-navbar ${isOpen ? 'open' : ''}`} role="navigation">
                <div className="mobile-nav-overlay">
                    
                    <div className="mobile-open-navbar">
                        <NavLink className="logo" to="/">Cynthia Stephan</NavLink>
                        <span className="navbar-toggle" onClick={toggleMenu}>
                            <img className="menu-button" src={closeButton} alt="ferme le menu" />
                        </span>
                    </div>

                    <nav className="mobile-nav" role="Navigation Mobile">
                        <ul>
                            <li>
                                <a href={`${baseUrl}#top`} onClick={toggleMenu}>
                                    Accueil,
                                </a>
                            </li>

                            <li>
                                <a href={`${baseUrl}#project`} onClick={toggleMenu}>
                                    Projets,
                                </a>
                            </li>

                            <li>
                                <a href={`${baseUrl}#about`} onClick={toggleMenu}>
                                    A propos
                                </a>
                            </li>

                            <li className="mobile-nav-link" >
                                <Link to="mailto: pro.cynthia.stephan@gmail.com" onClick={toggleMenu}>Email</Link>
                            </li>
                            <li className="mobile-nav-link">
                                <Link target="blank" to="https://www.linkedin.com/in/cynthia-stephan/" onClick={toggleMenu}>Linkedin</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}