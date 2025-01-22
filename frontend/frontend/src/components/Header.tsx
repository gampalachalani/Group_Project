import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
          <a href="/home">
            <img src="./assets/images/logo.png" alt="Company Logo" />
          </a>
        </div>
      <div className="left-links">
        <a className="nav-link" href="/home">Home</a>
        <a className="nav-link" href="/entrepreneurs">Entrepreneurs</a>
        <a className="nav-link" href="/investors">Investors</a>
      </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="right-links">
        <a className="nav-link" href="/funding">Funds</a>
        <a className="nav-link" href="/login">Sign In</a>
        <a className="nav-link signup-btn" href="/signup">Sign Up</a>
      </div>
    
    </div>
    </nav>
  );
};

export default Header;





