import { Link } from "react-router-dom";

export default function Homepage(){

    return(
        <main>
            <section className="hero">
                <h1>Cynthia Stephan</h1>
                <h3 className="profession">Designer UI/UX &
                Développeuse Frontend à Dinan</h3>
                <p className="school">En formation à l’IMTS</p>
            </section>
            
            <section className="home-presentation">
                <p>
                    Actuellement en formation de développeuse web à l'IMTS, je suis à la recherche d'une <span className="bold-text">alternance</span> en tant que <span className="bold-text">développeuse backend</span> à partir de septembre 2024
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
                            <Link to ="#">
                                <div>                           
                                    <p className="project-category">Application web / UX|UI Design</p>
                                    <h3 className="project-name">Nom du projet 1</h3>
                                    <p className="project-date">2024</p>
                                </div>
                                <span className="project-arrow">↗</span>
                            </Link>
                        </li>

                        <li>
                            <Link to ="#">
                                <div>                           
                                    <p className="project-category">Développement Web / React</p>
                                    <h3 className="project-name">Nom du projet 2</h3>
                                    <p className="project-date">2024</p>
                                </div>
                                <span className="project-arrow">↗</span>
                            </Link>
                        </li>

                        <li>
                            <Link to ="#">
                                <div>                           
                                    <p className="project-category">Développement Web / Html - css</p>
                                    <h3 className="project-name">Nom du projet 1</h3>
                                    <p className="project-date">2024</p>
                                </div>
                                <span className="project-arrow">↗</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <Link to="">Plus de projets →</Link>
                </div>
            </section>

            <section className="contact-frame">
                <h2>Me contacter</h2>
                <a href="mailto:cynthia.stephan@instutsolacroup.com">Cynthia.stephan@institutsolacroup.com</a>
            </section>

        </main>
    )
}