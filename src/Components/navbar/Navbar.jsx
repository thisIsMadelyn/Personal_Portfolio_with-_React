import React from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">My Portfolio</h2>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
