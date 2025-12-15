import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard.jsx';
import ProjectModal from './Project_modal/ProjectModal';
import { Row, Col } from 'react-bootstrap';
import projectData from './projectData.js';
import './Portfolio.css';
import "../../Styles/Globals.css";

const Projects = () => {
    // State to track which project object is currently selected (or null if closed)
    const [selectedProject, setSelectedProject] = useState(null);

    // 🔘 FIX 4: Function to open the modal (This is the definition of onDetailsClick)
    const handleDetailsClick = (projectId) => {
        // Find the full project object using the ID
        const project = projectData.find(p => p.id === projectId);
        setSelectedProject(project);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="projects-section">

            <Row className="row">
                <h2 className="section-title">My Recent <span className="to-change-color">Work</span></h2>
                <Col>
                    <div className="projects-grid">
                        {projectData.map(project => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                                onDetailsClick={() => handleDetailsClick(project.id)}
                            />
                        ))}
                    </div>

                    {/* Conditional Modal Rendering */}
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={handleCloseModal}
                        />
                    )}
                </Col>

                <Col>
                    <div className="projects-grid">
                        {projectData.map(project => (
                            <ProjectCard
                                key={project.id}
                                // This passes id, title, description, imageUrl, etc.
                                {...project}

                                // 🟢 FIX 5: Passes the handler function down to the card
                                onDetailsClick={() => handleDetailsClick(project.id)}
                            />
                        ))}
                    </div>

                    {/* Conditional Modal Rendering */}
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={handleCloseModal}
                        />
                    )}
                </Col>
            </Row>



        </section>
    );
};

export default Projects;