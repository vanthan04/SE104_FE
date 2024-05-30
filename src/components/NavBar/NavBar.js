import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const NavBar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6'>Libary Management</Typography>
      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar