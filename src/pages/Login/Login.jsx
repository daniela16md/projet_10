import React from 'react';
import './Login.css';
import Form from '../../components/Form/Form'

function Login() {
  return (
    <div className='main sign-bg-dark'>
      <section className="sign-in-content">
        <i className="fa-solid fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form/>
      </section>
    </div>
  )
}

export default Login