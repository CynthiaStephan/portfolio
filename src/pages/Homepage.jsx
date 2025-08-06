import { useEffect } from 'react';
import gsap from 'gsap';
import '../pages/Homepage.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


import Projects from './Projects';
import About from './About';

export default function Homepage() {

    return (
        <>
            <Header />
            <main id='top' className="homepage">
                <section className="home-hero">
                    <h1>Cynthia Stephan</h1>
                    <div>
                        <h3 className="profession">Développeuse FullStack &<br /> Designer UI/UX à Dinan</h3>
                        <p className="school">Diplômé à l'IMTS</p>
                    </div>
                </section>

                <section className="home-presentation">
                    <p>
                        Mon parcours vers le développement web s'est construit autour de ma double passion pour l'art et la technologie. 
                    </p>
                </section>

                <Projects />
                
                <About />
                
                {/* <section className="contact-frame">
                    <h2>Contactez-moi</h2>
                </section> */}

            </main>

            <Footer />
        </>
    );
}
