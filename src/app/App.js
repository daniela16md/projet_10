import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import User from '../pages/User/User';
import Header from '../components/Header/Header';
import Footer from '../components/Footer /Footer';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/User' element={token ? <User /> : <Navigate to="/Login" />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App