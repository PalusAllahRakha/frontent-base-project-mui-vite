import React from 'react';
import { GlobalStyles, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { menuItems } from '../../pages/utils/constant/index.jsx';
import PageHeader from '../pageHeader/index.jsx';
import Sidebar from '../sidebar/index.jsx';

export default function Layout() {

  return (
    <>
      <Box display="flex" sx={{ width: '100%' }}>
        <Sidebar menuItems={menuItems} />
        <Box display="flex" flexDirection="column" component="main" width="100%">
          <PageHeader />
          <Box padding="24px" paddingBottom={0}>
            <Outlet />
          </Box>
        </Box>
      </Box>
      <GlobalStyles styles={{ 'html, body, #root': { margin: 0, padding: 0 } }} />
    </>

  );
}
