import "./Projects.css"
import mockupGuitar from "../assets/img/mockup-guitar.jpg"
import mockupCreme from "../assets/img/mockup-creme.jpg"

export default function Projects(){
    return(
        <>
            <section>
                <h1>Projets</h1>
                <p>Différents projets réalisées dans le cadre de ma formation</p>
            </section>

            <div>
                <button>Design</button>
                <button>Développement web</button>
            </div>

            <section className="projects-list">
                <article>
                    <img src={mockupCreme} alt="" />
                    <div>
                        <p>2023</p>
                        <h2>La Créme</h2>
                        <p>Figma</p>
                    </div>
                    <p className="project-category">Design</p>
                </article>
                <article>
                    <img src={mockupGuitar} alt="" />
                    <div>
                        <p>2024</p>
                        <h2>GuitarShop</h2>
                        <p>WordPress</p>
                    </div>
                    <p className="project-category">Design</p>
                </article>
            </section>
        </>
    )
}