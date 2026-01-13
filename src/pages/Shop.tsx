import { useState } from 'react';
import CategoryRail from '../components/CategoryRail';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/mockData';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <main style={{ padding: '2rem 0' }}>
            <div className="container">
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Our Products</h1>
                <CategoryRail activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {filteredProducts.length === 0 && <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666' }}>No products found in this category.</p>}
                </div>
            </div>
        </main>
    );
};

export default Shop;
