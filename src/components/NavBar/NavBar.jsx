import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// const NavBar = () => (
//     <nav className="nav-bar">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/Favorites">Favorites</NavLink>
//         <NavLink to="/Recommendations">Recommendations</NavLink>
//         <button>Sign out</button>
//     </nav>
// );

export function NavBar() {
    let currentUser;
    return (
        <div style={{ padding: '20px', margin: '10px' }}>
            <ul>
                <li><a href="./pages/Home/Home.jsx">Home</a></li>
                <li><a href="./pages/Favorites.jsx">Favorites</a></li>
                <li><a href="./pages/Recommendations/Recommendations.jsx">Recommendations</a></li>
            </ul>

            <div className="navbar-menu">
                {currentUser ? (
                    <>
                        <Link to="/Favorites" className="navbar-item">Favorites</Link>
                        <Link to="/Recommendations" className="navbar-item">Recommendations</Link>
                        <button onClick={handleLogout} className="navbar-button">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="navbar-item">Login</Link>
                        <Link to="/register" className="navbar-item">Register</Link>
                    </>
                )}
            </div>
        </div>
    )
}