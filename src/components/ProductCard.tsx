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

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleAddToCart = () => {
        addToCart(product);
        showToast(`Added ${product.name} to cart!`, 'success');
    };

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <button
                    className="add-to-cart-btn"
                    aria-label="Add to cart"
                    onClick={handleAddToCart}
                >
                    <ShoppingCart size={18} />
                </button>
                <div className="product-rating">
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
