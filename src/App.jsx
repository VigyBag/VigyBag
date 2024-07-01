import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Home/Home';
import Gifts from './pages/Gifts';
import Categories from './pages/Categories';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <></>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/gifts" element={<Gifts />} />
    //     <Route path="/categories" element={<Categories />} />
    //     <Route path="/about" element={<AboutUs />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //   </Routes>
    // </Router>
  );
}
