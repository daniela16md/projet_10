import React from 'react';
import './User.css';
import Userscontent from '../../components/Userscontent/Userscontent';

function User() {
  

  return (
    <div className='usersaccount'>
      <div className='editname'>
        <h1 className='editnametittle'>Welcome back<br/>Tony Jarvis</h1>
        <button className='editnamebutton'>Edit name</button>
      </div>
      <Userscontent />
    </div>
  )
}

export default User