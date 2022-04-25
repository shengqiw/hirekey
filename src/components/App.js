import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './login';
import { Home } from './home';
import { Profile } from './profile';
import { InvalidRoute } from './error/invalidRoute';
import { Navbar } from './navbar';
import { Listing } from './jobs-listing';
import { Contractor } from './contractor';
import { Footer } from './footer';

export const App = () => {
  return (
    <div style={{
      backgroundColor: '#EAE9E6',
      width: "100%",
      height: "100%"
    }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/contractor" element={<Contractor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Login />}/>
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
        <Footer />
      </Router>

    </div>

  );
}


