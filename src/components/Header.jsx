import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'My CV' },
    { path: '/works', label: 'My Works' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <div className="navbar-brand">
          <img 
            src="https://res.cloudinary.com/dnc3s4u7q/image/upload/v1770652502/RG_Tech_logo_hp0u8b.png" 
            alt="RG Tech Logo" 
            height="50" 
            className="d-inline-block align-top"
          />
        </div>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <Link 
                  className={`nav-link ${location.pathname === item.path ? 'active fw-bold' : ''}`}
                  to={item.path}
                  style={{
                    color: location.pathname === item.path ? 'var(--accent-orange)' : 'inherit'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;