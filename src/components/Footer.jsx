import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer(){

    return(
        <>
            <section className="contact-frame">
                <h2>Me contacter</h2>
                <a href="mailto:cynthia.stephan@institutsolacroup.com">Cynthia.stephan@<wbr/>institutsolacroup.com</a>
            </section>
            
            <footer>
                <div>
                    <Link className="logo-footer" to="/">Cynthia <br /> Stephan</Link>
                </div>

                <Link to="https://www.linkedin.com/in/cynthia-stephan/">Linkedin</Link>

                <Link to="/legal">Mentions légales</Link>
            </footer>
        </>
    )
}