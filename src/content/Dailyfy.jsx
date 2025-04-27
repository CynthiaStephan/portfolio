import Footer from "../components/Footer";
import Header from "../components/Header";
import "./ProjectPresentation.css";
import mockup from "../assets/img/mockup/mockup-dailyfy.jpg";
import calendar from "../assets/img/dailyfy/calendar.jpg";
import publish from "../assets/img/dailyfy/publish.jpg";
import ProjectFooter from "../components/ProjectFooter";
import { useEffect } from "react";

export default function Dailyfy(){
    // Import the flowmap effect
    useEffect(() => {
        import('../../flowmap.js').then((module) => {
            module.applyFlowmapEffect(); 
        }).catch((err) => console.error("Erreur lors de l'import du module Flowmap :", err));
    }, []);
    
    return(       
        <>
            <Header />
            <main className="single-project miamapp">
                <section className="project-presentation-hero">
                    <h1>Dailyfy</h1>
                    
                    <div className="project-info">     
                        <div className="flowmap-img">
                            <img className="project-mockup" src={mockup} alt="mockup du projet MiamApp" />
                        </div>     
                        
                        <div className="project-info-detail">
                            <ul>
                                <li>
                                    <p><span className="bold-text">Année</span> : 2024</p>
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
                                <a className="link-animation" href="https://www.dailyfy.co/fr/" target="blank">Voir le site ↗</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-presentation">
                    <div className="context case-study">
                        <h2>Contexte</h2>
                        <p>
                            <span className="bold-text upper">Stage chez Click&Digital - Agence de Communication Web à Saint-Malo</span>
                        </p>
                        <p>
                            Lors de mon stage chez Click&Digital, une agence web à Saint-Malo, j'ai eu l'opportunité de participer au développement de Dailyfy, une application SaaS dédiée à la gestion des réseaux sociaux pour les entreprises. Mon rôle principal a été de travailler sur le développement Frontend, tout en apportant des améliorations UX/UI pour améliorer l'expérience des utilisateurs.
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img src={calendar} alt="Interface calendier de publication" />
                        <img src={publish} alt="Interface de planification de publication" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Développement Frontend : Solution technique et pratique</span>
                            </p>
                            <p>
                                En tant que développeuse Frontend, j'ai transformé les besoins du projet en solutions concrètes en utilisant CSS, JavaScript et PHP. J'ai réorganisé la navigation pour la rendre plus intuitive, optimisé les styles CSS pour une meilleure réactivité et intégré des animations pour rendre l'application plus engageante. J'ai aussi veillé à ce que l'application fonctionne parfaitement sur tous les types d'appareils, ce qui m'a permis d'acquérir des compétences supplémentaires en PHP et en programmation orientée objet
                            </p>
                        </div>
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Analyse UX/UI : Optimisation de l'expérience utilisateur</span>
                            </p>
                            <p>
                                En parallèle, j'ai analysé l'interface de Dailyfy pour identifier des axes d'amélioration. En me basant sur une étude comparative des applications concurrentes, j'ai pu proposer des changements qui ont amélioré la clarté visuelle et la navigation. Ces recommandations ont ensuite été intégrées dans mes travaux de développement, assurant une cohérence entre l'analyse UX/UI et les modifications techniques.
                            </p>
                        </div>

                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Conclusion</span>
                            </p>
                            <p>
                                Les modifications apportées à Dailyfy ont permis de simplifier son utilisation et d'améliorer l'interface.
                                Ce stage m'a permis de renforcer mes compétences en développement Frontend et UX/UI, tout en découvrant de nouvelles technologies comme le PHP et la programmation orientée objet, ce qui m'a donné de nouvelles perspectives pour mes futurs projets.
                            </p>
                        </div>


                    </div>


                </section>

                <ProjectFooter currentProject={'/dailyfy'}/>

            </main>
            <Footer />
        </>
    )
}