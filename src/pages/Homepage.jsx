import { Link } from "react-router-dom";
import '../pages/Homepage.css'
import arrowProject from '../assets/img/arrow-right-up.svg'
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Homepage(){

    return(
        <>
        <Header />
        <main className="homepage">
            <section className="home-hero">
                <h1>Cynthia Stephan</h1>

                <div>
                    <h3 className="profession">Designer UI/UX & <br /> Développeuse Frontend à Dinan</h3>
                    <p className="school">En formation à l’IMTS</p>
                </div>
            </section>
            
            <section className="home-presentation">
                <p>
                    Actuellement en formation de développeuse web à l'IMTS, je suis à la recherche d'une <span className="bold-text">alternance</span> en tant que <span className="bold-text">développeuse backend</span> à partir de septembre 2024.
                </p>
                <p>
                    Après des études en design numérique et en gestion de projet, je souhaite explorer de nouvelles opportunités dans le développement web.
                </p>
            </section>
            
            <section className="home-projects">
                <h2>
                    Projets
                </h2>

                <div>
                    <ul>
                        <li>
                            <Link to ="projets/eliseamar">
                                <div className="project-info">                           
                                    <p className="project-category">Développement Web / UX|UI Design</p>
                                    <h3 className="project-name">Elise Amar</h3>
                                    <p className="project-date">2023</p>
                                </div>
                                <img className="project-arrow" src={arrowProject} alt="ouvrir detail du projet" />
                            </Link>
                        </li>

                        <li>
                            <Link to ="projets/miamapp">
                                <div className="project-info">                           
                                    <p className="project-category">UX|UI Design</p>
                                    <h3 className="project-name">MiamApp</h3>
                                    <p className="project-date">2024</p>
                                </div>
                                <img className="project-arrow" src={arrowProject} alt="ouvrir detail du projet" />
                            </Link>
                        </li>

                        <li>
                            <Link to ="projets/dailyfy">
                                <div className="project-info">                           
                                    <p className="project-category">Développement Web / UX|UI Design</p>
                                    <h3 className="project-name">Dailyfy</h3>
                                    <p className="project-date">2024</p>
                                </div>
                                <img className="project-arrow" src={arrowProject} alt="ouvrir detail du projet" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="home-more-projects">
                    <Link to="/projets">Plus de projets →</Link>
                </div>
            </section>

            <section className="contact-frame">
                <h2>Me contacter</h2>
                <a href="mailto:cynthia.stephan@instutsolacroup.com">Cynthia.stephan@institutsolacroup.com</a>
            </section>

        </main>

        <Footer />

        </>
    )
}