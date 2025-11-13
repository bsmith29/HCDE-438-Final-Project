// import { useState } from 'react'
import './App.css'
import {Home} from "./pages/Home/Home.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Routes, Route} from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Recommendations" element={<Recommendations />} />
            </Routes>
        </div>
    </>
  )
}

export default App;
