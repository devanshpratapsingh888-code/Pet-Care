import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const product = PRODUCTS.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <button onClick={() => navigate('/shop')} className="back-btn">
                    Back to Shop
                </button>
            </div>
        );
    }

    const relatedProducts = PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const handleAddToCart = () => {
        addToCart(product);
        showToast(`Added ${product.name} to cart!`, 'success');
    };

    return (
        <main className="product-details-page">
            <div className="container">
                <button onClick={() => navigate(-1)} className="back-link">
                    <ArrowLeft size={20} /> Back
                </button>

                <div className="product-details-grid">
                    <div className="product-gallery">
                        <img src={product.image} alt={product.name} className="main-image" />
                    </div>

                    <div className="product-info-section">
                        <h1 className="pd-title">{product.name}</h1>
                        <div className="pd-rating">
                            <Star fill="#FFB500" stroke="none" size={20} />
                            <span>{product.rating} (120 reviews)</span>
                        </div>
                        <p className="pd-price">₹{product.price.toFixed(2)}</p>

                        <p className="pd-description">
                            Give your pet the best with our {product.name}.
                            Expertly crafted for {product.category === 'fish' ? 'aquatic life' : product.category}s,
                            this premium product ensures quality, durability, and happiness for your beloved companion.
                        </p>

                        <div className="pd-actions">
                            <button className="pd-add-btn" onClick={handleAddToCart}>
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {relatedProducts.length > 0 && (
                    <div className="related-products">
                        <h2>You May Also Like</h2>
                        <div className="related-grid">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ProductDetails;
