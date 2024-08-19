import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import MiamApp from './content/MiamApp'
import About from './pages/About'
import EliseAmar from './content/EliseAmar'
import Dailyfy from './content/Dailyfy'
    function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Homepage />} path="/" />
                    <Route element={<Projects />} path="projets" />
                    <Route element={<About />} path='apropos' />


                    <Route element={<MiamApp />} path='projets/miamapp' />
                    <Route element={<EliseAmar />} path='projets/eliseamar' />
                    <Route element={<Dailyfy />} path='projets/dailyfy' />
                </Routes>
            </BrowserRouter>

        </>
    )
    }

    export default App