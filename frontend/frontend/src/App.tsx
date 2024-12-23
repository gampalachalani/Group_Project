import React from 'react';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Header />
       <Home />
      <Footer />
    </div>
  );
};

export default App;

