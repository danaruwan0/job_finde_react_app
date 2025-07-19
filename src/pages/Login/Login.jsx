import React, { useState } from 'react';
import './login.css';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Ils_one from '../../assets/ils-1.png';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import RoleSelector from '../../components/RoleSelector/RoleSelector';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'jobSeeker',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoleChange = (newRole) => {
    setFormData(prev => ({ ...prev, role: newRole }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Add your authentication logic here
      console.log('Login submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Navigate on success
      // navigate('/dashboard');
    } catch (error) {
      setErrors({ server: error.message });
    } finally {
      setIsLoading(false);
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
          <p className="welcome-subtext">
            //add role admin
            Login as {formData.role === 'jobSeeker' ? 'Job Seeker' : 
                   formData.role === 'employer' ? 'Employer' : 'Trainer'}
          </p>
        </div>

        {/* Form side */}
        <div className="login-form">
          <h1 className="form-title">Login</h1>

          {errors.server && (
            <div className="server-error">
              {errors.server}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Text className="form-label" text="I am a" />
              <RoleSelector 
                selectedRole={formData.role}
                onRoleChange={handleRoleChange}
              />
            </div>

            <div className="form-group">
              <Text className="form-label" text="Email Address" />
              <Input
                className={`form-input ${errors.email ? 'error' : ''}`}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                /> 
                Remember me
              </label>
              <a href="#forgot" className="forgot-password">Forgot password?</a>
            </div>

            <Button
              className="login-button"
              type="submit"
              text={isLoading ? 'Logging in...' : 'Login Now'}
              disabled={isLoading}
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