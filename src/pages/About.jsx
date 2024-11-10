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
                    <p>Développeuse front-end passionnée par la fusion de la technologie et du design.</p>

                </section>
                <div className="frame">

                    <div className="photo-container">
                        <img src={Photo} alt="Portrait de Cynthia Stephan" />
                    </div>
                    
                    <section className="about-text">
                        <p>
                            Passionnée par l'informatique et le design depuis mon enfance, j'ai choisi de me spécialiser dans le développement web et le design UI/UX pour allier créativité et technicité. En tant que développeuse web front-end et designer UI/UX, je m'efforce de créer des expériences utilisateur harmonieuses et engageantes. 
                            Au fil de mon parcours, j'ai eu la chance de participer à divers projets qui m'ont permis de développer à la fois mes compétences en design et en développement front-end. Ces expériences m'ont confrontée à des défis techniques et créatifs, enrichissant ainsi mon approche et ma compréhension de la création d'interfaces utilisateur et d'optimisation de l'expérience utilisateur.
                        </p>
                        <p>
                            Mon approche du design est avant tout pragmatique et centrée sur l'utilisateur. Je m'efforce de rendre chaque parcours utilisateur aussi fluide et accessible que possible. J'accorde une grande importance à la veille technologique et au design, consacrant plusieurs heures par semaine à me tenir informée des dernières tendances pour toujours proposer des solutions à la pointe de la technologie.
                        </p>
                        <p>
                            J'adopte une approche méthodique en utilisant le Design Thinking pour analyser et résoudre les problèmes. J'apprécie particulièrement l'étape de la veille concurrentielle et l'analyse approfondie des besoins utilisateurs. Mon objectif est de travailler en étroite collaboration avec les utilisateurs pour comprendre leurs besoins et y répondre de manière innovante et efficace.
                        </p>

                    </section>
                </div>

            </main>
            
            <Footer />
        </>
    )
}