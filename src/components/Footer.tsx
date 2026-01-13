import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">PetCare.</h3>
                    <p>Making pets happy, one paw at a time.</p>
                </div>
                <div className="footer-col">
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Toys</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2024 PetCare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
