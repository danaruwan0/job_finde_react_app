import React, { useState } from 'react';
import './Register.css';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Ils_tow from '../../assets/ils-2.png';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('jobSeeker');
    const [errors, setErrors] = useState({});
    const [passwordMatch, setPasswordMatch] = useState(null);

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
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword && confirmPassword !== '');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password && password !== '');
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Register clicked with:', { email, password, role });
            
        }
    };

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="register-page">
            <div className="register-container">
                {/* Illustration side */}
                <div className="register-illustration">
                    <Logo className="register-logo" />
                    <Image
                        src={Ils_tow}
                        alt="Welcome Illustration"
                        className="register-image"
                    />
                    <h2 className="welcome-text">Create Account!</h2>
                    <p className="welcome-subtext">
                        Join our community as a {role === 'jobSeeker' ? 'Job Seeker' :
                                                role === 'employer' ? 'Employer' :
                                                role === 'trainer' ? 'Trainer' : 'Admin'}
                    </p>
                </div>

                {/* Form side */}
                <div className="register-form">
                    <h1 className="form-title">Register</h1>

                    <form onSubmit={handleRegister}>
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
                                <button
                                    type="button"
                                    className={`role-button ${role === 'admin' ? 'active admin' : ''}`}
                                    onClick={() => setRole('admin')}
                                >
                                    Admin
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
                                onChange={handlePasswordChange}
                                placeholder="Create password (min 8 characters)"
                                required
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <Text className="form-label" text="Confirm Password" />
                            <Input
                                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="Confirm your password"
                                required
                            />
                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                            <div className={`password-match ${passwordMatch === true ? 'valid' : passwordMatch === false ? 'invalid' : ''}`}>
                                {passwordMatch === true && 'Passwords match!'}
                                {passwordMatch === false && 'Passwords do not match'}
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="terms-agreement">
                                <input type="checkbox" required /> I agree to the Terms and Conditions
                            </label>
                        </div>

                        <Button
                            className="register-button"
                            type="submit"
                            text="Register Now"
                        />

                        <p className="login-text">
                            Already have an account?{' '}
                            <span onClick={goToLogin} className="login-link">
                                Login here
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
