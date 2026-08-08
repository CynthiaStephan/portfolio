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
                    <h1>Cynthia<br /> Stephan</h1>
                    <div>
                        <h3 className="profession">Développeuse FullStack &<br /> Product Designer à Dinan</h3>
                        <p className="school">Making pixels behave & <br /> code misbehave</p>
                    </div>
                </section>

                <section className="home-presentation">
                    <p>
                        Je conçois et développe des interfaces web en combinant design, expérience utilisateur et développement.
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
