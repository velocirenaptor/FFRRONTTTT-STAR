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
import Settings from "./pages/dashboard/Settings";
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
{/* 
        <Route path="/settings" element={<DashboardLayout />}> */}
        
        <Route path="/settings/*" element={<DashboardLayout />}>
          {/* Nested routes for dashboard pages */}
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="others" element={<Settings />} />
          {/* Add more routes for dashboard pages */}
        

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function DashboardLayout({ children }) {
  const pathname = window.location.pathname;
  let content;

  if (pathname === "/settings") {
    content = <ProfileSettings />;
  } else {
    content = <Settings />;
  }

  return (
    <>
      <Sidebar />
      <div className="content">
        {content}
      </div>
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
