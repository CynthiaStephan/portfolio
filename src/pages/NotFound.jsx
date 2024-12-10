import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import "./NotFound.css";

export default function NotFound(){

    return(
        <>
            <Header />
            <main className="not-found">
                <h1>404</h1>
                <p>Il semble que ce chemin n'existe pas... Mais pas de panique, même les meilleurs explorateurs se perdent parfois !</p>
                <NavLink to="/">Revenir à l'Accueil </NavLink>
            </main>

        </>
    )
}