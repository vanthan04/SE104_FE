import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { useBookContext } from '../../../../Context'
import ApiBook from '../../../../untils/api/Book'
import { toast } from 'react-toastify'

const ConfirmDeleteBook = ({ MaSach, closePopup }) => {
     const { handleDataSuccess } = useBookContext()
     const handleDelete = async () => {
          const res = await ApiBook.deleteBook(MaSach)
          if (res.success && res) {
               toast.success(`${res.message}`)
               handleDataSuccess()
               closePopup()
          }
          else {
               toast.error(`${res.message}`)
          }
     }

     return (
          <Container maxWidth='xs' component='main-detele-reader'>
               <Typography variant='h6'>Bạn có xác nhận xóa sách: {MaSach} này không?</Typography>
               <Box display='flex' justifyContent='center' mt={2}>
                    <Button
                         variant='contained'
                         color='error'
                         sx={{ mx: '10px' }}
                         onClick={closePopup}
                    >
                         Hủy
                    </Button>
                    <Button
                         variant='contained'
                         color='success'
                         sx={{ mx: '10px' }}
                         onClick={handleDelete}
                    >
                         Xác nhận
                    </Button>
               </Box>
          </Container>
     )
}

export default ConfirmDeleteBook