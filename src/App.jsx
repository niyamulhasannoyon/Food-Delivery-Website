import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <>
      {/* ✨ Animated Stars Background */}
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="app">
        <Navbar />   {/* ✅ Navbar always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {/* ✅ Footer outside app div */}
      <Footer />
    </>
  );
}

export default App;
