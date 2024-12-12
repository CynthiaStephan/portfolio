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
import ProjectFooter from "../components/ProjectFooter"

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
                                    <p><span className="bold-text">Client</span> : Marie Geffroy</p>
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
                    <div className="context case-study">
                        <h2>Contexte</h2>
                        <p>
                            Dans le cadre d'un stage, j'ai participé à la refonte du site web d'une fondation. L'objectif était de moderniser le site et d'améliorer l'expérience utilisateur. Mon rôle a consisté à contribuer à la création des maquettes fonctionnelles et à la définition de l'arborescence du site, dans le but de préparer un cahier des charges destiné à une agence web.
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img src={wfAction} alt="Wireframe de la page de présentation des actions" />
                        <img src={action} alt="Résultat final en ligne se la page actions" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Processus de Conception et de Réalisation</span>
                            </p>
                            <p>
                                J'ai conçu des maquettes fonctionnelles pour les versions mobile et desktop, en optimisant l'ergonomie et l'expérience utilisateur. La priorité était de garantir une navigation fluide et intuitive, en structurant les contenus de manière logique. Par ailleurs, j'ai participé à la définition de l'arborescence du site, afin de faciliter l'accès à l'information et d'assurer une hiérarchisation cohérente des sections.
                            </p>
                        </div>
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Structure et Contenu du Site</span>
                            </p>
                            <p>
                                Le site refondu présente une interface moderne et une structure bien définie. L'arborescence facilite la navigation et permet aux utilisateurs de trouver facilement les informations sur les missions et les projets de la fondation. La mise en avant des éléments clés, comme les événements et les possibilités de soutien, assure une expérience utilisateur optimale.
                            </p>
                        </div>
                        <img src={wfSoliciter} alt="Wireframe de la page de présentation des actions" />
                        <img src={soliciter} alt="Résultat final en ligne se la page actions" />
                        <img src={wfSoutevenir} alt="Wireframe de la page de présentation des actions" />
                        <img src={soutenir} alt="Résultat final en ligne se la page actions" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Bilan</span>
                            </p>
                            <p>
                            Le wireframe conçu a servi de base solide pour le site final. Il a permis au client de se projeter facilement dans le projet et a facilité la validation de l'étape de création du cahier des charges. Les maquettes fonctionnelles et l'arborescence ont fourni une direction claire pour le développement par l'agence web.
                            </p>
                        </div>


                    </div>


                </section>

                <ProjectFooter currentProject={'/fgodf'}/>

            </main>
            <Footer />
        </>
    )
}