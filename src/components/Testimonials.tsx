import { Star } from 'lucide-react';
import './Testimonials.css';

const REVIEWS = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Dog Mom",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        quote: "The best pet store I've ever found. My Max loves the toys!",
        rating: 5
    },
    {
        id: 2,
        name: "Amit Patel",
        role: "Cat Lover",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        quote: "Fast delivery and amazing quality products. Highly recommended.",
        rating: 5
    },
    {
        id: 3,
        name: "Anjali Gupta",
        role: "Bird Watcher",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        quote: "Great selection for birds. The cages are top notch.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2>What Our Customers Say</h2>
                </div>

                <div className="testimonials-grid">
                    {REVIEWS.map(review => (
                        <div key={review.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"{review.quote}"</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={review.image} alt={review.name} className="author-image" />
                                <div className="author-info">
                                    <h4>{review.name}</h4>
                                    <span>{review.role}</span>
                                    <div className="testimonial-rating">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={14} fill="#FFB500" stroke="none" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
