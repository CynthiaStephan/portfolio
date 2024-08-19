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
                            J’ai effectué mon stage chez Click&Digital, une agence de communication globale orientée Web à Saint-Malo. 
                            Présidée par Antoine Sebille, l’agence accompagne des entreprises dans leur communication sur Internet.
                            Elle réalise des sites Internet, met en place des stratégies SEO/SEA, gestion des réseaux sociaux, création d’identité visuelle.
                            Pendant la durée de ce stage, j'ai principalement travaillé sur le front de l’application Dailyfy, un outil pour gérer sa communication sur les réseaux sociaux. 
                            Dans le cadre de ce projet, mon rôle est de faire des propositions d’amélioration de l'UX/UI de l’application et de faire l’intégration en CSS, JavaScript et Php. 
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