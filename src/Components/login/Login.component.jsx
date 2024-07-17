import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Home from '../Home/Home.component';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      navigate('/home');
    } else {
      setErrorMessage('Invalid User ID or password');
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src="college-logo.png" alt="College Logo" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>UserID:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button className="butt" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
