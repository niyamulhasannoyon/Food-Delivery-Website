import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LogInPopup from './component/LogInPopup/LogInPopup';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    { showLogin ? <LogInPopup setShowLogin={setShowLogin}/> : null }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />   {/* ✅ Navbar always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    </>
  )
}

export default App
