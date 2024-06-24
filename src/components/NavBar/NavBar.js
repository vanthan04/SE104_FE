import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const NavBar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolBar sx={{height: '5vh'}}>
        <Typography variant='h6'>Quản lí thư viện</Typography>
      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar