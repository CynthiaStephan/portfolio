import Footer from "../components/Footer"
import Header from "../components/Header"
import "./ProjectPresentation.css"
import mockupMiam from "../assets/img/mockup/mockup-miam.jpg"
import menu from "../assets/img/miamapp/menu.jpg"
import addMenu from "../assets/img/miamapp/add-menu.jpg"
import mockup from "../assets/img/miamapp/miamapp-mockup.jpg"
import month from "../assets/img/miamapp/inscription-moi.jpg"
import invoice from "../assets/img/miamapp/facturation.jpg"
import ProjectFooter from "../components/ProjectFooter"

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
                    <div className="context case-study">
                        <h2>Contexte</h2>
                        <p>
                            <span className="bold-text upper">Projet : Refonte de MiamApp - Application de Gestion des Réservations de Cantine</span>
                        </p>
                        <p>
                            MiamApp a été conçu pour réduire le gaspillage alimentaire dans les cantines scolaires, en ligne avec les objectifs gouvernementaux d'améliorer la gestion des réservations de repas. L'application, lancée en novembre 2023, remplaçait le suivi manuel des réservations par une solution numérique. Cependant, des problèmes sont rapidement apparus, notamment des difficultés d'inscription, une interface peu intuitive et un manque de contrôle administratif. Le projet de refonte visait à améliorer l'expérience utilisateur en simplifiant les interactions et en centralisant les échanges entre élèves, administration et cuisine.
                        </p>
                    </div>

                    <div className="showcase-images">
                    
                        <img className="img-long" src={mockup} alt="Vues mobile de MiamApp" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Processus de Conception et de Réalisation</span>
                            </p>
                            <p>
                                La première phase de la refonte s'est concentrée sur l'amélioration de l'interface utilisateur. Après une analyse approfondie des retours des utilisateurs, il est apparu que la conception de l'application nécessitait une modernisation pour rendre la navigation plus fluide et intuitive. Le design a été repensé avec une interface épurée, tout en respectant la charte graphique de l'IMTS. Un nouveau logo a été créé pour renforcer l'identité visuelle de l'application, et la librairie Fluent 2 a été intégrée pour faciliter le développement tout en maintenant la cohérence graphique.
                            </p>
                            <p>
                                En parallèle, les fonctionnalités existantes ont été simplifiées. Le processus d'ajout d'ingrédients a été optimisé pour éviter les doublons et faciliter la saisie. Une nouvelle interface a été conçue pour le formulaire d'ajout d'ingrédients, rendant l'ajout d'éléments plus fluide et limitant les erreurs. Une interface a également été développée pour permettre à l'administration de gérer les réservations en temps réel, avec des outils d'analyse afin d'anticiper les besoins de la cantine.
                            </p>
                        </div>
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Structure et Fonctionnalités de l'Application</span>
                            </p>
                            <p>
                                L'application présente une interface simplifiée, avec une navigation plus fluide et intuitive. Les utilisateurs peuvent désormais accéder facilement à la gestion de leurs réservations, modifier leurs choix de repas et consulter les menus à venir. La page d'accueil affiche les repas disponibles pour la semaine avec un bouton de réservation rapide. La section "Mes Réservations" permet aux élèves de suivre et ajuster leurs choix de repas de manière simple. De son côté, la section "Gestion Administrative" offre une interface permettant aux gestionnaires de suivre et ajuster les réservations en temps réel, tout en ayant une vue d'ensemble des choix alimentaires. Enfin, l'interface d'ajout d'ingrédients a été entièrement repensée pour faciliter cette opération, tout en réduisant les risques de doublons.
                            </p>
                        </div>
                        <img src={menu} alt="Affichage des menus MiamApp" />
                        <img src={addMenu} alt="Ajouter des nouveaux menus" />
                        <img src={month} alt="Afficher le nombre d'inscripts" />
                        <img src={invoice} alt="Générer les factures" />
                        <div className="case-study">
                            <p>
                                <span className="bold-text upper">Bilan et Perspectives</span>
                            </p>
                            <p>
                                La refonte de MiamApp a permis de résoudre plusieurs des principaux problèmes rencontrés par les utilisateurs, tout en introduisant des fonctionnalités adaptées aux besoins des élèves et de l'administration. L'interface a été modernisée, et la gestion centralisée des réservations a grandement amélioré l'efficacité de l'application. Du point de vue technique, l'intégration de Fluent 2 a facilité le développement tout en assurant une cohérence visuelle. Ce projet a permis de travailler sur divers aspects, notamment le design, l'expérience utilisateur, le développement fonctionnel et la gestion agile du projet. 
                            </p>
                        </div>

                    </div>


                </section>

                <ProjectFooter currentProject={'/miamapp'}/>

            </main>
            <Footer />
        </>
    )
}