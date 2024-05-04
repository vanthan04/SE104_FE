import React from 'react'
import { Container } from '@mui/material'
import AppBar from '../../components/Header/header'
// import BoardContent from '../BoardContent/index'
function Home() {
  return (
    <Container disableGutters maxWidth='flex'
      sx={{ height: '100vh' }}>
      <AppBar/>
    </Container>
  )
}

export default Home