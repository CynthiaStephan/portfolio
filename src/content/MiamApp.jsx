import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockupMiam from "../assets/img/mockup-miamapp.jpg"
import vueOne from "../assets/img/menu-1.jpg"
import vueTwo from "../assets/img/menu-2.jpg"
import vueTree from "../assets/img/add-menu.jpg"

export default function MiamApp(){

    return(
        <>
            <Header />
            <main className="single-project">
                <section className="project-presentation-hero">
                    <h1>MiamApp</h1>
                    <img src={mockupMiam} alt="" />

                    <ul>
                        <li>
                            <p>Année :</p>
                            <p>2024</p>
                        </li>
                        <li>
                            <p>Client : </p>
                            <p>IMTS</p>
                        </li>
                        <li>
                            <p>Service :</p>
                            <p>Maquette & Application</p>
                        </li>
                        <li>
                            <p>Secteur :</p>
                            <p>Restauration collective</p>
                        </li>
                    </ul>
                </section>

                <section className="project-presentation">
                    <div className="context">
                        <h2>Contexte</h2>
                        <p>Refonte de MiamApp, une application de gestion des réservations de la cantine de l'IMTS, initialement développée par un élève. <br /> 
                        L'application vise à responsabiliser les élèves et à faciliter le travail du secrétariat. <br /> 
                        Cette refonte améliore l'expérience utilisateur et la robustesse de l'application.</p>          
                    </div>

                    <div className="part-1">
                        <img src={vueOne} alt="" />
                        <img src={vueTwo} alt="" />
                        <img src={vueTree} alt="" />
                    </div>


                </section>

            </main>
            <Footer />
        </>
    )
}