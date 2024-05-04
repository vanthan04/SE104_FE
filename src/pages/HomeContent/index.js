import React from 'react'
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar'
import BoardContent from '../BoardContent'
function HomeContent() {
  return (
    <Container disableGutters maxWidth='flex'
      sx={{ height: '100vh' }}>
      <BoardContent/>
    </Container>
  )
}

export default HomeContent