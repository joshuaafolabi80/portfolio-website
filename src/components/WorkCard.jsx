import React from 'react';

const WorkCard = ({ work }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <a 
        href={work.link || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div className="work-card shadow-sm">
          <div className="work-image-container">
            {/* WORK IMAGE - Using your provided URL as default */}
            <img 
              src={work.imageUrl || "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770654044/My_Photo_cbqbmz.jpg"} 
              alt={work.title || "My Work"}
              className="img-fluid"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770654044/My_Photo_cbqbmz.jpg";
              }}
            />
          </div>
          <div className="card-body p-4">
            <h5 className="card-title fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
              {work.title || "Project Title"}
            </h5>
            <p className="card-text text-muted">
              {work.description || "Project description goes here. Click to learn more."}
            </p>
            <div className="d-flex align-items-center">
              <span className="badge bg-primary me-2">{work.category || "Category"}</span>
              <small className="text-muted">{work.tech || "Technologies used"}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorkCard;