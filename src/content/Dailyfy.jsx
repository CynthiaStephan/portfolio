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
                            Dans le cadre de ce projet, Elise Amar, psychologue à Dinard et Saint-Malo, 
                            souhaite avoir un site internet vitrine pour gagner en visibilité et présenter ses thérapies. <br />
                            Le cahier des charges contient : <br />
                            Les codes couleur, le logo, une arborescence, contenu texte, informations et fonctionnalités. <br />
                            Et le positionnement suivant : <br />
                            Cabinet de psychologue familial rassurant et ouvert. Choisir des couleurs bleues, vertes, pastelles pour inspirer le calme et l’écoute dans un cadre rassurant. Lieu ouvert aux enfants. Elise Amar pratique plusieurs axes de thérapies. L’ensemble se veut clair et aéré.
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