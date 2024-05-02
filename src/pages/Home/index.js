import React from 'react'
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar'
import LoginForm from '../../components/LoginForm'
import DashBar from '../../components/DashBar'
function Home() {
  return (
    <Container disableGutters maxWidth='flex'
      sx={{ height: '100vh'}}>
      <AppBar />
      <LoginForm/>
    </Container>
  )
}

export default Home