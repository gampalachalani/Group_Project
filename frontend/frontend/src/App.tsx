import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Entrepreneurs from './components/Entrepreneurs';
import Investors from './components/Investors';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


