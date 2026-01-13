import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
    const { user, orders } = useAuth();

    if (!user) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Please log in to view your orders.</h2>
            </div>
        );
    }

    return (
        <div className="my-orders-page">
            <div className="container">
                <h1 className="page-title">My Orders</h1>

                {orders.length === 0 ? (
                    <div className="no-orders">
                        <p>You haven't placed any orders yet.</p>
                        <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
                    </div>
                ) : (
                    <div className="orders-list">
                        {orders.map(order => (
                            <div key={order.id} className="order-card">
                                <div className="order-header">
                                    <div className="order-id">
                                        <span className="label">Order ID</span>
                                        <span className="value">#{order.id}</span>
                                    </div>
                                    <div className="order-date">
                                        <span className="label">Date</span>
                                        <span className="value">{order.date}</span>
                                    </div>
                                    <div className="order-status">
                                        <span className={`status-badge ${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="order-items">
                                    {order.items.map((item: any) => (
                                        <div key={item.id} className="order-item-row">
                                            <span className="item-name">{item.name} x{item.quantity}</span>
                                            <span className="item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-footer">
                                    <span className="total-label">Total Amount</span>
                                    <span className="total-value">₹{order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
