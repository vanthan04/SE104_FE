import { Box, TextField } from '@mui/material'
import React from 'react'
import UsersTable from '../UserTable'

function TimKiemDocGia() {
  return (
    <Box>
      <Box
        // sx={{display:'flex',justify-content: 'flex-start'}}
        sx={{display: 'flex', justifyContent:'flex-end', px: 5, p: 2}}
        component="form"
        size='small'
        autoComplete="off">
        <TextField id="outlined-basic" label="Search User..." variant="outlined" size='small' />
      </Box>
      <UsersTable />
    </Box >
  )
}

export default TimKiemDocGia