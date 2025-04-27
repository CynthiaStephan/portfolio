import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockup from "../assets/img/mockup/mockup-elise.jpg"
import mobileMockup from "../assets/img/eliseamar/mockup-mobile-elise.jpg"
import home from "../assets/img/eliseamar/home.jpg"
import office from "../assets/img/eliseamar/office.jpg"
import about from "../assets/img/eliseamar/about.jpg"
import ProjectFooter from "../components/ProjectFooter"
import { useEffect } from "react"

export default function EliseAmar(){

    useEffect(() => {
        import('../../flowmap.js').then((module) => {
            module.applyFlowmapEffect(); 
        }).catch((err) => console.error("Erreur lors de l'import du module Flowmap :", err));
    }, []);
    
    return(
        <>
            <Header />
            <main className="single-project elise">
                <section className="project-presentation-hero">
                    <h1>Elise Amar</h1>
                    
                    <div className="project-info">
                        <div className="flowmap-img">   
                            <img className="project-mockup" src={mockup} alt="mockup du projet Elise Amar" />
                        </div>
                        
                        <div className="project-info-detail">
                            <ul>
                                <li>
                                    <p><span className="bold-text">Année</span> : 2023</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Client</span> : Project fictif</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Service</span> : Maquette & Site web static</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Secteur</span> : santé</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Environnement technique</span> : Figma, html, css</p>
                                </li>
                            </ul>
                            
                            <div className="project-link">
                                <a className="link-animation" href="https://www.figma.com/proto/cKNEiqm5wlN7iL7hcSPBRm/Psychologue_FrontEnd?page-id=0%3A1&node-id=48-4&viewport=741%2C900%2C0.05&t=XT0vBMxMDICh2b1H-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=48%3A4&show-proto-sidebar=1" target="blank">Voir la maquette ↗</a>
                                <a className="link-animation" href="https://cynthia.errhub404.fr/elise-psychologue/" target="blank">Voir le site ↗</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-presentation">
                    <div className="context case-study">
                        <h2>Contexte</h2>
                        <p>
                            <span className="bold-text upper">Projet : Site Vitrine pour Elise Amar, Psychologue à Dinard et Saint-Malo</span>
                        </p>
                        <p>
                            Elise Amar, psychologue spécialisée en thérapies familiales, souhaitait renforcer sa présence en ligne pour mieux faire connaître ses services. L'objectif principal était de créer un site internet vitrine qui mette en avant l'atmosphère apaisante et professionnelle de son cabinet.
                        </p>
                        <p>
                            Ce projet visait également à proposer une navigation intuitive et une identité visuelle rassurante, tout en intégrant des fonctionnalités clés comme un formulaire de contact et une réservation via Doctolib.
                        </p>
                        <p>
                            Ce projet a été réalisé dans le cadre de ma formation Front-End à l'IMTS. Il s'est déroulé en deux grandes étapes, mêlant une phase de maquettage centrée sur le design et une phase d'intégration technique.
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img className="img-long" src={home} alt="Page d'accueil du projet Elise Amar" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">
                                    Processus de Conception : Maquettage
                                </span>
                            </p>
                            <p>
                                Pour répondre aux besoins d'Elise Amar et de ses utilisateurs, j'ai commencé par analyser des sites similaires (benchmark). Cela m'a permis d'identifier les attentes en termes d'ergonomie et de design.
                            </p>
                            <p>
                                J'ai ensuite conçu des wireframes pour structurer les pages et optimiser l'organisation des contenus. Ces bases ont conduit à une maquette réalisée sur Figma, utilisant une palette de tons pastels (bleu et vert) pour inspirer sérénité et confiance. La maquette a également intégré des principes d'accessibilité, essentiels pour garantir une expérience inclusive.
                            </p>
                        </div>
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">
                                    Processus de Réalisation : Intégration
                                </span>
                            </p>
                            <p>
                                J'ai développé le site en HTML5 et CSS3 avec une structure sémantique et des balises ARIA pour l'accessibilité. La mise en page, réalisée avec Flexbox, assure une compatibilité responsive sur tous les appareils.
                            </p>
                            <p>
                                Des fonctionnalités comme une carte interactive Google Maps et un bouton de réservation Doctolib ont été intégrées. Des tests sur différents navigateurs ont garanti un rendu fluide et uniforme.
                            </p>
                        </div>
                        <img src={office} alt="Page d'information du cabinet d'Elise Amar" />
                        <img src={about} alt="Page d'information sur les thérapies du cabinet" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">
                                    Structure et Contenu du Site
                                </span>
                            </p>
                            <ul>
                                <li>
                                    <span className="bold-text">Accueil </span>: Présentation des services et bouton de réservation rapide.
                                </li>
                                <li>
                                    <span className="bold-text">Qui suis-je ? </span>: Parcours et engagements professionnels.
                                </li>
                                <li>
                                    <span className="bold-text">Pour qui ? </span>: Description des types de thérapies (individuelles, familiales, conjugales).
                                </li>
                                <li>
                                    <span className="bold-text">Blog </span>: Articles informatifs sur des sujets psychologiques.
                                </li>
                                <li>
                                    <span className="bold-text">Contact </span>: Formulaire sécurisé et carte interactive pour localiser le cabinet.
                                </li>
                            </ul>
                            <p>
                                Le site comprend plusieurs pages clés pour une navigation intuitive :
                            </p>
                            <p>
                                Visuellement, des couleurs douces et des images soigneusement choisies renforcent l'identité apaisante et professionnelle du cabinet.
                            </p>
                        </div>
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">
                                    Bilan et Perspectives
                                </span>
                            </p>
                            <p>
                                Le projet respecte le cahier des charges, avec une intégration fidèle à la maquette et l'application des principes d'accessibilité et de web sémantique, garantissant une navigation intuitive et inclusive.
                            </p>
                            <p>
                                Cette expérience m'a permis de consolider mes compétences en design et intégration, tout en répondant aux besoins spécifiques du client.
                            </p>
                        </div>
                        <img className="img-long" src={mobileMockup} alt="Différentes vue du site sur mobile" />


                    </div>


                </section>
                <ProjectFooter currentProject={'/eliseamar'}/>

            </main>
            <Footer />
        </>
    )
}