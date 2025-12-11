import React from "react";
import { Col, Row } from "react-bootstrap";
import "./TechStack.css";

// For techStack Icons

import Javascript from "../../assets/TechIcons/Javascript.svg";
import Node from "../../assets/TechIcons/Node.svg";
import Spring from "../../assets/TechIcons/Spring.svg";
import Java from "../../assets/TechIcons/Java.svg";
import Git from "../../assets/TechIcons/Git.svg";
import Docker from "../../assets/TechIcons/Docker.svg";
import SQL from "../../assets/TechIcons/SQL.svg";
import Postman from "../../assets/TechIcons/Postman.svg";
import AWS from "../../assets/TechIcons/AWS.svg";

const TechStack = () => {
    return (
        <Row className="techstack-row">
            <Col xs={4} md={2} className="tech-icons">
                <img src={Javascript} alt="javascript" />
                <div className="tech-icons-text">Javascript</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Spring} alt="spring" />
                <div className="tech-icons-text">Spring</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Node} alt="node" />
                <div className="tech-icons-text">Node.Js</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Git} alt="git" />
                <div className="tech-icons-text">Git</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Docker} alt="docker" />
                <div className="tech-icons-text">Docker</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} alt="SQL" />
                <div className="tech-icons-text">Postgresql</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Java} alt="haskell" />
                <div className="tech-icons-text">Java</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Postman} alt="Postman" />
                <div className="tech-icons-text">Postman</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AWS} alt="Postman" className="tech-icon-images" />
                <div className="tech-icons-text">AWS</div>
            </Col>

        </Row>
    );
}

export default TechStack;