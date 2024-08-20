import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockupMiam from "../assets/img/mockup/mockup-miam.jpg"
import menu from "../assets/img/miamapp/menu.jpg"
import addMenu from "../assets/img/miamapp/add-menu.jpg"
import mockup from "../assets/img/miamapp/miamapp-mockup.jpg"
import month from "../assets/img/miamapp/inscription-moi.jpg"
import invoice from "../assets/img/miamapp/facturation.jpg"

export default function MiamApp(){

    return(
        <>
            <Header />
            <main className="single-project miamapp">
                <section className="project-presentation-hero">
                    <h1>MiamApp</h1>

                    <div className="project-info">          
                        <img className="project-mockup" src={mockupMiam} alt="mockup du projet MiamApp" />
                        
                        <div className="project-info-detail">
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
                            
                            <div className="project-link one-link">
                                <a href="https://www.figma.com/design/REWBkvdLH7BU7TZnU8PCcr/Miamapp---Interface-user-Edit?node-id=2037-3511&t=9gRsdnXwZkOXlnZo-1" target="blank">Voir la maquette ↗</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-presentation">
                    <div className="context">
                        <h2>Contexte</h2>
                        <p>
                            <span className="bold-text">Projet : Refonte de MiamApp - Application de Gestion des Réservations de Cantine</span>
                        </p>
                        <p>
                            MiamApp a été développé pour répondre à la nécessité de réduire le gaspillage alimentaire dans les cantines, conformément aux directives gouvernementales. Initialement lancé en novembre 2023, l'outil visait à remplacer le suivi papier des réservations par une solution numérique adaptée aux besoins spécifiques de l'IMTS.
                        </p>
                        <p>
                            <span className="bold-text">Objectifs de la refonte :</span> <br />
                            Améliorer l'expérience utilisateur et résoudre les problèmes identifiés, tels que les difficultés d'inscription, le manque de contrôle administratif, et les interfaces peu lisibles. <br /> La version 2 a été conçue pour centraliser les interactions entre élèves, administration et cuisine.
                        </p>
                        <p>
                            <span className="bold-text">Actions et Solutions :</span> <br />
                            UX/UI Design : Réalisation d'une interface moderne et épurée en utilisant la Charte graphique de l'IMTS et création d'un nouveau logo. La librairie Fluent 2 a été intégrée pour accélérer le développement et assurer une cohérence visuelle. <br />
                            Améliorations fonctionnelles : Révision du processus d'ajout d'ingrédients pour éviter les doublons, avec une nouvelle interface de saisie et une fonctionnalité d'ajout améliorée.
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img className="img-long" src={mockup} alt="" />
                        <img src={menu} alt="" />
                        <img src={addMenu} alt="" />
                        <img src={month} alt="" />
                        <img src={invoice} alt="" />

                    </div>


                </section>

            </main>
            <Footer />
        </>
    )
}