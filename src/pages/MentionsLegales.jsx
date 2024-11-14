import Footer from '../components/Footer'
import Header from '../components/Header'
import './MentionsLegales.css'
export default function MentionsLegales(){

    return(
        <>
        <Header />
        <main className="legal">
            <h1>Mentions légales</h1>

            <div>
                <h2>Informations</h2>
                <p>Le site <a href="https://cynthia.errhub404.fr/">https://cynthia.errhub404.fr/</a> est édité par : </p>
                <p><span className="bold-text">Nom</span>: Cynthia Stephan</p>
                <p><span className="bold-text">Email</span>: cynthiastephan@institutsolacroup.com</p>
            </div>

            <div>
                <h2>Hébergeur</h2>
                <p><span className="bold-text">Nom</span>: O2Switch</p>
                <p><span className="bold-text">Adresse</span>: 04 44 44 60 40</p>
                <p><span className="bold-text">Téléphone</span>: Chemin des Pardiaux
                63000 Clermont-Ferrand</p>
                <p><span className="bold-text">Siret</span>: 510 909 80700032</p>
            </div>

            <div>
                <h2>Propriété intellectuelle</h2>
                <p>Le contenu du site (textes, images, logos, etc.) est la propriété exclusive de Cynthia Stephan. <br /> Toute reproduction ou représentation totale ou partielle de ce site, sans autorisation expresse, est interdite.</p>
            </div>
            
        </main>
        <Footer />
        </>
    )
}