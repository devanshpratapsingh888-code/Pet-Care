import { useState } from 'react';
import { PawPrint, Dog, Cat, Bird, Fish } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import './CategoryRail.css';

const iconMap: Record<string, any> = {
    PawPrint,
    Dog,
    Cat,
    Bird,
    Fish
};

interface CategoryRailProps {
    activeCategory: string;
    onSelectCategory: (id: string) => void;
}

const CategoryRail = ({ activeCategory, onSelectCategory }: CategoryRailProps) => {
    return (
        <section className="category-rail">
            <div className="container" style={{ overflowX: 'auto' }}>
                <div className="category-list">
                    {CATEGORIES.map((cat) => {
                        const Icon = iconMap[cat.icon] || PawPrint;
                        const isActive = activeCategory === cat.id;

                        return (
                            <button
                                key={cat.id}
                                className={`category-item ${isActive ? 'active' : ''}`}
                                onClick={() => onSelectCategory(cat.id)}
                            >
                                <div className="category-icon-wrapper">
                                    <Icon size={24} />
                                </div>
                                <span className="category-name">{cat.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoryRail;
