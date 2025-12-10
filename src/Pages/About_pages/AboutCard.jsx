import React from "react";
import "./AboutCard.css";
import Card from "react-bootstrap/Card";
import { LuArrowBigRightDash } from "react-icons/lu";

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
            <div style={{textIndent: "2rem"}}>
                Beyond software development, I am a firm believer in maintaining
                a sharp mind and body.
                <br />
                When I'm not coding I love:
            </div>

        </p>

        <ul className="about-list">
            <li><LuArrowBigRightDash /> Skiing</li>
            <li><LuArrowBigRightDash /> Reading books</li>
            <li><LuArrowBigRightDash /> Going to the gym</li>
            <li><LuArrowBigRightDash /> Watching movies</li>
        </ul>
    </Card>);
}

export default AboutCard;