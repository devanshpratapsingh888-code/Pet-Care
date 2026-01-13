import './StatsDisplay.css';

const StatsDisplay = () => {
    return (
        <section className="stats-section">
            <div className="container stats-container">
                <div className="stats-header">
                    <h2>Cats and Dogs are Adoption</h2>
                    <p>We help you find your new best friend and give them a forever home.</p>
                </div>

                <div className="stats-grid">
                    <div className="stats-card">
                        <div className="stats-circle">
                            <span className="stats-value">5700+</span>
                        </div>
                        <span className="stats-label">Rescued Pets</span>
                    </div>
                    <div className="stats-card">
                        <div className="stats-circle">
                            <span className="stats-value">3500+</span>
                        </div>
                        <span className="stats-label">Adopted</span>
                    </div>
                    <div className="stats-card">
                        <div className="stats-circle">
                            <span className="stats-value">100%</span>
                        </div>
                        <span className="stats-label">Happy Customers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsDisplay;
