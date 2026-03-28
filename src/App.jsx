import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import './styles/global.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
