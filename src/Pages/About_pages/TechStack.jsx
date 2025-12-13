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
import SQL from "../../assets/TechIcons/mysql.svg";
import Postman from "../../assets/TechIcons/Postman.svg";
import AWS from "../../assets/TechIcons/AWS.svg";
import hibernate from "../../assets/TechIcons/hibernate.svg";

const TechStack = () => {
    return (
        <div>
            <Row className="techstack-row">
                <Col xs={4} md={2} className="tech-icons">
                    <img src={Javascript} alt="javascript" className="tech-icon-images"/>
                    <div className="tech-icons-text">Javascript</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={hibernate} alt="hibernate" className="tech-icon-images"/>
                    <div className="tech-icons-text">Hibernate</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={Spring} alt="spring" className="tech-icon-images"/>
                    <div className="tech-icons-text">Spring</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={Node} alt="node" className="tech-icon-images"/>
                    <div className="tech-icons-text">Node.Js</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={Git} alt="git" className="tech-icon-images"/>
                    <div className="tech-icons-text">Git</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={Docker} alt="docker" className="tech-icon-images"/>
                    <div className="tech-icons-text">Docker</div>
                </Col>
            </Row>

            <Row className="techstack-row">

                <Col xs={4} md={2} className="tech-icons">
                    <img src={SQL} alt="SQL" className="tech-icon-images"/>
                    <div className="tech-icons-text">MySQL</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={Java} alt="haskell" className="tech-icon-images"/>
                    <div className="tech-icons-text">Java</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={Postman} alt="Postman" className="tech-icon-images"/>
                    <div className="tech-icons-text">Postman</div>
                </Col>

                <Col xs={4} md={2} className="tech-icons">
                    <img src={AWS} alt="Postman" className="tech-icon-images" />
                    <div className="tech-icons-text">AWS</div>
                </Col>

            </Row>
        </div>

    );
}

export default TechStack;