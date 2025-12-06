import React from "react";
import "./FooterStyle.css"

const Footer = () => {

    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:your@email.com">Email</a></li>
            </ul>
        </footer>
    );
}

export default Footer;