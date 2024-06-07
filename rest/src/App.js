import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AnotherPage from './components/AnotherPage';
import './index.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/another" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
