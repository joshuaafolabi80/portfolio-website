import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AgenticAIDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const projectDetails = {
    // ACTIVE PROJECT - Intelligent Lead Management & Enrichment System
    1: {
      title: "Intelligent Lead Management Automation",
      fullDescription: `
        An enterprise-grade, agentic automation pipeline designed to eliminate manual lead qualification. 
        The system autonomously ingests, categorizes, and enriches incoming leads in real-time, drastically reducing the time between a prospect’s initial contact and the sales team's outreach.
        
        Key features include:
        • Real-time Lead Routing: Intelligent categorization into "Corporate" vs "Personal" leads.
        • Automated Data Enrichment: Instant API integration to pull company firmographics for corporate leads.
        • Algorithmic Scoring Engine: Automated lead prioritization based on budget, industry, and intent.
        • Multi-Channel Notification: Context-aware alerts sent to Sales and Marketing teams with direct access to database records.
        • System Transparency: Built-in immutable audit trail for full process visibility and compliance.
        
        This agentic workflow functions as a 24/7 autonomous Sales Development Representative (SDR), 
        ensuring zero-latency processing of high-value business opportunities.
      `,
      technologies: ["Make.com (Integromat)", "Google Sheets API", "Clearbit API", "Google Apps Script", "Gmail API", "JSON Data Handling"],
      githubLink: "https://github.com/joshuaafolabi80/lead-management-automation",
      liveLink: "#", // Add your video walkthrough link here
      images: [
        "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039619/FULL_SCENARIO_kdrdxm.png",
        "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039644/SCORING_LOGIC_usvuj0.png",
        "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039660/MASTER_DATABASE_khgfs2.png",
        "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039681/AUDIT_LOG_md0qgt.png",
        "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039693/EMAIL_ALERT_zuntn9.png"
      ],
      challenge: "Manual lead qualification was creating a significant bottleneck, leading to high response latency and missed business opportunities for the sales team.",
      solution: "Developed an autonomous pipeline that replaces manual research and manual categorization with automated enrichment, logic-based scoring, and real-time team notifications.",
      impact: "Reduced lead qualification turnaround from hours of manual research to a sub-second, fully automated process, while ensuring 100% data auditability."
    }
  };

  const project = projectDetails[id] || projectDetails[1];

  return (
    <div className="container py-5 mt-5">
      {/* Back Button */}
      <Link to="/agentic-ai" className="btn btn-outline-primary mb-4">
        ← Back to All Projects
      </Link>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* Title Section */}
          <h1 className="mb-3" style={{ color: 'var(--primary-blue)' }}>{project.title}</h1>
          <div className="d-flex gap-3 mb-4 flex-wrap">
            <span className="badge" style={{ backgroundColor: 'var(--accent-purple)', padding: '8px 16px' }}>
              Agentic Automation
            </span>
            <span className="badge bg-secondary" style={{ padding: '8px 16px' }}>
              Sales Operations Engine
            </span>
          </div>

          {/* Image Gallery */}
          <div className="mb-5">
            <div className="main-image mb-3">
              <img 
                src={project.images[selectedImage]} 
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                className="img-fluid rounded shadow-sm"
                style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x500/2c3e50/ffffff?text=Project+Visuals+Loading";
                }}
              />
            </div>
            <div className="thumbnail-gallery d-flex gap-2 flex-wrap">
              {project.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setSelectedImage(idx)}
                  className="rounded"
                  style={{
                    width: '80px',
                    height: '60px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: selectedImage === idx ? `3px solid var(--accent-orange)` : '1px solid #ddd',
                    opacity: selectedImage === idx ? 1 : 0.6
                  }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80x60/2c3e50/ffffff?text=Img";
                  }}
                />
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-body p-4">
              <h3 className="mb-3" style={{ color: 'var(--accent-orange)' }}>Project Overview</h3>
              <p className="lead" style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-body p-4">
              <h3 className="mb-3" style={{ color: 'var(--accent-orange)' }}>Tech Stack & Integrations</h3>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="badge" style={{ 
                    backgroundColor: 'var(--secondary-blue)', 
                    color: 'white',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-3" style={{ color: 'var(--accent-purple)' }}>
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Challenge
                  </h4>
                  <p>{project.challenge}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-3" style={{ color: 'var(--accent-purple)' }}>
                    <i className="fas fa-lightbulb me-2"></i>
                    Solution
                  </h4>
                  <p>{project.solution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="card shadow-sm mb-4 border-0" style={{ backgroundColor: 'var(--light-bg)' }}>
            <div className="card-body p-4">
              <h3 className="mb-3" style={{ color: 'var(--accent-orange)' }}>
                <i className="fas fa-chart-line me-2"></i>
                Business Impact
              </h3>
              <p className="mb-0">{project.impact}</p>
            </div>
          </div>

          {/* Links */}
          <div className="d-flex gap-3 mb-5 justify-content-center">
            <a href={project.githubLink} className="btn btn-dark btn-lg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github me-2"></i> View System Logic
            </a>
            <a href={project.liveLink} className="btn btn-custom btn-lg" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-play-circle me-2"></i> Watch Demo Walkthrough
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticAIDetail;