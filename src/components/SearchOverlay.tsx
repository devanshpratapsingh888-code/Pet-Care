import { X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/mockData';
import ProductCard from './ProductCard';
import './SearchOverlay.css';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof PRODUCTS>([]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }
        const filtered = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="search-overlay-container">
            <div className="search-header">
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
                    <Search size={24} color="#666" />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="search-input"
                        autoFocus
                    />
                    <button onClick={onClose}><X size={24} /></button>
                </div>
            </div>

            <div className="container search-results">
                {query && results.length === 0 && <p className="no-results">No products found.</p>}
                {results.length > 0 && (
                    <div className="search-grid">
                        {results.map(product => (
                            <div key={product.id} className="search-product-item">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchOverlay;
