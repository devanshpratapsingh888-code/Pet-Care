const Demos = () => {
    return (
        <main style={{ padding: '4rem 0', textAlign: 'center' }}>
            <div className="container">
                <h1>Product Demos</h1>
                <p style={{ color: '#666', marginBottom: '3rem' }}>See our products in action.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: '#000', height: '250px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <p>Video Placeholder 1</p>
                    </div>
                    <div style={{ background: '#000', height: '250px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        <p>Video Placeholder 2</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Demos;
