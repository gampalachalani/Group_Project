import React from 'react';
const Header: React.FC = () => {
 return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/home">
      Home
    </a>
    <a className="navbar-brand" href="/Entrepreneurs">
      Entrepreneurs
    </a>
    <a className="navbar-brand" href="/Investors">
      Investors
    </a>
    <a className="navbar-brand" href="/Funding">
      Funds
    </a>
    <a className="navbar-brand" href="/sign in">
      Signin
    </a>
    <a className="navbar-brand" href="/sign up">
      Signup
    </a>
  </div>
 </nav>
 );
};
export default Header;




