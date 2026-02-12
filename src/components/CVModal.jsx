import React from 'react';

const CVModal = ({ show, onHide }) => {
  if (!show) return null;

  // Your Google Drive CV link
  const cvViewUrl = "https://drive.google.com/file/d/1LFs1iVXTv20Le7sUZ89MbF-Y9W5vwjUp/view?usp=sharing";
  const cvDownloadUrl = "https://drive.google.com/uc?id=1LFs1iVXTv20Le7sUZ89MbF-Y9W5vwjUp&export=download";
  
  // Alternative: Use embed view if you want to show preview
  const cvEmbedUrl = "https://drive.google.com/file/d/1LFs1iVXTv20Le7sUZ89MbF-Y9W5vwjUp/preview";

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Gbenga Joshua Afolabi - CV</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onHide}
              aria-label="Close"
            ></button>
          </div>
          
          <div className="modal-body">
            {/* Option 1: Simple View with Preview Image (No iframe) */}
            <div className="text-center mb-4">
              <div className="cv-preview-container mb-4">
                <div className="border rounded p-4 bg-light">
                  <i className="fas fa-file-pdf fa-4x text-danger mb-3"></i>
                  <h5 className="mb-2">Gbenga Joshua Afolabi - Software Engineer</h5>
                  <p className="text-muted mb-0">Click the buttons below to view or download</p>
                </div>
              </div>
              
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <a 
                  href={cvViewUrl}
                  className="btn btn-custom btn-lg"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-eye me-2"></i>
                  View CV
                </a>
                
                <a 
                  href={cvDownloadUrl}
                  className="btn btn-success btn-lg"
                  target="_blank" 
                  rel="noopener noreferrer"
                  download="Gbenga_Afolabi_CV.pdf"
                >
                  <i className="fas fa-download me-2"></i>
                  Download CV
                </a>
              </div>
            </div>
            
            {/* Quick Info Section */}
            <div className="mt-4 pt-4 border-top">
              <h6 className="mb-3" style={{ color: 'var(--accent-orange)' }}>Quick Summary</h6>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-graduation-cap me-2 text-primary"></i>
                      B.Sc. Computer Science (University of Benin, 2023)
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-certificate me-2 text-primary"></i>
                      Data Science & Machine Learning (Data Genz Africa, 2023)
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-certificate me-2 text-primary"></i>
                      Software Development (3MTT Nigeria, 2025)
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-code me-2 text-primary"></i>
                      Full-Stack Software Engineer
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-mobile-alt me-2 text-primary"></i>
                      App & Game Developer
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-star me-2 text-primary"></i>
                      Excellence, Teamwork and Collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onHide}
            >
              <i className="fas fa-times me-2"></i>
              Close
            </button>
            
            <a 
              href={cvViewUrl}
              className="btn btn-outline-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt me-2"></i>
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;