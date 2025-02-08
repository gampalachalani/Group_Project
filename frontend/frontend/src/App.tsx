import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Entrepreneurs from './components/Enterprise'; 
import Investors from './components/Investors';
import Entreform from './components/Entreform';
import Invesform from './components/Invesform';
import Funding from './components/Funding';
import Fundinglist from './components/FundList';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'
import About from './components/About';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/entreform" element={<Entreform />}/>
        <Route path="/invesform" element={<Invesform />}/>
        <Route path="/funds" element={<Funding />} />
        <Route path="/funds" element={<Fundinglist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


