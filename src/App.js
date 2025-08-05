import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HR from './pages/HR';
import Download from './pages/Download';
import Contact from './pages/Contact';
import CSR from './pages/CSR';
import CanteenMenuPage from './pages/CanteenMenu';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/canteen-menu" element={<CanteenMenuPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
