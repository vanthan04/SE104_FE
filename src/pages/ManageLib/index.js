import { Box } from '@mui/material'
import React from 'react'
import SideBarML from './components/SideBarML'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'




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
          </>
     )
}

export default ManageLibPage