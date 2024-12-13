import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <>
   <header className="header">
      <div className="logo">
        <img src="C:\Users\MSI\Desktop\grpproject doc\logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/entrepreneurs">Entrepreneurs</Link>
        <Link to="/investors">Investors</Link>
        <Link to="/search">Search</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </header>
   </>
  )
}




