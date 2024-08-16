import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockupMiam from "../assets/img/mockup-miamapp.jpg"
import menu from "../assets/img/menu.jpg"
import addMenu from "../assets/img/add-menu.jpg"
import mockup from "../assets/img/miamapp-mockup.jpg"

export default function MiamApp(){

    return(
        <>
            <Header />
            <main className="single-project miamapp">
                <section className="project-presentation-hero">
                    <h1>MiamApp</h1>
                    <div className="project-info">          
                        <img className="project-mockup" src={mockupMiam} alt="mockup du projet MiamApp" />
                        <div>
                            <ul>
                                <li>
                                    <p><span className="bold-text">Année</span> : 2024</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Client</span> : IMTS</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Service</span> : Maquette & Application</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Secteur</span> : Restauration collective</p>
                                </li>
                                <li>
                                    <p><span className="bold-text">Environnement technique</span> : Figma, React, NodeJs</p>
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
                        <p>Refonte de MiamApp, une application de gestion des réservations de la cantine de l'IMTS, initialement développée par un élève. <br /> 
                        L'application vise à responsabiliser les élèves et à faciliter le travail du secrétariat. <br /> 
                        Cette refonte améliore l'expérience utilisateur et la robustesse de l'application.</p>          
                    </div>

                    <div className="showcase-images">
                    
                        <img src={mockup} alt="" />
                        <img src={menu} alt="" />
                        <img src={addMenu} alt="" />

                    </div>


                </section>

            </main>
            <Footer />
        </>
    )
}