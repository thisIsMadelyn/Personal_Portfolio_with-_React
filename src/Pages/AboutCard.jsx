import React from "react";
import Card from "react-bootstrap/Card";
import { LuArrowBigRightDash } from "react-icons/lu";

const AboutCard = () => {

    return (
    <Card>
        <p>
            Hi! I'm <span className="to-change-color">Madelyn</span>{" "}
            from <span className="to-change-color">Thessaloniki, Greece</span>.
            <br />
            I'm currently studying <span className="to-change-color">
            Information and Electronic Systems Engineering
        </span> at the International Hellenic University.
            <br />
            <br />
            When I'm not coding I love:
        </p>

        <ul>
            <li><LuArrowBigRightDash /> Skiing</li>
            <li><LuArrowBigRightDash /> Reading Books</li>
            <li><LuArrowBigRightDash /> Going to the Gym</li>
        </ul>
    </Card>);
}

export default AboutCard;