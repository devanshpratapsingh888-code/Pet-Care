import { useState } from 'react';
import Hero from '../components/Hero';
import CategoryRail from '../components/CategoryRail';
import ProductCard from '../components/ProductCard';
import StatsDisplay from '../components/StatsDisplay';
import Testimonials from '../components/Testimonials';
import { PRODUCTS } from '../data/mockData';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <main>
            <Hero />
            <CategoryRail activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

            <section className="container" style={{ padding: '2rem 0 5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Best Seller Products</h2>
                        <p style={{ color: '#666' }}>Top products for your pet's needs</p>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {filteredProducts.length === 0 && <p>No products found in this category.</p>}
                </div>
            </section>

            <StatsDisplay />

            <Testimonials />
        </main >
    );
};

export default Home;
