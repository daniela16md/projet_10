import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/images/argentBankLogo.webp';
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { getProfileAPI } from '../../redux/api';
import { useEffect } from 'react';
import { usersData } from '../../redux/userslice';

import './Header.css'

function Header() {
    const userProfile = useSelector((state) => state.useraccount || {});
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getProfileAPI(token);
                const userData = response.body; 
                dispatch(usersData(userData));  
            } catch (error) {
                console.error("failed to get the datas:", error);
            }
        };
        fetchUserProfile();
    }, [token, dispatch]);

    const handlelogout = () => {
        dispatch(logout());
    };
  return (
    <nav className='main-nav'>
        <Link className='main-nav-logo' to="/"><img className='main-nav-logo-image'src={Logo} alt='Logo'/>
        <h1 className='sr-only'>Argent Bank</h1></Link>
        <div className='main-menu'>
            {token ? ( 
                <> 
                    <Link className='main-nav-item' to='/User'>
                        <FaUserCircle className='fa fa-user-circle' aria-hidden="true" />
                        {userProfile.userName || userProfile.firstName || "User"}
                    </Link>
                    <Link className='main-nav-item' to="/" onClick={handlelogout}>
                        <FaSignOutAlt className='fa fa-sign-out' aria-hidden="true" />
                        <p>Sign Out</p>
                    </Link>
                </>

            ) : (
                <Link className='main-nav-item' to='/Login'>
                    <FaUserCircle className='fa fa-user-circle' aria-hidden="true" />
                    <p>Sign In</p>
                </Link>

            )}
        </div>
    </nav>
  )
}

export default Header