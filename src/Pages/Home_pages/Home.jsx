import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import myProfilepic from "../../assets/profilepic.jpg";

const Home = () => {
    const [currentText, setCurrentText] = useState(0);

    const phrases = [
        "Back-end Developer",
        "Front-end Developer",
        "Java Enthusiast",
        "Open Source Contributor"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % phrases.length);
        }, 2500); // rotate every 2.5s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-container">

            <Row className="the-row">
                <Col className="home-left">
                    <h1>Hi, I'm Madelyn</h1>
                    <h2 className="home-rotating">{phrases[currentText]}</h2>
                </Col>

                <Col className="home-right">
                    <img src={myProfilepic} alt="profilepic" style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',  /* Note the camelCase */
                        objectFit: 'cover'    /* Note the camelCase */
                    }}/>
                </Col>
            </Row>

            <div className="hero-section">
                <div className="hero-content">
                    <h2>Let me introduce myself</h2>
                    <p>
                        🎓 I'm an Information & Electronic Systems Engineering student <br/>
                        at the International Hellenic University, <br/>
                        passionate about Software Engineering, technology, and continuous learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
