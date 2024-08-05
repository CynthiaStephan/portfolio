import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
    function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Homepage />
                <Footer />
                <Routes>
                    
                </Routes>
            </BrowserRouter>

        </>
    )
    }

    export default App