import React from 'react';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Footer from './components/Footer.tsx';
import Entrepreneurs from './components/Entrepreneurs.tsx';
import Investors from './components/Investors.tsx';
import Login from './components/Login.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
       <Home />
       <Entrepreneurs />
       <Investors />
       <Login />
      <Footer />
    </div>
  );
};

export default App;

