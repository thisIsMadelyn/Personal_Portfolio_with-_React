import React from 'react';
import './ProjectCard.css';

// Helper component for Tech Badges (improves readability)
const TechBadge = ({ techName }) => (
    <span className="tech-badge">{techName}</span>
);

const ProjectCard = ({
                         id,
                         title,
                         description,
                         imageUrl, // This receives the image URL string
                         techStack,
                         onDetailsClick
                     }) => {
    return (
        <div className="project-card">

            {/* 🖼️ Image Display Area */}
            <div className="project-image-container">
                <img
                    src={imageUrl}
                    alt={`Screenshot of ${title}`}
                    className="project-image"
                />
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>

                {/* Description is often trimmed on the card for brevity */}
                <p className="project-description">
                    {description.substring(0, 100)}...
                </p>

                {/* Tech Stack Badges */}
                <div className="tech-stack-list">
                    {techStack.map((tech, index) => (
                        <TechBadge key={index} techName={tech} />
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="card-actions">
                    {/* Button to open the modal, passing the project's unique ID */}
                    <button
                        onClick={() => onDetailsClick(id)}
                        className="btn btn-primary" >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;