import React, { useState, useEffect } from "react";
import "./Home.css";
import { Row, Col } from "react-bootstrap";
import "../../Styles/Globals.css"
import linkedin from "../../assets/social/linkedin_2.svg";
import github from "../../assets/social/github_2.svg";

const Home = () => {
    const [currentText, setCurrentText] = useState(0);

    const phrases = [
        "a Back-end Developer",
        "a Front-end Developer",
        "a Java Enthusiast",
        "an Open Source Contributor"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % phrases.length);
        }, 2500); // rotate every 2.5s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-container">

            <div className="first-section">
                <h1>Hi, I'm <span className="to-change-color"> Madelyn</span> </h1>

                <h2 className="home-rotating">{phrases[currentText]}</h2>
            </div>


            <div className="hero-section">
                <div className="hero-content">
                    <p>
                        🎓 I'm an Information & Electronic Systems Engineering student <br/>
                        at the International Hellenic University, <br/>
                        passionate about Software Engineering, technology, and continuous learning.
                    </p>
                </div>
            </div>

            <div >
                <Row className="social">
                    <Col>
                        <a href="https://github.com/thisIsMadelyn"><img src={github} alt="Github Logo" className="social-icons"/></a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/madelyn2025"><img src={linkedin} alt="LinkedIn" className="social-icons"/></a>
                    </Col>
                </Row>


            </div>
        </section>
    );
};

export default Home;
