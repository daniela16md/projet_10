import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../redux/api';
import './Form.css'

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Appel de l'API pour récupérer le token
      const response = await loginAPI({ email, password });
      const token = response.body.token;

      // Stockage du token dans le localstorage
      localStorage.setItem('authtoken', token);
      navigate("/user");

    } catch (error) {
      console.error("Erreur lors de la connexion à l'API :", error);
      setErrorMessage(error.message);
    }
  };

  return (
      <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
      <div className='error-msg'>{errorMessage}</div>
    </form>
  )
}

export default Form
