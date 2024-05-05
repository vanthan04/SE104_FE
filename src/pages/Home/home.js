import React from 'react'
import { Container, Box } from '@mui/material'
import AppBar from '../../components/Header/header'
import { Outlet } from 'react-router-dom'
// import BoardContent from '../BoardContent/index'
function HomePage() {
  return (
    <Container disableGutters maxWidth='flex'
      sx={{ height: '100vh' }}>
      <Box>
        <AppBar />
      </Box>
      <Box >
        <Outlet />
      </Box>
    </Container>
  )
}

export default HomePage