import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer(){

    return(
            <footer>
                <div>
                    <Link className="logo-footer" to="/">Cynthia <br /> Stephan</Link>
                </div>
                <div className="footer-socials">
                    <Link to="https://www.linkedin.com/in/cynthia-stephan/">Linkedin</Link>
                    <Link to="https://github.com/CynthiaStephan">GitHub</Link>

                </div>


                <Link to="/legal">Mentions légales</Link>
            </footer>
    )
}