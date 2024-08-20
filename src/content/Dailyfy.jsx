import Footer from "../components/Footer";
import Header from "../components/Header";
import "./ProjectPresentation.css";
import mockup from "../assets/img/mockup/mockup-dailyfy.jpg";
import calendar from "../assets/img/dailyfy/calendar.jpg";
import publish from "../assets/img/dailyfy/publish.jpg";

export default function Dailyfy(){
    return(       
        <>
            <Header />
            <main className="single-project miamapp">
                <section className="project-presentation-hero">
                    <h1>Dailyfy</h1>
                    
                    <div className="project-info">          
                        <img className="project-mockup" src={mockup} alt="mockup du projet MiamApp" />
                        
                        <div className="project-info-detail">
                            <ul>
                                <li>
                                    <p><span className="bold-text">Année</span> : 2023</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Client</span> : Dailyfy</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Service</span> : UI/UX Design & Application web</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Secteur</span> : Marketing</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Environnement technique</span> : Figma, css, javascrip, php, docker, github</p>
                                </li>
                            </ul>
                            
                            <div className="project-link one-link">
                                <a href="https://www.dailyfy.co/fr/" target="blank">Voir le site ↗</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-presentation">
                    <div className="context">
                        <h2>Contexte</h2>
                        <p>
                            <span className="bold-text">Stage chez Click&Digital - Agence de Communication Web à Saint-Malo</span>
                        </p>
                        <p>
                            J’ai effectué mon stage chez Click&Digital, une agence dirigée par Antoine Sebille, spécialisée dans la communication numérique. L'agence accompagne les entreprises dans leur stratégie en ligne, incluant la création de sites web, les stratégies SEO/SEA, la gestion des réseaux sociaux et la création d'identités visuelles.  
                        </p>
                        <p>
                            J'ai principalement travaillé sur le projet Dailyfy, une application SaaS développée pour optimiser la gestion des réseaux sociaux. Mon rôle a été axé sur l'analyse de l'expérience utilisateur (UX) et de l'interface utilisateur (UI), afin d'identifier des opportunités d'amélioration et d'implémenter des changements significatifs. J'ai également pris en charge l'intégration des modifications en utilisant CSS, JavaScript et PHP pour assurer une interface fluide, réactive et esthétiquement plaisante.
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img src={calendar} alt="Page d'information du cabinet d'Elise Amar" />
                        <img src={publish} alt="Page d'information sur les thérapies du cabinet" />


                    </div>


                </section>

            </main>
            <Footer />
        </>
    )
}