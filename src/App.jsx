import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Footer from './components/Footer'
    function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Homepage />} path="/" />
                    <Route element={<Projects />} path="/projets" />
                </Routes>
            </BrowserRouter>

        </>
    )
    }

    export default App