import React, { useState } from "react";
import Fundas from './pages/fundas'
import Home from './pages/home'
import Clothing from './pages/clothing'
import Extras from './pages/extras'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/signup";
import Sidebar from "./pages/dashboard/Sidebar";
import ProfileSettings from "./pages/dashboard/user/Profile";
import Settings from "./pages/dashboard/admin/Settings.js";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart.jsx";
import './css/Dashboard.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />

        <Route path="/cases" element={<Layout><Fundas /></Layout>} />

        <Route path="/extras" element={<Layout><Extras /></Layout>} />

        <Route path="/clothing" element={<Layout><Clothing /></Layout>} />

        <Route path="/product/:id"
        element={<Layout><ProductDetail addToCart={addToCart} /></Layout>} />

        <Route path="/signup" element={<LoginPage><Signup /></LoginPage>} />

        <Route path="/cart" element={<Layout> <Cart cart={cart} /> </Layout>} />
        
        <Route path="/dashboard/*" element={<AdminDashboardLayout />}>
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/settings/*" element={<UserDashboardLayout />}>
          <Route path="profile" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function UserDashboardLayout() {
  return (
    <>
        <ProfileSettings />
        <Footer />
    </>
  );
}


function AdminDashboardLayout() {
  return (
    <>
        <Settings />
        <Footer />
    </>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer className="footer" />
    </>
  );
}

function LoginPage() {
  return (
    <>
    <Signup />
      <Footer/>
      </>

  );
}

export default App;
