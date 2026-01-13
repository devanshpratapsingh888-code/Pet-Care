import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const { addOrder } = useAuth();
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock order processing
        setTimeout(() => {
            addOrder(items, cartTotal);
            clearCart();
            showToast('Order placed successfully!', 'success');
            navigate('/my-orders');
        }, 1500);
    };

    if (items.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Your cart is empty</h2>
                <p>Add some items to checkout.</p>
                <button className="btn btn-primary" onClick={() => navigate('/shop')} style={{ marginTop: '1rem' }}>
                    Go to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h1 className="page-title">Checkout</h1>
                <div className="checkout-grid">
                    {/* Left Column: Form */}
                    <div className="checkout-form-section">
                        <h2>Shipping Details</h2>
                        <form id="checkout-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Street Address</label>
                                <input required type="text" name="address" value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>City</label>
                                    <input required type="text" name="city" value={formData.city} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>ZIP Code</label>
                                    <input required type="text" name="zip" value={formData.zip} onChange={handleChange} />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="checkout-summary-section">
                        <div className="order-summary-card">
                            <h2>Order Summary</h2>
                            <div className="summary-items">
                                {items.map(item => (
                                    <div key={item.id} className="summary-item">
                                        <div className="item-info">
                                            <span className="item-name">{item.name}</span>
                                            <span className="item-qty">x{item.quantity}</span>
                                        </div>
                                        <span className="item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <button type="submit" form="checkout-form" className="btn btn-primary place-order-btn">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
