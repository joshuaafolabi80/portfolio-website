import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <h1 className="hero-title display-4 fw-bold mb-4">
              Hi, I'm <span className="accent-name">Gbenga Joshua Afolabi</span>
            </h1>
            <h2 className="hero-subtitle h3 mb-4">
              Software Engineer | App & Game Developer
            </h2>
            
            <div className="hero-description mb-4">
              <p className="hero-paragraph">
                I'm a dedicated software engineer with a B.Sc. in Computer Science from the University of Benin (2023). My technical expertise is fortified by specialized certifications in Data Science & Machine Learning from Data Genz Africa (2023) and Software Development from Nigeria's 3MTT program (2025).
              </p>
              
              <p className="hero-paragraph">
                I specialize in full-stack software engineering, with additional proficiency in mobile app and game development. What sets me apart is my commitment to excellence through meticulous attention to detail—ensuring every project achieves superior performance and exceeds expectations.
              </p>
              
              <p className="hero-paragraph">
                I thrive on collaboration and smart work, believing that the best results emerge from synergistic teamwork. Whether working independently or within a team, I deliver high-quality solutions within specified timelines, driven by a simple philosophy: Client satisfaction is my ultimate reward.
              </p>
              
              <p className="hero-paragraph">
                My passion for technology is matched only by my dedication to continuous learning and innovative problem-solving. Let's build something exceptional together.
              </p>
            </div>
            
            <div className="hero-buttons d-flex flex-wrap gap-3 mb-4">
              <a 
                href="/contact" 
                className="btn btn-custom btn-lg"
              >
                Get In Touch
              </a>
              <a 
                href="/works" 
                className="btn btn-outline-primary btn-lg"
              >
                View My Work
              </a>
            </div>
          </div>
          
          <div className="col-lg-6 hero-image text-center mt-5 mt-lg-0">
            <div className="portrait-container">
              <img 
                src="https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770654044/My_Photo_cbqbmz.jpg" 
                alt="Gbenga Joshua Afolabi - Software Engineer" 
                className="portrait-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;