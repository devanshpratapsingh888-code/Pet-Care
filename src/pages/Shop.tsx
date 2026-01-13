import { useState } from 'react';
import CategoryRail from '../components/CategoryRail';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/mockData';
import './Shop.css';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <main className="shop-page">
            <div className="container">
                <h1 className="shop-title">Our Products</h1>
                <CategoryRail activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

                <div className="shop-products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {filteredProducts.length === 0 && <p className="no-products-msg">No products found in this category.</p>}
                </div>
            </div>
        </main>
    );
};

export default Shop;
