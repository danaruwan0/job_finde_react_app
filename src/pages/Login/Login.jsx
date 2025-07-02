import React, { useState } from 'react';
import './login.css';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Ils_one from '../../assets/ils-1.png';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // ✅ Add this

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked with:', email, password);
    // Add your authentication logic here
  };

  const goToRegister = () => {
    navigate('/register'); // ✅ Navigate to Register page
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Illustration side */}
        <div className="login-illustration">
          <Logo />
          <Image
            src={Ils_one}
            alt="Welcome Illustration"
            className="login-image"
          />
          <h2 className="welcome-text">Welcome Back!</h2>
          <p className="welcome-subtext">Please login to your account</p>
        </div>

        {/* Form side */}
        <div className="login-form">
          <h1 className="form-title">Login</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <Text className="form-label" text="Email Address" />
              <Input
                className="form-input"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <Text className="form-label" text="Password" />
              <Input
                className="form-input"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" className="forgot-password">Forgot password?</a>
            </div>

            <Button
              className="login-button"
              type="submit"
              text="Login Now"
            />

            <p className="register-text">
              Don't have an account?{' '}
              <span onClick={goToRegister} className="register-link">
                Register here
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
