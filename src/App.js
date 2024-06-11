import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Remove useNavigate
import Fundas from './pages/fundas';
import Home from './pages/home';
import Clothing from './pages/clothing';
import Extras from './pages/extras';
import AdminLogin from "./pages/dashboard/admin/AdminLogin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/signup";
import DeleteAccount from "./pages/dashboard/user/DeleteAccount";
import ProfileSettings from "./pages/dashboard/user/Profile";
import Settings from "./pages/dashboard/admin/Settings.js";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart.jsx";
import Admin from "./pages/dashboard/admin/Admin.js";
import './css/Dashboard.css';
import UserDashboardLayout from "./pages/dashboard/user/UserDashboardLayout.js";
import AdminDashboardLayout from "./pages/dashboard/admin/AdminDashboardLayout.js";
import OrderConfirmation from "./pages/OrderConfirmation.js";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cases" element={<Layout><Fundas /></Layout>} />
        <Route path="/extras" element={<Layout><Extras /></Layout>} />
        <Route path="/clothing" element={<Layout><Clothing /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail addToCart={addToCart} /></Layout>} />
        <Route path="/signup" element={<LoginPage><Signup /></LoginPage>} />
        <Route path="/cart" element={<Layout><Cart cart={cart} /></Layout>} />
        <Route path="/order-confirmation" element={<Layout><OrderConfirmation /></Layout>} />
        <Route path="/login/admin" element={<AdminLogin />} />
        
        <Route path="/dashboard/*" element={<AdminDashboardLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="/settings/*" element={<UserDashboardLayout />}>
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="delete_account" element={<DeleteAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function LoginPage({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default App;
