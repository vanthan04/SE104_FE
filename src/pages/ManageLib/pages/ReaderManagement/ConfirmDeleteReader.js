import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import ApiDocGia from '../../../../untils/api/DocGia'
import { toast } from 'react-toastify'
import { useReaderContext } from '../../../../Context'

const ConfirmDeleteReader = (props) => {
     const { MaDG, closePopup } = props
     const { handleDataSuccess } = useReaderContext()
     const handleDelete = async () => {
          const res = await ApiDocGia.postDeleteReader({ MaDG })
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