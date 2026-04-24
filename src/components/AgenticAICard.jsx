import React from 'react';
import { Link } from 'react-router-dom';

const AgenticAICard = ({ project }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="agentic-card shadow-sm h-100" style={{ 
        borderRadius: '15px', 
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: 'white'
      }}>
        <div className="agentic-card-image-container" style={{ height: '220px', overflow: 'hidden' }}>
          <img 
            src={project.thumbnailUrl || "PLACEHOLDER_THUMBNAIL_URL_HERE"} 
            alt={project.title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            className="agentic-card-img"
          />
        </div>
        
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <span className="badge" style={{ 
              backgroundColor: 'var(--accent-purple)', 
              color: 'white',
              padding: '5px 12px'
            }}>
              {project.category || "Agentic AI"}
            </span>
            <small className="text-muted">{project.date || "2024"}</small>
          </div>
          
          <h5 className="card-title fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
            {project.title}
          </h5>
          
          <p className="card-text text-muted mb-4" style={{ lineHeight: '1.6' }}>
            {project.shortDescription || "Brief description of this Agentic AI project. Highlight the core functionality and AI capabilities."}
          </p>
          
          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.technologies && project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="badge bg-light text-dark" style={{ fontWeight: 'normal' }}>
                {tech}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/agentic-ai/${project.id}`} 
            className="btn w-100"
            style={{
              backgroundColor: 'var(--secondary-blue)',
              color: 'white',
              padding: '10px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--accent-orange)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--secondary-blue)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View More Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgenticAICard;