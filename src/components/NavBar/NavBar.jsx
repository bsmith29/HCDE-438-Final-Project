import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <nav className="NavBar">
        <Link to="/">Home</Link>
        <p></p>
        <Link to="/Favorites">Favorites</Link>
        <Link to="/Recommendations">Recommendations</Link>
    </nav>
);

export default NavBar;

