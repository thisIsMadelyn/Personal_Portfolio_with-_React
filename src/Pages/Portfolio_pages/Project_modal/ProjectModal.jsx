import React from 'react';
import './ProjectModal.css';
import detailedCaseStudies from '../Project_modal/DetailedCaseStudies.js'; // ⬅️ IMPORT the custom text

// Helper component for the Tech Badges (assuming you have this)
const TechBadge = ({ techName }) => (
    <span className="tech-badge">{techName}</span>
);

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    // 🔎 Look up the detailed text using the project ID
    const details = detailedCaseStudies[project.id] || {}; // Use empty object if not found

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <h2 className="modal-title">{project.title}</h2>

                {/* DATA FROM projectsData.js (basic info) */}
                <div className="tech-stack-modal-list">
                    {project.techStack.map((tech, index) => (
                        <TechBadge key={index} techName={tech} />
                    ))}
                </div>

                {/* ---------------------------------------------------- */}
                {/* DETAILED CONTENT (FROM projectDetails.js) */}
                {/* ---------------------------------------------------- */}

                {/* 2. THE CHALLENGE */}
                <h3>🚀 The Core Challenge</h3>
                <p>{details.challenge}</p> {/* ⬅️ Dynamic Text */}

                {/* 3. TECHNICAL SOLUTION (Assuming solution is always present) */}
                <h3>🛠️ My Implementation & Solutions</h3>
                <p>{details.solution}</p> {/* ⬅️ Dynamic Text */}

                {/* 4. RESULTS AND LESSONS LEARNED */}
                <h3>📈 Results & Future Scope</h3>
                <ul>
                    {details.results && details.results.map((result, index) => (
                        <li key={index}>{result}</li> /* ⬅️ Map over array of results */
                    ))}
                </ul>

                {/* ---------------------------------------------------- */}
                {/* 🔗 NEW: ACTION BUTTONS SECTION */}
                {/* ---------------------------------------------------- */}
                <div className="modal-actions-footer">

                    {/* 1. View Code Button (Checks if the link exists) */}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-github"
                        >
                            View Code on GitHub
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
