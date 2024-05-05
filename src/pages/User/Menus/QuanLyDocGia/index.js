import React from 'react'
import { Box } from '@mui/material'
import DashBar from './DashBarQLDG'
import { Outlet } from 'react-router-dom'

function QuanLyDocGia() {
  return (
    <>
      <Box>
        <DashBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  )
}

export default QuanLyDocGia