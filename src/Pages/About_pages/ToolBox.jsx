import React from "react";
import { Row,Col } from "react-bootstrap";
import "./TechStack.css";

//  For toolbox Icons
import intellij from "../../assets/ToolBox/intellij.svg";
import webstorm from "../../assets/ToolBox/webstorm.svg";
import vscode from "../../assets/ToolBox/vscode.svg";
import eclipse from "../../assets/ToolBox/eclipse.svg";

const ToolBox = () => {
    return (
        <Row className="techstack-row">
            <Col xs={4} md={2} className="tech-icons">
                <img src={intellij} alt="javascript" className="tech-icon-images"/>
                <div className="tech-icons-text">IntelliJ IDEA</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={webstorm} alt="javascript" className="tech-icon-images"/>
                <div className="tech-icons-text">WebStorm</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={vscode} alt="javascript" className="tech-icon-images"/>
                <div className="tech-icons-text">VSCode</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={eclipse} alt="javascript" className="tech-icon-images"/>
                <div className="tech-icons-text">Eclipse</div>
            </Col>
        </Row>
    );
}
export default ToolBox;