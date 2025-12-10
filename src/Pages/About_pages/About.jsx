import React from "react";
import "./AboutCard.css";
import computer from "../../assets/computer.svg"
import AboutCard from "./AboutCard.jsx";
import TechStack from "./TechStack.jsx";
import {Row ,Col} from "react-bootstrap";

const About = () => {
    return (
        <div className="about-section">
            <Row className="rows-and-columns">
                <Col>
                    <div className="small-info">
                        <p>A little info <span className="to-change-color"> about me</span> </p>

                    </div>
                    <AboutCard />
                </Col>
                <Col className="svg-col">
                    <img src={computer} alt="computer svg" className="picture"/>
                </Col>
            </Row>

            <div className="techstack">
                    <div className="small-info">
                        <p>This is my <span className="to-change-color">TechStack</span> !</p>
                    </div>
                    <br />
                    <TechStack />
                </div>

        </div>
    );
}

export default About;