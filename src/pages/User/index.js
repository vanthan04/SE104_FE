import React from 'react'
import { Box } from '@mui/material';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';

function Users() {
     return (
          <Box sx={{ display: 'flex', height: '100vh' }}>
               <Box sx={{ width: '20%' }}>
                    <SideBar />
               </Box>
               {/* Main content area */}
               <Box sx={{ width: '80%' }}>
                    <Outlet />
               </Box>
          </Box>
     );
}

export default Users