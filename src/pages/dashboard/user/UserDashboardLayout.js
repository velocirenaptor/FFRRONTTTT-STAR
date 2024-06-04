import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../components/Footer';

function UserDashboardLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default UserDashboardLayout;
