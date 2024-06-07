import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AnotherPage from '../src/components/AnotherPage';
import './index.css'
import Signin from './components/Signin';
import Login from './components/Login';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/another" element={<AnotherPage />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router >
  );
};

export default App;
