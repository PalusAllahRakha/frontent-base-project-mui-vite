import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Tooltip
} from '@mui/material';
import React, { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io';
import { useLocation, Link } from 'react-router-dom';


import { SidebarContainer, MenuSection, ActiveListItem, LogoContainer, LogoutContainer } from './style.jsx';
import closeSidebar from '../../assets/icons/close-sidebar.svg';
import openSidebar from '../../assets/icons/open-sidebar.svg';
import logo from '../../assets/images/logo.svg';

const Sidebar = ({ menuItems }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContainer collapsed={collapsed}>
      <LogoContainer collapsed={collapsed}>
        <img src={logo} alt="Logo" />
        {!collapsed && (
          <IconButton size="small" onClick={() => setCollapsed(!collapsed)}>
            <img src={openSidebar} alt="Open Sidebar" />
          </IconButton>
        )}
        {collapsed && (
          <IconButton size="small" onClick={() => setCollapsed(!collapsed)}>
            <img src={closeSidebar} alt="Close Sidebar" />
          </IconButton>
        )}
      </LogoContainer>
      <Box height={'1px'} width={'100%'} bgcolor={'#E2E8F0'} />
      <MenuSection>
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <Tooltip
                  title={collapsed ? item.label : ''}
                  placement="right"
                  arrow
                >
                  <ActiveListItem className={`menu-item ${isActive ? 'active' : ''}`}>
                    <ListItemIcon sx={{ color: isActive ? '#3f51b5' : '#777' }}>
                      {item.icon}
                    </ListItemIcon>
                    {!collapsed && <ListItemText primary={item.label} />}
                  </ActiveListItem>
                </Tooltip>
              </Link>
            );
          })}
        </List>
      </MenuSection>
      <LogoutContainer>
        <Tooltip title={collapsed ? 'Logout' : ''} placement="right" arrow>
          <ListItemButton sx={{ color: 'red' }}>
            <ListItemIcon sx={{ color: 'red' }}>
              <IoMdLogOut />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Logout" />}
          </ListItemButton>
        </Tooltip>
      </LogoutContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
