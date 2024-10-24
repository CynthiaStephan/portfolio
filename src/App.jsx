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
import AnimatedCursor from 'react-animated-cursor'
import MentionsLegales from './pages/mentionsLegales'

    function App() {
        const lenis = useLenis(({ scroll }) => {
            // called every scroll
          });

          const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

          
    return (
        <>
            <ReactLenis root>
            {!isTouchDevice && (
                <AnimatedCursor
                    color="239, 241, 240"
                    innerSize={6}
                    outerSize={42}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0.8}
                    innerStyle={{
                    backgroundColor: 'var(--cursor-color)',
                    }}
                    outerStyle={{
                    mixBlendMode: 'exclusion',
                    }}
                    trailingSpeed={8}
                    showSystemCursor={true}
                />
            )}
                <BrowserRouter>

                    <Routes>
                        <Route element={<Homepage />} path="/" />
                        <Route element={<Projects />} path="projets" />
                        <Route element={<About />} path='apropos' />
                        <Route element={<MentionsLegales />} path='legal' />


                        <Route element={<MiamApp />} path='projets/miamapp' />
                        <Route element={<EliseAmar />} path='projets/eliseamar' />
                        <Route element={<Dailyfy />} path='projets/dailyfy' />
                        <Route element={<Fgodf />} path='projets/fgodf' />
                        
                    </Routes>
                </BrowserRouter>
            </ReactLenis>

        </>
    )
    }

    export default App