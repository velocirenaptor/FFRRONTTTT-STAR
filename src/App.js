import React from "react";
import Fundas from './pages/fundas'
import Home from './pages/home'
import Clothing from './pages/clothing'
import Extras from './pages/extras'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/signup";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import ProductDetail from "./components/ProductDetail";
import Sidebar from "./pages/dashboard/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cases" element={<Layout><Fundas /></Layout>} />
        <Route path="/extras" element={<Layout><Extras /></Layout>} />
        <Route path="/clothing" element={<Layout><Clothing /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/special" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
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

function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </>
  );
}

function LoginPage() {
  return (

    <div>
      
    </div>

  );
}

export default App;
