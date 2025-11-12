import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import {Timer} from "./components/timer.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {Favorites} from "./pages/Favorites/Favorites.jsx";
import {Recommendations} from "./pages/Recommendations/Recommendations.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Router>
            <div className="app">

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Favorites" element={<Favorites />} />
                        <Route path="/Recommendations" element={<Recommendations />} />
                    </Routes>
                </main>
            </div>
        </Router>
        <Home />
        <Favorites />
        <Recommendations />
    </>
  )
}

export default App
