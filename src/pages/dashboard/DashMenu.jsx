// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{ width: 240, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
