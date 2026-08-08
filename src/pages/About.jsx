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
                            Hello, moi c'est Cynthia.
                        </p>
                        <p>
                           Je suis développeuse FullStack et Product Designer, avec un intérêt particulier pour le front-end et la conception d'interfaces. J'aime autant réfléchir à la manière dont une interface fonctionne qu'à la façon dont elle est construite.
                        </p>
                        <p>
                            Mon intérêt pour le web a commencé par le design UI/UX. J'aimais déjà chercher pourquoi une interface fonctionne bien, pourquoi certaines interactions paraissent naturelles et comment rendre une expérience plus simple. Le développement m'a ensuite permis d'aller plus loin et de comprendre ce qui se passe derrière l'écran.
                        </p>
                        <p>
                            Aujourd'hui, j'aime avoir cette vision globale d'un projet. Imaginer une interface, réfléchir à son fonctionnement, la concevoir puis la développer. J'aime voir comment chaque partie s'articule pour donner vie au produit et offrir une expérience cohérente à l'utilisateur.
                        </p>
                        <p>Je continue à apprendre en réalisant des projets, en expérimentant de nouvelles technologies et en cherchant constamment à améliorer ma façon de concevoir et de développer.</p>

     

                    </section>
                </div>

            </section>

        </>
    )
}