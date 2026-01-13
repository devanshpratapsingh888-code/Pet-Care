import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X } from 'lucide-react';
import './LoginOverlay.css';

interface LoginOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginOverlay = ({ isOpen, onClose }: LoginOverlayProps) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email);
        onClose();
    };

    return (
        <div className="login-overlay">
            <div className="login-backdrop" onClick={onClose} />
            <div className="login-modal">
                <button className="close-btn" onClick={onClose}>
                    <X size={24} />
                </button>
                <h2>Welcome Back</h2>
                <p>Login to access your account</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary login-submit-btn">
                        Login
                    </button>
                </form>
                <div className="login-footer">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginOverlay;
