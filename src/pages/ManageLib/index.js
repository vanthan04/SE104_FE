import { Box } from '@mui/material';
import React from 'react';
import SideBarML from './components/SideBarML';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const ManageLibPage = ({ dataLogin }) => {
     return (
          <>
               <NavBar />
               <Box display="flex" spacing={2} justifyContent="space-between">
                    <Box
                         flex={1}
                         sx={{ height: `calc(100vh - 5vh)`, background: '#e6e6e6' }}
                    >
                         <SideBarML dataLogin={dataLogin} />
                    </Box>
                    <Box flex={4} paddingLeft={2}>
                         <Outlet />
                    </Box>
               </Box>
          </>
     );
};

export default ManageLibPage;
