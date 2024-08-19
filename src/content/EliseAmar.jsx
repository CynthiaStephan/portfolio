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
                                <a href="#" target="blank">Voir la maquette ↗</a>
                                <a href="#" target="blank">Voir le site ↗</a>
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