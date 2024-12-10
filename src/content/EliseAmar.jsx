import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockup from "../assets/img/mockup/mockup-elise.jpg"
import mobileMockup from "../assets/img/eliseamar/mockup-mobile-elise.jpg"
import home from "../assets/img/eliseamar/home.jpg"
import office from "../assets/img/eliseamar/office.jpg"
import about from "../assets/img/eliseamar/about.jpg"
import ProjectFooter from "../components/ProjectFooter"

export default function EliseAmar(){

    return(
        <>
            <Header />
            <main className="single-project elise">
                <section className="project-presentation-hero">
                    <h1>Elise Amar</h1>
                    
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
                                <a href="https://www.figma.com/proto/cKNEiqm5wlN7iL7hcSPBRm/Psychologue_FrontEnd?page-id=0%3A1&node-id=48-4&viewport=741%2C900%2C0.05&t=XT0vBMxMDICh2b1H-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=48%3A4&show-proto-sidebar=1" target="blank">Voir la maquette ↗</a>
                                <a href="https://cynthia.errhub404.fr/elise-psychologue/" target="blank">Voir le site ↗</a>
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
                                    Processus de Conception et de Réalisation
                                </span>
                            </p>
                            <p>
                                La première étape du projet a consisté à concevoir une maquette fidèle aux attentes d'Elise Amar et adaptée aux besoins des utilisateurs. J'ai débuté par une analyse comparative des sites web dans le domaine de la psychologie. Ce benchmark a permis d'identifier des tendances pertinentes et de définir les priorités en matière d'ergonomie et de design.
                            </p>
                            <p>

                                Ensuite, j'ai élaboré des wireframes détaillés pour structurer chaque page et organiser les éléments visuels et textuels de manière cohérente. Les wireframes ont servi de base pour la création d'une maquette finale sur Figma. La palette de couleurs, définie dans le cahier des charges, s'appuyait sur des tons pastels, principalement des bleus et des verts, afin de transmettre un sentiment de sérénité et de confiance. La maquette a été conçue avec soin pour garantir une intégration fluide, en tenant compte des principes d'accessibilité et des besoins techniques de mes camarades en charge de cette phase.
                            </p>
                        </div>
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">
                                    Processus de Conception et de Réalisation
                                </span>
                            </p>

                        </div>
                        <img src={office} alt="Page d'information du cabinet d'Elise Amar" />
                        <img src={about} alt="Page d'information sur les thérapies du cabinet" />
                        <img className="img-long" src={mobileMockup} alt="Différentes vue du site sur mobile" />


                    </div>


                </section>
                <ProjectFooter currentProject={'/eliseamar'}/>

            </main>
            <Footer />
        </>
    )
}