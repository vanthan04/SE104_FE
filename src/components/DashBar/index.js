import { Box } from '@mui/material'
import React from 'react'
import QuanlyDocGia from './Menus/QuanlyDocGia'
import QuanlySach from './Menus/QuanlySach'
import Khac from './Menus/Khac'
function DashBar() {
     return (
          <Box
               px={2}
               sx={{
                    width: '100%',
                    display: 'flex',
                    height: '60px',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor:'primary.light'
               }}
               justifyContent='space-between'
          >
               <Box sx={{ display: "flex", alignContent: "center", gap: 2 }}>
                    <QuanlyDocGia />
                    <QuanlySach />
                    <Khac />
               </Box>
               <Box sx={{ display: "flex", alignContent: "center", gap: 2 }}>
                    Profiles
               </Box>
          </Box>
     )
}

export default DashBar