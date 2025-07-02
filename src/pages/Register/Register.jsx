import React, { useState } from 'react';
import './Register.css';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Ils_one from '../../assets/ils-1.png';
import Ils_tow from '../../assets/ils-2.png';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom'; // ✅ added this

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate(); // ✅ added this

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log('Register clicked with:', { email, password });
        // Add your registration logic here
    };

    const goToLogin = () => {
        navigate('/login'); // ✅ navigate to login
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
                    <p className="welcome-subtext">Join our community</p>
                </div>

                {/* Form side */}
                <div className="register-form">
                    <h1 className="form-title">Register</h1>

                    <form onSubmit={handleRegister}>
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
                                placeholder="Create password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <Text className="form-label" text="Confirm Password" />
                            <Input
                                className="form-input"
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                            />
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
    )
}
