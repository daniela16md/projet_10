import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/argentBankLogo.webp';
import Login from '../../pages/Login/Login';
import User from '../../pages/User/User';
import './Header.css'

function Header() {
  return (
    <nav className='main-nav'>
        <Link className='main-nav-logo' to="/"><img src={Logo} alt='Logo'/>
        <h1 className='sr-only'>Argent Bank</h1></Link>
        <div>
            <Link className='main-nav-item' to='/User'>
                <i className='fa fa-user-circle' aria-hidden="true"></i>
                <p>Name</p>
            </Link>
            <Link className='main-nav-item' to="/">
                <i className='fa fa-sign-out' aria-hidden="true"></i>
                <p>Sign Out</p></Link>
            <Link className='main-nav-item' to='/Login'>
                <i className='fa fa-user-circle' aria-hidden="true"></i>
                <p>Sign In</p>
            </Link>
        </div>

    
    </nav>
  )
}

export default Header