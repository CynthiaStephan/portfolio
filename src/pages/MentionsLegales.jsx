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
                    <h2>Éditeur du site</h2>
                    <p><span className="bold-text">Nom / Prénom</span> : Cynthia Stephan</p>
                    <p><span className="bold-text">Email</span> : pro.cynthia.stephan@gmail.com</p>
                    <p><span className="bold-text">Directeur de la publication</span> : Cynthia Stephan</p>
                </div>

                <div>
                    <h2>Hébergement</h2>
                    <p><span className="bold-text">Nom</span> : GitHub, Inc.</p>
                    <p><span className="bold-text">Adresse</span> : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</p>
                    <p><span className="bold-text">Téléphone</span> : +1 877 448 4820</p>
                    <p><span className="bold-text">Numéro d'immatriculation (USA)</span> : 3488095 (État du Delaware)</p>
                    <p><span className="bold-text">Site web</span> : <a href="https://github.com" target="_blank" rel="noopener noreferrer">https://github.com</a></p>
                </div>

                <div>
                    <h2>Données personnelles et Cookies</h2>
                    <p>Le site <a href="https://cynthiastephan.github.io/porfolio/">https://cynthiastephan.github.io/porfolio/</a>  ne propose aucun formulaire de contact, aucun espace personnel et n'utilise aucun cookie ou traceur destiné à suivre les visiteurs ou à mesurer leur audience.</p>
                </div>

                <div>
                    <h2>Propriété intellectuelle</h2>
                    <p>
                        Les textes, créations graphiques, designs et réalisations présentés sur ce site sont protégés par les dispositions relatives à la propriété intellectuelle. Sauf mention contraire, ils sont la propriété de Cynthia Stephan.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification ou utilisation, totale ou partielle, des contenus de ce site sans autorisationpréalable est interdite, sous réserve des exceptions prévues par la loi.
                    </p>
                </div>
            </main>

        <Footer />
        </>
    )
}