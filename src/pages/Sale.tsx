import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/mockData';

const Sale = () => {
    // Cast to any to access onSale if Typescript complains about mockData update lag
    const saleProducts = PRODUCTS.filter((p: any) => p.onSale);

    return (
        <main style={{ padding: '2rem 0' }}>
            <div className="container">
                <div style={{ backgroundColor: '#FFB500', padding: '3rem', borderRadius: '24px', textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>SUPER SALE</h1>
                    <p style={{ fontSize: '1.2rem' }}>Grab these deals before they are gone!</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                    {saleProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {saleProducts.length === 0 && <p>No items on sale right now.</p>}
                </div>
            </div>
        </main>
    );
};

export default Sale;
