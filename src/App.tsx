import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sale from './pages/Sale';
import Universe from './pages/Universe';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

import { AuthProvider } from './context/AuthContext';
import MyOrders from './pages/MyOrders';

import ProductDetails from './pages/ProductDetails';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <div className="app">
              <Navbar />
              <CartSidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/universe" element={<Universe />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/my-orders" element={<MyOrders />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
