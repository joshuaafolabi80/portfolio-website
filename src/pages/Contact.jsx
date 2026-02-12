import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // This helper function formats the data for Netlify's bot
    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      // We "fetch" to the root, but Netlify intercepts this as a form submission
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "joshuaafolabi80@gmail.com",
      link: "mailto:joshuaafolabi80@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+234 802 666 9012",
      link: "tel:+2348026669012"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Asaba, Delta State, Nigeria",
      link: "https://maps.google.com"
    }
  ];

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

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="mb-4 text-center" style={{ color: 'var(--primary-blue)' }}>Let's Connect</h1>
          <p className="lead text-center mb-5">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
          
          {/* Contact Information Cards */}
          <div className="row mb-5">
            {contactInfo.map((info, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100 hover-shadow" style={{ transition: 'all 0.3s ease' }}>
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className={`${info.icon} fa-2x`} style={{ color: 'var(--accent-purple)' }}></i>
                    </div>
                    <h5 className="mb-3">{info.title}</h5>
                    <a 
                      href={info.link} 
                      className="text-decoration-none d-block"
                      style={{ color: 'var(--secondary-blue)' }}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <h4 className="mb-4" style={{ color: 'var(--accent-orange)' }}>Follow Me</h4>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                      >
                        <i className={social.icon}></i>
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 text-center" style={{ color: 'var(--accent-orange)' }}>
                <i className="fas fa-paper-plane me-2"></i>
                Send me a message
              </h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  <strong>Message sent successfully!</strong> I'll get back to you within 24 hours.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  <strong>Error sending message.</strong> Please try again or email me directly.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </div>
              )}
              
              {/* Netlify Form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Netlify hidden fields for identification */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project type or inquiry"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-custom btn-lg px-5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;