import "./Projects.css"
import mockupGuitar from "../assets/img/mockup-guitar.jpg"
import mockupCreme from "../assets/img/mockup-creme.jpg"
import mockupMiam from "../assets/img/mockup-miamapp.jpg"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Projects(){
    return(
        <>
            <Header />
            <main className="projects-page">
                <section className="projects-hero">
                    <h1>Projets</h1>
                    <p>Différents projets réalisées dans le cadre de ma formation</p>
                </section>

                <section className="projects-filter">
                    <button>Design</button>
                    <button>Développement web</button>
                </section>

                <section className="projects-list">
                    <article className="design item-1">
                        <Link to="#">
                            <img className="project-image" src={mockupCreme} alt="" />
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2023</p>
                                    <h2>La Créme</h2>
                                    <p className="project-tool">Figma</p>
                                </div>
                                <p className="project-category">Design</p>
                            </div>
                        </Link>
                    </article>

                    <article className="dev item-2">
                        <Link to="#">
                            <img className="project-image" src={mockupGuitar} alt="" />
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h2>GuitarShop</h2>
                                    <p className="project-tool">WordPress</p>
                                </div>
                                <p className="project-category">Intégration web</p>
                            </div>
                        </Link>
                    </article>

                    <article className="design item-1">
                        <Link to="/projets/miamapp">
                            <img className="project-image" src={mockupMiam} alt="" />
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h2>MiamApp</h2>
                                    <p className="project-tool">Figma</p>
                                </div>
                                <p className="project-category">Design</p>
                            </div>
                        </Link>
                    </article>

                    <article className="design item-2">
                        <Link to="/projets/miamapp">
                            <img className="project-image" src={mockupMiam} alt="" />
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h2>MiamApp</h2>
                                    <p className="project-tool">Figma</p>
                                </div>
                                <p className="project-category">Design</p>
                            </div>
                        </Link>
                    </article>

                    <article className="design item-1">
                        <Link to="/projets/miamapp">
                            <img className="project-image" src={mockupMiam} alt="" />
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h2>MiamApp</h2>
                                    <p className="project-tool">Figma</p>
                                </div>
                                <p className="project-category">Design</p>
                            </div>
                        </Link>
                    </article>

                </section>
            </main>

            <Footer />
        </>
    )
}