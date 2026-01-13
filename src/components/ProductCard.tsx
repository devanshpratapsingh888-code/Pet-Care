import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import './ProductCard.css';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        category: string;
        price: number;
        image: string;
        rating: number;
    };
}

import { Link } from 'react-router-dom';

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating to details page when clicking add to cart
        addToCart(product);
        showToast(`Added ${product.name} to cart!`, 'success');
    };

    return (
        <div className="product-card">
            {/* Overlay Link - Z-Index 5 to sit above image/content but below interactions */}
            <Link
                to={`/product/${product.id}`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 5,
                    cursor: 'pointer'
                }}
            />

            <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <button
                    className="add-to-cart-btn"
                    aria-label="Add to cart"
                    onClick={handleAddToCart}
                    style={{ zIndex: 10, position: 'absolute' }} // Explicitly > Link
                >
                    <ShoppingCart size={18} />
                </button>
                <div className="product-rating" style={{ zIndex: 10, position: 'absolute' }}>
                    <Star size={12} fill="#FFB500" stroke="none" />
                    <span>{product.rating}</span>
                </div>
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">₹{product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
