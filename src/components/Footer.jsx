import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <footer>
            <div>
                <Link to="/">Cynthia Stephan</Link>
                <p>© 2024</p>
            </div>

            <Link to="#">Mentions légales</Link>

            <Link to="#">Linkedin</Link>
        </footer>
    )
}