import "../pages/About.css"
import Photo from "../assets/img/photo-cynthia.jpg"

export default function About(){

    return(
        <>
            <section className="about" id="about">
                <section className="about-hero">
                    <h2>A propos</h2>
                    <p><span className="bold-text">Du pixel au backend :</span><br/> concevoir au-delà de l'interface</p>

                </section>
                <div className="frame">

                    <div className="photo-container">
                        <img src={Photo} alt="Portrait de Cynthia Stephan" />
                    </div>
                    
                    <section className="about-text">
                        <p>
                            Hello ! Moi c'est Cynthia, et mon parcours vers le développement web est né de ma double passion pour l'art et la technologie. J'ai d'abord été captivée par le design UI/UX - cette satisfaction quand une interface est parfaitement intuitive, ce sentiment que tout est à sa place. C'est ça qui m'a donné envie d'aller plus loin que les maquettes, de comprendre comment tout fonctionnait en coulisses.
                        </p>
                        <p>
                            Après avoir exploré le développement front-end, je suis actuellement en formation pour devenir développeuse fullstack. J'apprécie particulièrement cette polyvalence : pouvoir à la fois travailler sur l'expérience utilisateur et plonger dans l'architecture d'une API. Chaque aspect du développement apporte sa propre satisfaction.
                        </p>
                        <p>
                            Ce qui me motive vraiment ? Voir un projet prendre vie étape par étape. Ma veille constante des nouvelles tendances tech me permet d'imaginer et de construire des applications toujours plus pertinentes. Chaque nouveauté est une opportunité d'améliorer l'expérience utilisateur.
                        </p>
     

                    </section>
                </div>

            </section>

        </>
    )
}