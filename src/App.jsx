// import { useState } from 'react'
import './App.css'
import {Home} from "./pages/Home/Home.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Routes, Route} from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Recommendations" element={<Recommendations />} />
            </Routes>
        </div>
    </>
  )
}

export default App;
