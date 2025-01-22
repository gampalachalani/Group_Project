import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="nav-link" href="/home">Home</a>
        <a className="nav-link" href="/entrepreneurs">Entrepreneurs</a>
        <a className="nav-link" href="/investors">Investors</a>
        <a className="nav-link" href="/funding">Funds</a>
        <a className="nav-link" href="/login">Sign In</a>
        <a className="nav-link" href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Header;





