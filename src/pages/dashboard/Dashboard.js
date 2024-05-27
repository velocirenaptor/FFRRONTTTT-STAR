import React from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      
    </div>
  )
}

export default Dashboard
