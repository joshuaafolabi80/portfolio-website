import React from 'react';
import AgenticAICard from '../components/AgenticAICard';

const AgenticAI = () => {
  // Your Agentic AI projects - Only 1 project is active now
  const agenticProjects = [
    {
      id: 1,
      title: "Intelligent Lead Management Automation",
      shortDescription: "An autonomous SDR pipeline that ingests, enriches, scores, and routes leads in real-time using Make.com and API integrations.",
      category: "Automation AI",
      date: "2026",
      technologies: ["Make.com", "Clearbit API", "Google Apps Script", "Google Sheets API"],
      thumbnailUrl: "https://res.cloudinary.com/dnc3s4u7q/image/upload/v1777039619/FULL_SCENARIO_kdrdxm.png" // Replace with your hero screenshot
    },
    
    // COMMENTED OUT - Uncomment when you build your next project
    // {
    //   id: 2,
    //   title: "Coming Soon...",
    //   shortDescription: "New agentic workflow currently in development.",
    //   category: "Agentic AI",
    //   date: "2026",
    //   technologies: ["TBD"],
    //   thumbnailUrl: "PLACEHOLDER"
    // },
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="mb-3" style={{ color: 'var(--primary-blue)' }}>My Agentic AI & Automation Builds</h1>
        <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
          Welcome to my automation lab. Here, I design and deploy agentic systems that transform manual business 
          processes into autonomous, data-driven workflows.
        </p>
        <hr className="my-4" style={{ width: '80px', margin: '20px auto', borderColor: 'var(--accent-orange)' }} />
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {agenticProjects.map((project) => (
          <AgenticAICard key={project.id} project={project} />
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="text-center mt-5 pt-4">
        <div className="alert alert-info shadow-sm" style={{ backgroundColor: 'var(--light-bg)', border: 'none' }}>
          <i className="fas fa-rocket fa-2x mb-2" style={{ color: 'var(--accent-orange)' }}></i>
          <h5 className="mb-2">More Agentic AI Projects Coming Soon!</h5>
          <p className="mb-0">I'm actively building more intelligent agents and automation workflows. Check back for updates! 🚀</p>
        </div>
      </div>

      {/* Skills Section - Updated for Automation Engineering */}
      <div className="row mt-5 pt-5">
        <div className="col-lg-10 mx-auto">
          <div className="card shadow-sm border-0" style={{ backgroundColor: 'var(--light-bg)' }}>
            <div className="card-body p-5">
              <h3 className="text-center mb-4" style={{ color: 'var(--accent-purple)' }}>
                Core Competencies
              </h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="text-center p-3">
                    <i className="fas fa-cogs fa-2x mb-2" style={{ color: 'var(--secondary-blue)' }}></i>
                    <h5>Workflow Automation</h5>
                    <p className="small text-muted">Complex scenario architecture in Make.com</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="text-center p-3">
                    <i className="fas fa-database fa-2x mb-2" style={{ color: 'var(--secondary-blue)' }}></i>
                    <h5>Data Enrichment & API</h5>
                    <p className="small text-muted">Integrating Clearbit, Sheets, and Webhooks</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="text-center p-3">
                    <i className="fas fa-bolt fa-2x mb-2" style={{ color: 'var(--secondary-blue)' }}></i>
                    <h5>System Transparency</h5>
                    <p className="small text-muted">Audit logging & automated error handling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticAI;