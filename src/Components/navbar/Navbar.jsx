import React from "react";
import { Link } from "react-router-dom";
import  "./NavStyle.css";

const Navbar = () => {

    const navStyle ={
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1a1a1a",
        padding: "1rem 2rem",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    }

    const ulStyle ={
        display: "flex",    // <-- makes li horizontal
        listStyle: "none",
        margin: 0,
        padding: 0,
        gap: "2rem",
    }

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "1rem",
    };

    return (
        <nav style={navStyle}>
            <h2 style={{margin: 0}}>My Portfolio</h2>

                <ul style={ulStyle}>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About</Link></li>
                    <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
                    <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                </ul>
        </nav>
    );
};

export default Navbar;