import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import MiamApp from './content/MiamApp'
import About from './pages/About'
import EliseAmar from './content/EliseAmar'
import Dailyfy from './content/Dailyfy'
import Fgodf from './content/Fgodf'
import { ReactLenis, useLenis } from 'lenis/react'
import MentionsLegales from './pages/mentionsLegales'

    function App() {
         const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })


          
    return (

        <ReactLenis
            root
            options={{
            autoRaf: true,
            smoothTouch: true,
            direction: "vertical", // Spécifie le sens du défilement
            gestureDirection: "vertical", // Précise le geste pour le défilement tactile
            }}
        >
            
            <div className='background-columns'>
                <div className='column'></div>
                <div className='column'></div>
                <div className='column'></div>
                <div className='column'></div>
                <div className='column '></div>
                <div className='column desktop'></div>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route element={<Homepage />} path="/" />
                    <Route element={<Projects />} path="/projets" />
                    <Route element={<About />} path='/apropos' />
                    <Route element={<MentionsLegales />} path='/legal' />


                    <Route element={<MiamApp />} path='/projets/miamapp' />
                    <Route element={<EliseAmar />} path='/projets/eliseamar' />
                    <Route element={<Dailyfy />} path='/projets/dailyfy' />
                    <Route element={<Fgodf />} path='/projets/fgodf' />
                    
                </Routes>
            </BrowserRouter>

        </ReactLenis>


    )
    }

    export default App