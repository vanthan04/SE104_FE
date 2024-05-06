import { Box, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

function AppBar() {
  return (
    <Box sx={{
      height: 60,
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      px: 2,
      backgroundColor: 'primary.light'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Button
          id='basic-button-home'
          variant='contained'
          startIcon={<HomeIcon />}>
          <Link to='/'>Home</Link>
        </Button>
        <Button
          id='basic-button-about'
          variant='contained'
          startIcon={<InfoIcon />}>
          <Link to='/about'>About</Link>
        </Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        {/* <TextField id="search-basic" label="Search Book" variant="outlined" size='small'/> */}
        <Button
          id='basic-button-login'
          variant='contained'
          startIcon={<LoginIcon />}>
            <Link to='/login'>Login</Link>
          </Button>
      </Box>
    </Box>
  )
}

export default AppBar