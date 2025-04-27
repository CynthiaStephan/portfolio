import "./Projects.css" // css
import mockupMiam from "../assets/img/mockup/mockup-miam.jpg";
import mockupElise from "../assets/img/mockup/mockup-elise.jpg"
import mockupDailyfy from "../assets/img/mockup/mockup-dailyfy.jpg"
import mockupFgodf from "../assets/img/mockup/mockup-fgodf.jpg"
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Projects(){

    const container = useRef(null);
    const firstimg = useRef(null);
    const secondimg = useRef(null);
    const thirdimg = useRef(null);
    const fourthimg = useRef(null);
    const mm = gsap.matchMedia();

    // Import the flowmap effect
    useEffect(() => {
        import('../../flowmap.js').then((module) => {
            module.applyFlowmapEffect(); 
        }).catch((err) => console.error("Erreur lors de l'import du module Flowmap :", err));
    }, []);
      
    // uselayoutEffect to run the code before the DOM (avoid bugs)
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
    
                tl.to(firstimg.current, {duration: 3, ease: "0.65, 0, 0.35, 1", y: 70}, 0);
                tl.to(secondimg.current, {duration: 3, ease: "0.65, 0, 0.35, 1", y: -70}, 0);
                tl.to(thirdimg.current, {duration: 3, ease: "0.65, 0, 0.35, 1", y: 70}, 0);
                tl.to(fourthimg.current, {duration: 3, ease: "0.65, 0, 0.35, 1", y: -70}, 0);

            })
        })

        return () => context.revert()
    }, [mm])

    return(
        <>
            <section className="projects-page" id="project">

                <section className="projects-hero">
                    <h2>Projets</h2>
                    <p className="balance">Différents projets réalisées dans le cadre de ma formation</p>
                </section>

                <section ref={container} className="projects-list">

                    <article ref={firstimg} className="design dev item-1">
                        <a href="dailyfy">
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupDailyfy} alt="" />
                            </div>

                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h3>Dailyfy</h3>
                                    <p className="project-tool">Javascript, Php, css, Figma</p>
                                </div>
                                <p className="project-category">Design, Developpement</p>
                            </div>
                        </a>
                    </article>

                    <article ref={secondimg} className="design item-2">
                        <a href="miamapp">
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupMiam} alt="Mockup du projet MiamApp" />
                            </div>

                            <div className="project-text">
                                <div className="project-info">
                                    <p>2024</p>
                                    <h3>MiamApp</h3>
                                    <p className="project-tool">Figma</p>
                                </div>
                                <p className="project-category">Design</p>
                            </div>
                        </a>
                    </article>
                    
                    <article ref={thirdimg} className="design dev item-1">
                        <a href="eliseamar">
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupElise} alt="Mockup du projet Elise Amar" />
                            </div>

                            <div className="project-text">
                                <div className="project-info">
                                    <p>2023</p>
                                    <h3>Elise Amar</h3>
                                    <p className="project-tool">Figma, HTML, CSS</p>
                                </div>
                                <p className="project-category">Design, Developpement</p>
                            </div>
                        </a>
                    </article>

                    <article ref={fourthimg} className="design item-2">
                        <a href="fgodf">
                            <div className="project-image-frame flowmap-img">
                                <img className="project-image" src={mockupFgodf} alt="Mockup du projet Fondation Grand Orient de France" />
                            </div>
                            
                            <div className="project-text">
                                <div className="project-info">
                                    <p>2023</p>
                                    <h3>Fondation grand orient de france</h3>
                                    <p className="project-tool">Figma</p>
                                </div>
                                <p className="project-category">Design</p>
                            </div>
                        </a>
                    </article>

                </section>
            </section>

        </>
    )
}