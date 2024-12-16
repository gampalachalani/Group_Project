import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      
      <header className="header">
        <div className="logo">
          <a href="/">SeedLink</a>
        </div>
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/entrepreneurs">Entrepreneurs</a>
          <a href="/investors">Investors</a>
          <a href="/Funding">Fund</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search Entrepreneurs or Investors" />
          <button type="submit">Search</button>
        </div>
        <div className="auth-buttons">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </header>

      
      

      <footer className="footer">
        <p>© 2024 SeedLink. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

