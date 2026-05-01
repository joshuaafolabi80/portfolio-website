import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import WorkCard from '../components/WorkCard';

const Works = () => {
  // Your actual work projects
  const works = [
    {
      id: 1,
      title: "Academic Learning Platform",
      description: "A comprehensive academic app for schools with interactive learning modules. Currently features Primary 1 curriculum with plans to expand to other levels.",
      category: "Web Application",
      tech: "React, Bootstrap, Netlify",
      imageUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770825439/Supportive-Apps-for-Learning_devztp.jpg",
      link: "https://spectacular-begonia-a0be97.netlify.app/"
    },
    {
      id: 2,
      title: "Conclave Academy Travel Platform",
      description: "Full-featured travel, hotel, and tourism application with separate admin and user interfaces. Includes booking system and management dashboard.",
      category: "Full Stack Web App",
      tech: "React, Node.js, MongoDB, Express",
      imageUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770825439/travel_and_hotel_App_qfgri9.jpg",
      link: "https://the-conclave-academy.netlify.app/"
    },
    {
      id: 3,
      title: "Movie Recommendation Platform",
      description: "Capstone project - A full-featured movie discovery platform with personalized recommendations, watchlists, ratings, and reviews.",
      category: "Full Stack Project",
      tech: "React, Express.js, MongoDB, TMDB API",
      imageUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770825440/movie_recommendation_qlueh4.jpg",
      link: "https://github.com/joshuaafolabi80/movie_recommendation_app"
    },
    {
      id: 4,
      title: "Game Development Portfolio",
      description: "Currently developing my first published game using Unity. Focused on creating engaging gameplay mechanics and polished user experience.",
      category: "Game Development",
      tech: "Unity, C#, Blender",
      imageUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770825440/game_dev_v5ax50.png",
      link: "#" // No live link yet
    },
    {
      id: 5,
      title: "Intelligent Lead Management Automation",
      description: "An autonomous SDR pipeline that ingests, enriches, scores, and routes leads in real-time using Make.com and API integrations. Watch the full walkthrough in my Agentic AI showcase.",
      category: "Agentic Automation",
      tech: "Make.com, Clearbit API, Google Apps Script",
      imageUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039619/FULL_SCENARIO_kdrdxm.png",
      link: "/agentic-ai", // Navigates to your Agentic AI gallery page
      isInternalLink: true // Custom flag to handle internal navigation
    }
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="mb-3" style={{ color: 'var(--primary-blue)' }}>My Portfolio</h1>
        <p className="lead">Showcasing my recent projects and technical accomplishments</p>
      </div>

      {/* Projects Grid */}
      <div className="row">
        {works.map((work) => (
          work.isInternalLink ? (
            // Render as internal Link for the Agentic AI card
            <div className="col-md-6 col-lg-3 mb-4" key={work.id}>
              <Link to={work.link} className="text-decoration-none">
                <div className="work-card shadow-sm h-100">
                  <div className="work-image-container">
                    <img 
                      src={work.imageUrl} 
                      alt={work.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
                      {work.title}
                    </h5>
                    <p className="card-text text-muted mb-3">
                      {work.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="badge" style={{ backgroundColor: 'var(--accent-purple)', color: 'white' }}>
                        {work.category}
                      </span>
                      <small className="text-muted">{work.tech}</small>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="btn btn-sm btn-outline-primary">
                        View AI Automation Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            // Use existing WorkCard component for other projects
            <WorkCard key={work.id} work={work} />
          )
        ))}
      </div>

      {/* Project Statistics - Update the count to 5+ */}
      <div className="row mt-5 pt-5">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm border-0" style={{ backgroundColor: 'var(--light-bg)' }}>
            <div className="card-body">
              <h4 className="text-center mb-4" style={{ color: 'var(--accent-purple)' }}>Project Highlights</h4>
              <div className="row text-center">
                <div className="col-6 col-md-3 mb-4">
                  <div className="p-3">
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>5+</h3> {/* Updated from 4+ to 5+ */}
                    <p className="mb-0 text-muted">Projects</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4">
                  <div className="p-3">
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>4</h3> {/* Updated from 3 to 4 */}
                    <p className="mb-0 text-muted">Web Apps</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4">
                  <div className="p-3">
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>1</h3>
                    <p className="mb-0 text-muted">Game Project</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4">
                  <div className="p-3">
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>1</h3> {/* New stat for AI/Automation */}
                    <p className="mb-0 text-muted">AI Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used - Add Make.com and related tools */}
      <div className="row mt-5">
        <div className="col-lg-10 mx-auto">
          <h4 className="text-center mb-4" style={{ color: 'var(--primary-blue)' }}>Technologies I Work With</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <span className="badge bg-primary p-3">React</span>
            <span className="badge bg-primary p-3">Node.js</span>
            <span className="badge bg-primary p-3">MongoDB</span>
            <span className="badge bg-primary p-3">Express</span>
            <span className="badge bg-primary p-3">Bootstrap</span>
            <span className="badge bg-primary p-3">JavaScript</span>
            <span className="badge bg-primary p-3">HTML/CSS</span>
            <span className="badge bg-primary p-3">Git</span>
            <span className="badge bg-primary p-3">Unity</span>
            <span className="badge bg-primary p-3">C#</span>
            <span className="badge bg-primary p-3">Python</span>
            <span className="badge bg-primary p-3">Netlify</span>
            <span className="badge bg-primary p-3">Make.com</span> {/* New */}
            <span className="badge bg-primary p-3">Clearbit API</span> {/* New */}
            <span className="badge bg-primary p-3">Google Apps Script</span> {/* New */}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5 pt-4">
        <p className="lead mb-4">
          Interested in my work? Let's collaborate on your next project!
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <a 
            href="https://github.com/joshuaafolabi80" 
            className="btn btn-dark btn-lg"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github me-2"></i>
            View My GitHub
          </a>
          <Link to="/contact" className="btn btn-custom btn-lg"> {/* Changed from <a> to <Link> */}
            <i className="fas fa-paper-plane me-2"></i>
            Contact Me
          </Link>
        </div>
        <p className="text-muted mt-4">
          Click on any project card to explore live demos or case studies.
        </p>
      </div>
    </div>
  );
};

export default Works;