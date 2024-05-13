import React from "react";
import Fundas from './pages/fundas'
import Home from './pages/home'
import Clothing from './pages/clothing'
import Extras from './pages/extras'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cases" element={<Layout><Fundas /></Layout>} />
        <Route path="/extras" element={<Layout><Extras /></Layout>} />
        <Route path="/clothing" element={<Layout><Clothing /></Layout>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/special" element={<LoginPage />} /> {}
      </Routes>
    </BrowserRouter>
  );
}

// Layout component with header and footer
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

// Special page without header and footer
function LoginPage() {
  return (
    <div>

    </div>
  );
}

export default App;
