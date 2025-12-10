import React from "react";
import AboutCard from "./AboutCard.jsx";
import TechStack from "./TechStack.jsx";
import {Row ,Col} from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Row>
                <Col>
                    <p>A little info <span className="to-change-color">about me</span></p>
                    <br />
                    <AboutCard />
                </Col>
                <Col>
                    <p>This is my <span className="to-change-color">TechStack</span> !</p>
                    <br />
                    <TechStack />
                </Col>
            </Row>

        </div>
    );
}

export default About;