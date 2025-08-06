import "../pages/About.css"
import Photo from "../assets/img/photo-cynthia.jpg"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export default function About(){

    const mm = gsap.matchMedia();
    const container = useRef(null);
    const firstitem = useRef(null)
    const seconditem = useRef(null)

    useLayoutEffect(() => {
        const context = gsap.context (() => {
            // parallax only on desktop 
            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },           
                })
    
                tl.to(firstitem.current, {duration: 3, ease: "0.65, 0, 0.35, 1", y: 70}, 0);
                tl.to(seconditem.current, {duration: 3, ease: "0.65, 0, 0.35, 1", y: -70}, 0);

            })
        })

        return () => context.revert()
    }, [mm])

    return(
        <>
            <section className="about" id="about">
                <section className="about-hero">
                    <h2>A propos</h2>
                    <p><span className="bold-text">Du pixel au serveur :</span><br/> concevoir au-delà de l'interface</p>

                </section>
                <div ref={container} className="frame">

                    <div ref={firstitem} className="photo-container">
                        <img src={Photo} alt="Portrait de Cynthia Stephan" />
                    </div>
                    
                    <section ref={seconditem} className="about-text">
                        <p>
                            Hello ! Moi c'est Cynthia. Mon parcours vers le développement web s'est construit autour de mon attrait pour l'art et la technologie. C'est ce qui m'a d'abord menée vers le design UI/UX. J'adore cette sensation quand une interface “fait sens” tout de suite, quand tout semble fluide et intuitif. C'est ce qui m'a donné envie d'aller plus loin, de comprendre l'envers du décor et les mécanismes techniques derrière l'écrans.
                        </p>
                        <p>
                            Curieuse d'aller au-delà du front-end, j'ai suivi une formation back-end à l'IMTS de Dinard. Cette double compétence me permet d'avoir une vision globale des projets : concevoir des interfaces agréables à utiliser, tout en construisant l'architecture technique qui les fait fonctionner. J'aime cette complémentarité entre le visible et l'invisible, entre l'expérience utilisateur et la logique du code.
                        </p>
                        <p>
                            Ce qui me motive ? Voir un projet prendre vie, étape par étape. Je suis toujours curieuse des nouvelles technologies : parce que chaque avancée est une occasion d'innover, d'affiner mes compétences et d'offrir des expériences utilisateurs plus fluides, plus pertinentes.
                        </p>
     

                    </section>
                </div>

            </section>

        </>
    )
}