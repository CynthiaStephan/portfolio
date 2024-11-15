import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockup from "../assets/img/mockup/mockup-elise.jpg"
import mobileMockup from "../assets/img/eliseamar/mockup-mobile-elise.jpg"
import home from "../assets/img/eliseamar/home.jpg"
import office from "../assets/img/eliseamar/office.jpg"
import about from "../assets/img/eliseamar/about.jpg"

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
                    <div className="context">
                        <h2>Contexte</h2>
                        <p>
                            <span className="bold-text upper">Projet : Site Vitrine pour Elise Amar, Psychologue à Dinard et Saint-Malo</span>
                        </p>
                        <p>
                            Elise Amar, psychologue spécialisée en thérapies familiales, a exprimé le besoin d'un site internet vitrine pour accroître sa visibilité en ligne et présenter ses services. Le cahier des charges comprenait la définition des codes couleurs, du logo, de l'arborescence, du contenu texte, ainsi que des fonctionnalités requises.
                        </p>
                        <p>
                            Le site devait refléter un positionnement clair : un cabinet familial, rassurant et ouvert, utilisant des teintes bleues, vertes et pastel pour créer une atmosphère calme et propice à l'écoute. Le design devait être épuré et aéré, en accord avec les divers axes de thérapies pratiqués, tout en étant accueillant pour les enfants.

                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img className="img-long" src={home} alt="Page d'accueil du projet Elise Amar" />
                        <img src={office} alt="Page d'information du cabinet d'Elise Amar" />
                        <img src={about} alt="Page d'information sur les thérapies du cabinet" />
                        <img className="img-long" src={mobileMockup} alt="Différentes vue du site sur mobile" />


                    </div>


                </section>

            </main>
            <Footer />
        </>
    )
}