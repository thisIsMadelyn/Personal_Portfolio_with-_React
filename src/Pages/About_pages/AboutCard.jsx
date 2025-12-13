import React from "react";
import "./AboutCard.css";
import Card from "react-bootstrap/Card";

const AboutCard = () => {

    return (
    <Card className="about-container">
        <p>
            Hi! I'm <span className="to-change-color">Madelyn</span>{" "}
            from <span className="to-change-color">Thessaloniki, Greece</span>.
            <br />
            <div style={{textIndent: "2rem"}}>
                I'm a dedicated student of <span className="to-change-color">
                Information and Electronic Systems Engineering
                </span> at the International Hellenic University.
            </div>
            <br />
            <div style={{textIndent: "2rem"}}>
                My technical focus centers on backend architecture using Spring Boot,
                where I love turning complex logic into efficient solutions.
            </div>
            <br />
        </p>
    </Card>);
}

export default AboutCard;