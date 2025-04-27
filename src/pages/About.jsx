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
                    <p><span className="bold-text">Du pixel au backend :</span><br/> concevoir au-delà de l'interface</p>

                </section>
                <div ref={container} className="frame">

                    <div ref={firstitem} className="photo-container">
                        <img src={Photo} alt="Portrait de Cynthia Stephan" />
                    </div>
                    
                    <section ref={seconditem} className="about-text">
                        <p>
                            Hello ! Moi c'est Cynthia. Mon parcours vers le développement web s'est construit autour de mon attrait pour l'art et la technologie. J'ai d'abord été captivée par le design UI/UX, j'adore cette sensation quand une interface est parfaitement intuitive, quand tout semble naturellement à sa place. C'est ce qui m'a poussée à explorer l'envers du décor, à comprendre les rouages techniques derrière les maquettes.
                        </p>
                        <p>
                            Après m'être investie dans le développement front-end, je suis actuellement en formation Back-End à l'IMTS de Dinard pour évoluer vers le fullstack. Cette double compétence me permet d'avoir une vision globale des projets : créer des interfaces agréables tout en concevant l'architecture technique qui les soutient. Je trouve une vraie satisfaction à maîtriser ces deux aspects complémentaires.
                        </p>
                        <p>
                            Ce qui me motive au quotidien ? Voir un projet prendre forme étape par étape. Je reste à l'affût des évolutions technologiques pour enrichir mes compétences et créer des produits pertinentes. Pour moi, chaque nouveauté technique est une chance d'améliorer concrètement l'expérience des utilisateurs.
                        </p>
     

                    </section>
                </div>

            </section>

        </>
    )
}