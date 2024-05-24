import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import ApiUser from '../../../../untils/api/user'
import { toast } from 'react-toastify'

const ConfirmDeleteReader = (props) => {
     const { MaDG, closePopup, deleteReaderSuccess } = props

     const handleDelete = async () => {
          const res = await ApiUser.postDeleteReader('/readerManage/deleteReader', { MaDG })
          if (res.success && res) {
               toast.success(`${res.message}`)
               deleteReaderSuccess()
               closePopup()
          }
          else {
               toast.error(`${res.message}`)
          }
     }
     return (
          <Container maxWidth='xs' component='main-detele-reader'>
               <Typography variant='h6'>Bạn có xác nhận xóa độc giả: {MaDG} này không?</Typography>
               <Box display='flex' justifyContent='center' mt={2}>
                    <Button
                         variant='contained'
                         color='error'
                         sx={{ mx: '10px' }}
                         onClick={closePopup}
                    >
                         Cancel
                    </Button>
                    <Button
                         variant='contained'
                         color='success'
                         sx={{ mx: '10px' }}
                         onClick={handleDelete}
                    >
                         Confirm
                    </Button>
               </Box>
          </Container>
     )
}

export default ConfirmDeleteReader