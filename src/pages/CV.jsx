import React, { useState } from 'react';
import CVModal from '../components/CVModal';

const CV = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Update with your actual CV image URL
  const cvImageUrl = "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770654044/My_Photo_cbqbmz.jpg";

  const skills = [
    { 
      category: "Frontend Development", 
      items: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"] 
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "Firebase"] 
    },
    { 
      category: "Mobile & Game Development", 
      items: ["React Native", "Unity", "C#", "Game Physics", "Mobile UI/UX"] 
    },
    { 
      category: "Data Science & Tools", 
      items: ["Python", "Pandas", "NumPy", "Machine Learning", "Git", "VS Code", "Figma", "Postman", "Cloudinary"] 
    }
  ];

  const education = [
    {
      title: "B.Sc. Computer Science",
      institution: "University of Benin",
      period: "2016 - 2023",
      description: "Second Class Lower Division. Specialized in software engineering principles, algorithms and data structures."
    },
    {
      title: "Data Science & Machine Learning",
      institution: "Data Genz Africa",
      period: "2022 - 2023",
      description: "Specialized training in data analysis, machine learning algorithms and predictive modeling."
    },
    {
      title: "Software Development Fellow",
      institution: "3MTT Nigeria",
      period: "2025",
      description: "Intensive software development program focusing on modern web technologies and best practices."
    }
  ];

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "RG Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Developed full-stack web applications using React and Node.js. Contributed to mobile app development and collaborated on game development projects. Implemented responsive designs and optimized application performance."
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2022 - present",
      description: "Built custom websites and web applications for clients. Developed mobile applications and game prototypes. Provided technical consultation and project management services."
    }
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="mb-4 text-center" style={{ color: 'var(--primary-blue)' }}>Curriculum Vitae</h1>
          
          {/* CV Image Container */}
          <div 
            className="cv-container text-center mb-5"
            onClick={() => setShowModal(true)}
          >
            <div className="portrait-container mx-auto mb-3">
              <img 
                src={cvImageUrl} 
                alt="Gbenga Joshua Afolabi - CV Preview" 
                className="img-fluid"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x400/2c3e50/ffffff?text=CV+Preview";
                }}
              />
            </div>
            <p className="text-muted">
              <i className="fas fa-hand-pointer me-2"></i>
              Click the image above to view full CV
            </p>
          </div>

          {/* Quick Overview */}
          <div className="card shadow-sm mb-4 border-0" style={{ backgroundColor: 'var(--light-bg)' }}>
            <div className="card-body text-center">
              <h4 className="mb-3" style={{ color: 'var(--accent-purple)' }}>Gbenga Joshua Afolabi</h4>
              <p className="mb-2">
                <i className="fas fa-briefcase me-2"></i>
                Full-Stack Software Engineer | App & Game Developer
              </p>
              <p className="mb-0">
                <i className="fas fa-map-marker-alt me-2"></i>
                Based in Nigeria | Available for Remote & On-site Opportunities
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{ color: 'var(--accent-orange)' }}>
                <i className="fas fa-tools me-2"></i>
                Technical Skills
              </h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="mb-4">
                  <h5 className="mb-3" style={{ color: 'var(--secondary-blue)' }}>
                    {skillGroup.category}
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="badge mb-2 p-2"
                        style={{ 
                          backgroundColor: 'var(--secondary-blue)',
                          color: 'white',
                          fontSize: '0.9rem'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{ color: 'var(--accent-purple)' }}>
                <i className="fas fa-graduation-cap me-2"></i>
                Education & Certifications
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 pb-4 border-bottom">
                  <h5 className="mb-1">{edu.title}</h5>
                  <h6 className="text-muted mb-2">
                    <i className="fas fa-university me-2"></i>
                    {edu.institution}
                  </h6>
                  <span className="badge bg-primary mb-2">{edu.period}</span>
                  <p className="mb-0">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{ color: 'var(--primary-blue)' }}>
                <i className="fas fa-briefcase me-2"></i>
                Professional Experience
              </h3>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4 pb-4 border-bottom">
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                      <h5 className="mb-1">{exp.title}</h5>
                      <h6 className="text-muted mb-2">
                        <i className="fas fa-building me-2"></i>
                        {exp.company}
                      </h6>
                    </div>
                    <span className="badge bg-success">{exp.period}</span>
                  </div>
                  <p className="mb-0">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="text-center mt-4">
            <button 
              className="btn btn-custom btn-lg me-3"
              onClick={() => setShowModal(true)}
            >
              <i className="fas fa-eye me-2"></i>
              View Full CV
            </button>
            
            <a 
              href="https://drive.google.com/uc?id=1LFs1iVXTv20Le7sUZ89MbF-Y9W5vwjUp&export=download"
              className="btn btn-success btn-lg"
              target="_blank" 
              rel="noopener noreferrer"
              download="Gbenga_Joshua_Afolabi_CV.pdf"
            >
              <i className="fas fa-download me-2"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      <CVModal 
        show={showModal} 
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default CV;