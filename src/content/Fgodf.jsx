import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockup from "../assets/img/mockup/mockup-fgodf.jpg"
import wfAction from "../assets/img/godf/wf-actions.jpg"
import action from "../assets/img/godf/actions.jpg"
import wfSoliciter from "../assets/img/godf/wf-soliciter.jpg"
import soliciter from "../assets/img/godf/soliciter.jpg"
import wfSoutevenir from "../assets/img/godf/wf-soutenir.jpg"
import soutenir from "../assets/img/godf/soutenir.jpg"

export default function Fgodf(){


    return(
        <>
            <Header />
            <main className="single-project elise">
                <section className="project-presentation-hero">
                    <h1>Fondation Grand Orient de France</h1>
                    
                    <div className="project-info">          
                        <img className="project-mockup" src={mockup} alt="mockup du projet Elise Amar" />
                        
                        <div className="project-info-detail">
                            <ul>
                                <li>
                                    <p><span className="bold-text">Année</span> : 2023</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Client</span> : Project fictif</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Service</span> : Maquette fonctionnelle</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Secteur</span> : Fondation</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Environnement technique</span> : Figma</p>
                                </li>
                            </ul>
                            
                            <div className="project-link one-link">
                                <a  href="https://www.fondation-godf.org/" target="blank">Voir le site ↗</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-presentation">
                    <div className="context">
                        <h2>Contexte</h2>
                        <p>
                            Contexte : <br />
                            Refonte du site web d'une fondation. Création de maquettes fonctionnelles et de l'arborescence pour élaborer un cahier des charges destiné à une agence web.
                        </p>
                        <p>
                            Livrables : <br />
                            Maquettes fonctionnelles (mobile et desktop)
                            Arborescence
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img src={wfAction} alt="Wireframe de la page de présentation des actions" />
                        <img src={action} alt="Résultat final en ligne se la page actions" />
                        <img src={wfSoliciter} alt="Wireframe de la page de présentation des actions" />
                        <img src={soliciter} alt="Résultat final en ligne se la page actions" />
                        <img src={wfSoutevenir} alt="Wireframe de la page de présentation des actions" />
                        <img src={soutenir} alt="Résultat final en ligne se la page actions" />



                    </div>


                </section>

            </main>
            <Footer />
        </>
    )
}