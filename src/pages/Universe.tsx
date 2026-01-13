const Universe = () => {
    return (
        <main style={{ padding: '4rem 0' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Universe</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Welcome to PetCare Universe. We believe that every pet deserves the best life possible.
                        Our journey began with a simple mission: to provide high-quality, safe, and fun products for your furry, feathery, and scaly friends.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
                        alt="Dogs running"
                        style={{ width: '100%', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFB500' }}>Quality</h3>
                            <p>Only the best materials for your pets.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFB500' }}>Love</h3>
                            <p>Made with love by pet owners, for pet owners.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFB500' }}>Care</h3>
                            <p>We support local shelters with every purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Universe;
