import mockupElise from "../assets/img/mockup/mockup-elise.jpg";
import mockupMiam from "../assets/img/mockup/mockup-miam.jpg";
import mockupDailyfy from "../assets/img/mockup/mockup-dailyfy.jpg";
import mockupFgodf from "../assets/img/mockup/mockup-fgodf.jpg"
import arrowProject from '../assets/img/arrow-right-up.svg';
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useEffect } from "react";
import './ProjectFooter.css'

// eslint-disable-next-line react/prop-types
export default function ProjectFooter({ currentProject }){
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    // Effect au survol
    useEffect(() => {
        const items = document.querySelectorAll("section.home-projects li");
        
        items.forEach((el) => {
            const image = el.querySelector(".hover-img");
            const innerImage = el.querySelector(".hover-img img");
            
            gsap.set(image, { xPercent: -50, yPercent: -50 });
            const pos = { x: window.innerWidth / 2 };
            const mouse = { x: pos.x };
            const speed = 0.1;
            const xSet = gsap.quickSetter(image, "x", "px");

            const handleMouseMove = (e) => {
                mouse.x = e.clientX;
            };

            window.addEventListener("mousemove", handleMouseMove);

            gsap.ticker.add(() => {
                const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
                pos.x += (mouse.x - pos.x) * dt;
                xSet(pos.x);
            });

            let oldx = 0;
            let lastCursorX = null;
            const cursorThreshold = 150;

            const mouseMoveHandler = (e) => {
                const currentX = e.clientX;

                if (currentX < oldx && (lastCursorX === null || currentX <= (lastCursorX - cursorThreshold))) {
                    gsap.to(innerImage, { rotation: -7, duration: 0.5 });
                    lastCursorX = currentX;
                } else if (currentX > oldx && (lastCursorX === null || currentX >= (lastCursorX + cursorThreshold))) {
                    gsap.to(innerImage, { rotation: 7, duration: 0.5 });
                    lastCursorX = currentX;
                }

                oldx = currentX;
            };

            const resetImageTransform = () => {
                gsap.to(innerImage, { x: 0, rotation: 0, duration: 0.5 });
            };

            el.addEventListener("mousemove", mouseMoveHandler);
            el.addEventListener("mouseleave", resetImageTransform);

            let mouseMoveTimeout;

            const debouncedMouseMoveEnd = () => {
                if (mouseMoveTimeout) {
                    clearTimeout(mouseMoveTimeout);
                }
                mouseMoveTimeout = setTimeout(() => {
                    resetImageTransform();
                }, 100);
            };

            document.addEventListener("mousemove", debouncedMouseMoveEnd);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                el.removeEventListener("mousemove", mouseMoveHandler);
                el.removeEventListener("mouseleave", resetImageTransform);
                document.removeEventListener("mousemove", debouncedMouseMoveEnd);
                gsap.ticker.remove(() => {});
            };
        });
    }, []);

    const projects = [
        { name: "Dailyfy", link: "/dailyfy", category: "Développement Web / UX|UI Design", date: "2024", image: mockupDailyfy },
        { name: "MiamApp", link: "/miamapp", category: "UX|UI Design", date: "2024", image: mockupMiam },
        { name: "Elise Amar", link: "/eliseamar", category: "Développement Web / UX|UI Design", date: "2023", image: mockupElise },
        { name: "Fondation Grand Orient de France", link: "/fgodf", category: "UX Design", date: "2023", image: mockupFgodf },
    ];
    

    return (
        <>
        <section className="home-projects">
                    <h2>Plus de projets</h2>
                    <div>
                        <ul>
                        {projects
                        .filter((project) => project.link !== currentProject)
                        .map((project) => (
                            <li key={project.name}>
                                <Link to={project.link} onClick={handleLinkClick}>
                                    <div className="project-info">
                                        <p className="project-category">{project.category}</p>
                                        <h3 className="project-name">{project.name}</h3>
                                        <p className="project-date">{project.date}</p>
                                    </div>
                                    <img className="project-arrow" src={arrowProject} alt="ouvrir détail du projet" />
                                </Link>
                                <div className="hover-img">
                                    <img className="img-fluid" src={project.image} alt={`Mockup du projet ${project.name}`} />
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </section>
        </>
    )
}