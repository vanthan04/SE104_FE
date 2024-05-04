<<<<<<< Updated upstream
=======
import { Box, Container, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import ApiUser from '../../untils/api/user'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
     const [data, setData] = useState({
          username: '',
          password: ''
     })
     const navigate = useNavigate()
     const { username, password } = data
     const handleChange = (event) => {
          setData({
               ...data,
               [event.target.name]: event.target.value
          })
     }

     const handleSubmit = async (event) => {
          event.preventDefault();
          if (!username || !password) {
               alert('Username/Password is required')
               return
          }
          try {
               // Gọi phương thức postLogin từ ApiUser với đường dẫn và dữ liệu đăng nhập
               const response = await ApiUser.postLogin('/user/loginAdmin', {
                       username: username,
                       password: password
               });
               console.log('Kết quả:', response);
               if (response.success){
                    navigate('/dashbar')
               }
               // Xử lý kết quả tại đây, ví dụ: chuyển hướng người dùng nếu đăng nhập thành công
           } catch (error) {
               console.error('Đã xảy ra lỗi khi đăng nhập:', error);
               // Xử lý lỗi tại đây, ví dụ: hiển thị thông báo lỗi cho người dùng
           }
     }
     return (
          <Container
               sx={{ height: '60vh' }}
               component='main'
               maxWidth='sm'
          >
               <Box
                    sx={{
                         marginTop: '30%',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         border: 'solid 1px',
                         padding: '16px',
                         borderRadius: '20px',
                         px: 5
                    }}>
                    <Typography component='h1' variant='h3'>
                         Login Form
                    </Typography>

                    <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                         <TextField
                              margin='normal'
                              fullWidth
                              id='username'
                              label='Username'
                              name='username'
                              autoFocus
                              value={username}
                              onChange={handleChange} />

                         <TextField
                              margin='normal'
                              fullWidth
                              id='password'
                              label='Password'
                              type='password'
                              name='password'
                              value={password}
                              onChange={handleChange}
                         />
                         <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={handleSubmit}
                              disabled={username && password ? false : true}
                         >
                              Sign In
                         </Button>
                    </Box>
               </Box>
          </Container >
     )
}

export default LoginForm
>>>>>>> Stashed changes
