import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../pages/Homepage.css';
import arrowProject from '../assets/img/arrow-right-up.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";

import mockupElise from "../assets/img/mockup/mockup-elise.jpg";
import mockupMiam from "../assets/img/mockup/mockup-miam.jpg";
import mockupDailyfy from "../assets/img/mockup/mockup-dailyfy.jpg";

export default function Homepage() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const items = document.querySelectorAll(".home-projects li");
        
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

    return (
        <>
            <Header />
            <main className="homepage">
                <section className="home-hero">
                    <h1>Cynthia Stephan</h1>
                    <div>
                        <h3 className="profession">Designer UI/UX & <br /> Développeuse Frontend à Dinan</h3>
                        <p className="school">En formation à l’IMTS</p>
                    </div>
                </section>

                <section className="home-presentation">
                    <p>
                        Actuellement en formation de développeuse web à l'IMTS, je suis à la recherche d'une <span className="bold-text">alternance</span> en tant que <span className="bold-text">développeuse backend</span> à partir de septembre 2024.
                    </p>
                    <p>
                        Après des études en design numérique et en gestion de projet, je souhaite explorer de nouvelles opportunités dans le développement web.
                    </p>
                </section>

                <section className="home-projects">
                    <h2>Projets</h2>
                    <div>
                        <ul>
                            <li>
                                <Link to="projets/eliseamar" onClick={handleLinkClick}>
                                    <div className="project-info">
                                        <p className="project-category">Développement Web / UX|UI Design</p>
                                        <h3 className="project-name">Elise Amar</h3>
                                        <p className="project-date">2023</p>
                                    </div>
                                    <img className="project-arrow" src={arrowProject} alt="ouvrir détail du projet" />
                                </Link>
                                <div className="hover-img">
                                    <img className="img-fluid" src={mockupElise} alt="Mockup du projet Elise Amar" />
                                </div>
                            </li>

                            <li>
                                <Link to="projets/miamapp" onClick={handleLinkClick}>
                                    <div className="project-info">
                                        <p className="project-category">UX|UI Design</p>
                                        <h3 className="project-name">MiamApp</h3>
                                        <p className="project-date">2024</p>
                                    </div>
                                    <img className="project-arrow" src={arrowProject} alt="ouvrir détail du projet" />
                                </Link>
                                <div className="hover-img">
                                    <img className="img-fluid" src={mockupMiam} alt="Mockup du projet MiamApp" />
                                </div>
                            </li>

                            <li>
                                <Link to="projets/dailyfy" onClick={handleLinkClick}>
                                    <div className="project-info">
                                        <p className="project-category">Développement Web / UX|UI Design</p>
                                        <h3 className="project-name">Dailyfy</h3>
                                        <p className="project-date">2024</p>
                                    </div>
                                    <img className="project-arrow" src={arrowProject} alt="ouvrir détail du projet" />
                                </Link>
                                <div className="hover-img">
                                    <img className="img-fluid" src={mockupDailyfy} alt="Mockup du projet Dailyfy" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="home-more-projects">
                        <Link to="/projets">Plus de projets →</Link>
                    </div>
                </section>

                <section className="contact-frame">
                    <h2>Me contacter</h2>
                    <a href="mailto:cynthia.stephan@institutsolacroup.com">Cynthia.stephan@institutsolacroup.com</a>
                </section>
            </main>

            <Footer />
        </>
    );
}
