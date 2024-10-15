import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import User from '../pages/User/User';
import Error from '../pages/Error /Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer /Footer';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/User' element={<User />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App