import React from "react";
import "./AboutCard.css";
import "./About.css"
import AboutCard from "./AboutCard.jsx";
import TechStack from "./TechStack.jsx";
import {Row ,Col} from "react-bootstrap";
import ToolBox from "./ToolBox.jsx";

const About = () => {
    return (
        <div className="about-section">
            <Row className="rows-and-columns">
                <Col>
                    <div className="about-me-intro">
                        <p>A little info <span className="to-change-color"> about me</span> </p>

                    </div>
                    <AboutCard />
                </Col>
            </Row>

            <div className="techstack">
                <div className="small-info">
                    <p>This is my <span className="to-change-color">TechStack</span> !</p>
                    <br />
                </div>
                <br />
                <TechStack />
            </div>
            <br />
            <br />
            <div className="tollbox">
                <div className="small-info">
                    <p> and those are my favourite <span className="to-change-color"> tools</span> !</p>
                </div>
                <br />
                <ToolBox />
            </div>

        </div>
    );
}

export default About;