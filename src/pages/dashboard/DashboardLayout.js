// src/components/DashboardLayout.js
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <MainContent />
    </Box>
  );
};

export default DashboardLayout;
