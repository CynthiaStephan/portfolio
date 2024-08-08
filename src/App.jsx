import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import MiamApp from './content/MiamApp'
import About from './pages/About'
    function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Homepage />} path="/" />
                    <Route element={<Projects />} path="/projets" />
                    <Route element={<MiamApp />} path='/projets/miamapp' />
                    <Route element={<About />} path='/apropos' />
                </Routes>
            </BrowserRouter>

        </>
    )
    }

    export default App