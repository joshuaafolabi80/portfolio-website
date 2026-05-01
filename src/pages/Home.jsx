import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4" style={{ color: 'var(--accent-purple)' }}>About Me</h2>
              <p className="lead">
                I'm a passionate Software Engineer with a unique blend of academic excellence and 
                practical expertise. With a Computer Science degree from the University of Benin and 
                specialized certifications in Data Science and Software Development, I bridge the gap 
                between theoretical knowledge and real-world application.
                
                <br /><br />
                
                What drives me is the pursuit of <strong>excellence in every line of code</strong>. 
                I believe that superior performance comes from meticulous attention to detail, 
                whether I'm developing full-stack applications, mobile apps or engaging games. 
                My approach combines smart work with collaborative synergy—because the best solutions 
                emerge when diverse minds work together.
                
                <br /><br />
                
                I thrive on challenges that push technological boundaries and take pride in 
                delivering exceptional results within stipulated timelines. For me, success isn't 
                just about building software—it's about creating solutions that make a meaningful 
                impact and leaving every client not just satisfied, but genuinely delighted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="text-center mb-5" style={{ color: 'var(--primary-blue)' }}>
                Core Competencies
              </h3>
              
              <div className="row text-center">
                <div className="col-md-3 mb-4">
                  <div className="p-4 rounded shadow-sm bg-white h-100">
                    <i className="fas fa-laptop-code fa-2x mb-3" style={{ color: 'var(--secondary-blue)' }}></i>
                    <h5>Full-Stack Development</h5>
                    <p className="small text-muted mb-0">
                      End-to-end web solutions with modern frameworks
                    </p>
                  </div>
                </div>
                
                <div className="col-md-3 mb-4">
                  <div className="p-4 rounded shadow-sm bg-white h-100">
                    <i className="fas fa-mobile-alt fa-2x mb-3" style={{ color: 'var(--accent-orange)' }}></i>
                    <h5>Mobile Apps</h5>
                    <p className="small text-muted mb-0">
                      Cross-platform mobile applications
                    </p>
                  </div>
                </div>
                
                <div className="col-md-3 mb-4">
                  <div className="p-4 rounded shadow-sm bg-white h-100">
                    <i className="fas fa-gamepad fa-2x mb-3" style={{ color: 'var(--accent-purple)' }}></i>
                    <h5>Game Development</h5>
                    <p className="small text-muted mb-0">
                      Interactive games and simulations
                    </p>
                  </div>
                </div>
                
                <div className="col-md-3 mb-4">
                  <div className="p-4 rounded shadow-sm bg-white h-100">
                    <i className="fas fa-robot fa-2x mb-3" style={{ color: 'var(--secondary-blue)' }}></i>
                    <h5>Agentic AI & Automation</h5>
                    <p className="small text-muted mb-0">
                      Autonomous workflows, API integrations, intelligent systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic AI Showcase Teaser */}
      <section className="py-5" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039619/FULL_SCENARIO_kdrdxm.png" 
                alt="Agentic AI Automation Workflow"
                className="img-fluid rounded shadow-sm"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <h3 className="mb-3" style={{ color: 'var(--accent-orange)' }}>
                <i className="fas fa-robot me-2"></i>
                Agentic AI & Automation
              </h3>
              <h4 style={{ color: 'var(--primary-blue)' }}>Intelligent Lead Management Automation</h4>
              <p className="mb-4">
                I build autonomous systems that transform manual business processes into intelligent, 
                data-driven workflows. My Agentic AI pipeline ingests, enriches, scores, and routes leads 
                in real-time using Make.com, Clearbit API, and Google Apps Script.
              </p>
              <Link to="/agentic-ai" className="btn btn-custom">
                Explore My Agentic AI Builds →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="mb-4" style={{ color: 'var(--accent-orange)' }}>
                Ready to Build Something Amazing?
              </h3>
              <p className="mb-4">
                Let's collaborate on your next project. I'm passionate about turning ideas into 
                reality with clean code, innovative solutions, and intelligent automation.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <Link to="/works" className="btn btn-custom btn-lg">
                  View My Work
                </Link>
                <Link to="/agentic-ai" className="btn btn-outline-secondary btn-lg">
                  <i className="fas fa-robot me-2"></i>
                  My Agentic AI Builds
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;