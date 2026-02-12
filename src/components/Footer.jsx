import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/gbenga-afolabi-46426825a/",
      label: "LinkedIn"
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/joshuaafolabi80",
      label: "GitHub"
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/GbengaAf1",
      label: "Twitter"
    },
    {
      icon: "fab fa-facebook",
      url: "https://facebook.com/Gbenga Afolabi",
      label: "Facebook"
    },
    {
      icon: "fab fa-instagram",
      url: "https://instagram.com/joshuaafolabi80",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/cv", label: "My CV" },
    { path: "/works", label: "My Works" },
    { path: "/contact", label: "Contact" }
  ];

  const services = [
    "Web Application Development",
    "Mobile App Development", 
    "Game Development",
    "Full-Stack Solutions"
  ];

  return (
    <footer className="site-footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="footer-heading mb-3">
              Gbenga Joshua Afolabi
            </h5>
            <p className="footer-about text-justified">
              Full-Stack Software Engineer specializing in web applications, 
              mobile apps, and game development. Passionate about creating 
              innovative digital solutions with React, Node.js, and modern technologies.
            </p>
            <div className="footer-contact d-flex align-items-center mb-3">
              <i className="fas fa-envelope contact-icon me-2"></i>
              <a 
                href="mailto:joshuaafolabi80@gmail.com" 
                className="contact-link"
              >
                joshuaafolabi80@gmail.com
              </a>
            </div>
            <div className="footer-contact d-flex align-items-center">
              <i className="fas fa-phone contact-icon me-2"></i>
              <a 
                href="tel:+2348026669012" 
                className="contact-link"
              >
                +234 802 666 9012
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-6">
                <h5 className="footer-heading mb-3">Quick Links</h5>
                <ul className="footer-links list-unstyled">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a 
                        href={link.path} 
                        className="footer-link d-flex align-items-center"
                      >
                        <i className="fas fa-chevron-right link-icon me-2 small"></i>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <h5 className="footer-heading mb-3">Services</h5>
                <ul className="footer-services list-unstyled">
                  {services.map((service, index) => (
                    <li key={index} className="mb-2">
                      <span className="service-item d-flex align-items-center">
                        <i className="fas fa-check service-icon me-2 small"></i>
                        <small>{service}</small>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-lg-4">
            <h5 className="footer-heading mb-3">Connect With Me</h5>
            <p className="footer-connect mb-3">
              Let's collaborate on your next project. Available for freelance and full-time opportunities.
            </p>
            
            <div className="social-links d-flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon d-flex align-items-center justify-content-center rounded-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            <div className="mt-4">
              <a 
                href="/contact" 
                className="footer-cta btn btn-custom btn-sm w-100"
              >
                <i className="fas fa-paper-plane me-2"></i>
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider bg-light my-4 opacity-25" />
        
        <div className="footer-bottom row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="copyright mb-0">
              &copy; {currentYear} <span className="copyright-name">Gbenga Joshua Afolabi</span>. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="tech-stack d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <span className="tech-badge">
                <i className="fab fa-react me-1"></i> React
              </span>
              <span className="tech-badge">
                <i className="fab fa-bootstrap me-1"></i> Bootstrap
              </span>
              <span className="tech-badge">
                <i className="fas fa-cloud me-1"></i> Netlify
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;