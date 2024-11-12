import Footer from "../components/Footer";
import Header from "../components/Header";
import "../pages/About.css"
import Photo from "../assets/img/photo-cynthia.jpg"

export default function About(){

    return(
        <>
            <Header />

            <main className="about">
                <section className="about-hero">
                    <h1>A propos</h1>
                    <p>Développeuse Fullstack & Designer</p>

                </section>
                <div className="frame">

                    <div className="photo-container">
                        <img src={Photo} alt="Portrait de Cynthia Stephan" />
                    </div>
                    
                    <section className="about-text">
                        <p>
                            Curieuse et passionnée par les technologies web, j'ai choisi la voie du développement fullstack pour explorer toutes les dimensions de la création digitale. Mon parcours en développement web est né de l'envie d'allier mon goût pour le design et ma passion pour la logique du code, afin de créer des expériences utilisateur à la fois esthétiques et performantes.
                        </p>
                        <p>
                            Spécialisée dans les technologies front et back, j'aspire à concevoir des applications qui répondent aux besoins des utilisateurs tout en étant techniquement robustes. J'accorde une attention particulière à l'interface utilisateur, au parcours de navigation, et à la structure backend qui donne vie à chaque fonctionnalité. Le fullstack me permet de maîtriser l'ensemble de ces aspects pour offrir une expérience fluide et optimisée.
                        </p>
                        <p>
                            En veille constante sur les tendances technologiques et les méthodes de design, je cherche toujours à enrichir mon approche et à améliorer mes compétences pour créer des solutions modernes, performantes et accessibles. Je vois chaque projet comme une opportunité de croissance et d'apprentissage, et je suis motivée par le défi de faire évoluer mes compétences pour répondre aux attentes des utilisateurs.
                        </p>
     

                    </section>
                </div>

            </main>
            
            <Footer />
        </>
    )
}