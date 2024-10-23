import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './User.css';
import Userscontent from '../../components/Userscontent/Userscontent';
import { useEffect } from 'react';
import { getProfileAPI } from '../../redux/api';
import { usersData } from '../../redux/userslice';


function User() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.useraccount || {});
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
  

  return (
    <div className='usersaccount'>
      <div className='editname'>
        <h1 className='editnametittle'>Welcome back<br/>{userProfile.userName || 'Tony' } {userProfile.lastName || 'Jarvis'} </h1>
        <button className='editnamebutton'>Edit name</button>
      </div>
      <Userscontent />
    </div>
  )
}

export default User