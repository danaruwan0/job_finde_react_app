import React, { useState } from 'react';
import './login.css';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Ils_one from '../../assets/ils-1.png';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('jobSeeker');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Login clicked with:', { email, password, role });
      // Add your authentication logic here
      // You might want to include the role in your authentication request
    }
  };

  const goToRegister = () => {
    navigate('/register');
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
          <p className="welcome-subtext">Login as {role === 'jobSeeker' ? 'Job Seeker' : 
                                        role === 'employer' ? 'Employer' : 'Trainer'}</p>
        </div>

        {/* Form side */}
        <div className="login-form">
          <h1 className="form-title">Login</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <Text className="form-label" text="I am a" />
              <div className="role-selection">
                <button
                  type="button"
                  className={`role-button ${role === 'jobSeeker' ? 'active' : ''}`}
                  onClick={() => setRole('jobSeeker')}
                >
                  Job Seeker
                </button>
                <button
                  type="button"
                  className={`role-button ${role === 'employer' ? 'active' : ''}`}
                  onClick={() => setRole('employer')}
                >
                  Employer
                </button>
                <button
                  type="button"
                  className={`role-button ${role === 'trainer' ? 'active' : ''}`}
                  onClick={() => setRole('trainer')}
                >
                  Trainer
                </button>
              </div>
            </div>

            <div className="form-group">
              <Text className="form-label" text="Email Address" />
              <Input
                className={`form-input ${errors.email ? 'error' : ''}`}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <Text className="form-label" text="Password" />
              <Input
                className={`form-input ${errors.password ? 'error' : ''}`}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
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