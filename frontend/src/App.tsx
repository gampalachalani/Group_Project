
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.tsx';
import Home from './Home.tsx';
import Entrepreneurs from './Entrepreneurs.tsx';
import Investors from './Investors.tsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrepreneurs" element={<Entrepreneurs />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </Router>
  );
};

export default App;

