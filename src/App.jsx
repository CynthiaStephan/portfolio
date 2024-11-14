import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import MiamApp from './content/MiamApp'
import About from './pages/About'
import EliseAmar from './content/EliseAmar'
import Dailyfy from './content/Dailyfy'
import Fgodf from './content/Fgodf'
import MentionsLegales from './pages/mentionsLegales'
import NotFound from './pages/NotFound'
import useSmoothScroll from './assets/UseSmothScroll'

function App() {

    useSmoothScroll()

    return (
        <>
            
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
                    <Route element={<Projects />} path="projets" />
                    <Route element={<About />} path='apropos' />
                    <Route element={<MentionsLegales />} path='legal' />
                    <Route element={<NotFound />} path='*' />


                    <Route element={<MiamApp />} path='/miamapp' />
                    <Route element={<EliseAmar />} path='/eliseamar' />
                    <Route element={<Dailyfy />} path='/dailyfy' />
                    <Route element={<Fgodf />} path='/fgodf' />
                    
                </Routes>
            </BrowserRouter>

        </>
    )
}

    export default App;