import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text-content">
                        <h1 className="hero-title">HAPPY <span className="highlight">PET</span></h1>
                        <p className="hero-subtitle">
                            Provide the best for your beloved pets. Top quality products for health and happiness.
                        </p>
                        <div className="hero-actions">
                            <Link to="/shop" className="btn btn-accent">Shop Now</Link>
                            <Link to="/universe" className="btn btn-outline">Learn More</Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">12k+</span>
                                <span className="stat-label">Happy Customers</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5k+</span>
                                <span className="stat-label">Products</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    {/* Placeholder for now, can generate a better image later or use a colorful blob shape */}
                    <div className="hero-image-placeholder">
                        <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Happy Dog" className="main-dog" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
