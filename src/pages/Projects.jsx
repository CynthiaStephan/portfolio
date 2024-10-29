import "./Projects.css"
import mockupMiam from "../assets/img/mockup/mockup-miam.jpg";
import mockupElise from "../assets/img/mockup/mockup-elise.jpg"
import mockupDailyfy from "../assets/img/mockup/mockup-dailyfy.jpg"
import mockupFgodf from "../assets/img/mockup/mockup-fgodf.jpg"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Projects(){
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        import('../../flowmap.js').then((module) => {
            module.applyFlowmapEffect(); 
        }).catch((err) => console.error("Erreur lors de l'import du module Flowmap :", err));
    }, []);
      


    return(
        <>
            <Header />
            <main className="projects-page">
                <section className="projects-hero">
                    <h1>Projets</h1>
                    <p>Différents projets réalisées dans le cadre de ma formation</p>
                </section>

                {/* <section className="projects-filter">
                    <button>Design</button>
                    <button>Développement web</button>
                </section> */}
                <section className="projects-list">

                    <article className="design dev item-1">
                        <Link to="dailyfy" onClick={handleLinkClick}>
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupDailyfy} alt="" />
                            </div>

                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h2>Dailyfy</h2>
                                    <p className="project-tool">Javascript, Php, css, Figma</p>
                                </div>
                                <p className="project-category">Design, Developpement</p>
                            </div>
                        </Link>
                    </article>

                    <article className="design item-2">
                        <Link to="miamapp" onClick={handleLinkClick}>
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupMiam} alt="Mockup du projet MiamApp" />
                            </div>

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
                    
                    <article className="design dev item-1">
                        <Link to="eliseamar" onClick={handleLinkClick}>
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupElise} alt="Mockup du projet Elise Amar" />
                            </div>

                            <div className="project-text">
                                <div className="project-info">
                                    <p>2023</p>
                                    <h2>Elise Amar</h2>
                                    <p className="project-tool">Figma, HTML, CSS</p>
                                </div>
                                <p className="project-category">Design, Developpement</p>
                            </div>
                        </Link>
                    </article>

                    <article className="design item-2">
                        <Link to="fgodf" onClick={handleLinkClick}>
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupFgodf} alt="Mockup du projet Fondation Grand Orient de France" />
                            </div>
                            
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2023</p>
                                    <h2>Fondation grand orient de france</h2>
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