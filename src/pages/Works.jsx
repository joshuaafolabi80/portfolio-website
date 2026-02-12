import React from 'react';
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
      imageUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770825440/game_dev_v5ax50.png"
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
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      {/* Project Statistics */}
      <div className="row mt-5 pt-5">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm border-0" style={{ backgroundColor: 'var(--light-bg)' }}>
            <div className="card-body">
              <h4 className="text-center mb-4" style={{ color: 'var(--accent-purple)' }}>Project Highlights</h4>
              <div className="row text-center">
                <div className="col-6 col-md-3 mb-4">
                  <div className="p-3">
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>4+</h3>
                    <p className="mb-0 text-muted">Projects</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4">
                  <div className="p-3">
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>3</h3>
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
                    <h3 className="mb-1" style={{ color: 'var(--accent-orange)' }}>Full</h3>
                    <p className="mb-0 text-muted">Full-Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used */}
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
          <a 
            href="/contact" 
            className="btn btn-custom btn-lg"
          >
            <i className="fas fa-paper-plane me-2"></i>
            Contact Me
          </a>
        </div>
        <p className="text-muted mt-4">
          Click on any project card to explore live demos.
        </p>
      </div>
    </div>
  );
};

export default Works;