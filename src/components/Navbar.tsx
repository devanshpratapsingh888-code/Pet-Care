import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SearchOverlay from './SearchOverlay';
import LoginOverlay from './LoginOverlay';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const { user, logout } = useAuth();

    return (
        <>
            <nav className="navbar">
                <div className="container navbar-container">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo">
                        Pet<span className="logo-highlight">Care.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/shop" className="nav-link">Our Product</Link>
                        <Link to="/sale" className="nav-link">Sale & Offer</Link>
                        <Link to="/universe" className="nav-link">Our Universe</Link>
                    </div>

                    {/* Icons */}
                    <div className="navbar-actions">
                        <button
                            className="icon-btn"
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search size={20} />
                        </button>
                        <button
                            className="icon-btn"
                            aria-label="Cart"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart size={20} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>

                        {user ? (
                            <div className="user-menu-container" style={{ position: 'relative' }}>
                                <button
                                    className="icon-btn"
                                    aria-label="Account"
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                >
                                    <User size={20} />
                                </button>
                                {isUserMenuOpen && (
                                    <div className="user-dropdown">
                                        <div className="user-info-header">
                                            <p className="user-name">{user.name}</p>
                                            <p className="user-email">{user.email}</p>
                                        </div>
                                        <Link to="/my-orders" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                                            My Orders
                                        </Link>
                                        <button
                                            className="dropdown-item logout-btn"
                                            onClick={() => {
                                                logout();
                                                setIsUserMenuOpen(false);
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                className="login-btn-nav"
                                onClick={() => setIsLoginOpen(true)}
                            >
                                Login
                            </button>
                        )}

                        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <LoginOverlay isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Navbar;
