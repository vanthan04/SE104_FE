import { Box } from '@mui/material'
import React from 'react'
import SideBarML from './components/SideBarML'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ManageLibPage = () => {
     return (
          <>
               <NavBar />
               <Box display='flex' spacing={2} justifyContent='space-between'>
                    <SideBarML />
                    <Box flex={4}>
                         <Outlet />
                    </Box>

               </Box>
               <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
               />
          </>
     )
}

export default ManageLibPage