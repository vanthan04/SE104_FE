import { Box, Container, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import ApiUser from '../../../untils/api/user'

const RegisterForm = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [error, setError] = useState('');
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    let hasEmptyFields = false;
    setError('');
    for (const field in data) {
      if (!data[field]) {
      hasEmptyFields = true;
      setError('Chỗ trống còn thiếu.'); // Set general error message
      break; // Exit loop after first empty field is found (optional)
      }
  }
    if (/\s/.test(data.username)){
      alert('Username không được có khoảng trắng.')
      return
    }
    if (/\s/.test(data.email)){
      alert('Email không được có khoảng trắng.')
      return
    }
    if (/\s/.test(data.password)){
      alert('Password không được có khoảng trắng.')
      return
    }
    if (data.password !== data.confirmPassword) {
      alert('Mật khẩu không trùng khớp.')
      return
    }
    try {
      // const user = {
      //   username,
      //   email,
      //   password,
      // }
      //Call your API function for user registration (replace with your actual implementation)
      //const response = await ApiUser.registerUser(user)
      // if (response.success) {
      //   console.log('Đăng kí thành công:', response)
      //   // if (navigate) {
      //   //   navigate('/loginAdmin')
      //   // }
      // } else {
      //   console.error('Đăng kí thất bại:', response)
      //   // Handle registration failure (e.g., display error message)
      // }
    } catch(error){
      console.error('Error during registration:', error)
      // Handle errors during registration
    }
  };
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
        }}
      >
        <Typography component='h1' variant='h3'>
          Registration Form
        </Typography>

        <Box component='form' noValidate sx={{ mt: 1 }} >
          <TextField
            required
            margin='normal'
            fullWidth
            autoFocus
            id='username'
            label='Username'
            name='username'
            value={data.username}
            autoComplete='username'
            onChange={handleChange}
            error={error && !data.username}
            helperText={error && !data.username && 'Vui lòng nhập Username'}                  
          />

          <TextField
            required
            margin='normal'
            fullWidth
            id='email'
            label='Email'
            name='email'
            type='email'
            value={data.email}
            autoComplete='email'
            onChange={handleChange}
            error={error && !data.email}
            helperText={error && !data.email && 'Vui lòng nhập Email'}
          />

          <TextField
            required
            margin='normal'
            fullWidth
            id='password'
            label='Password'
            type='password'
            name='password'
            value={data.password}
            autoComplete='current-password'
            onChange={handleChange}
            error={error && !data.password}
            helperText={error && !data.password && 'Vui lòng nhập Password'}
          />

          <TextField
            required
            margin='normal'
            fullWidth
            id='confirmPassword'
            label='Confirm Password'
            type='password'
            name='confirmPassword'
            value={data.confirmPassword}
            autoComplete='current-password'
            onChange={handleChange}
            error={error && !data.confirmPassword}
            helperText={error && !data.confirmPassword && 'Vui lòng xác thực Password'}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default RegisterForm
