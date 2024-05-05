import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
function DashBar() {
     return (
          <Box sx={{
               height: '60px',
               border: 'solid 2px #e6f0ff',
               display: 'flex',
               gap: 3,
               justifyContent: 'center'
          }}
          >
               <Button sx={{ border: 'solid 1px', margin: '10px' }}>
                    <Link to="/users/quanlydocgia/dangki">Đăng kí Độc giả</Link>
               </Button>
               <Button sx={{ border: 'solid 1px', margin: '10px' }}>
                    <Link to="/users/quanlydocgia/timkiem">Tìm kiếm độc giả</Link>
               </Button>
               <Button sx={{ border: 'solid 1px', margin: '10px' }}>
                    <Link to="/users/quanlydocgia/chinhsua">Chỉnh sửa Độc giả</Link>
               </Button>
          </Box>
     )
}

export default DashBar