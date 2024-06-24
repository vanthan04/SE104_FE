import { Box, Container, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../../store/user/userSlice'
import ApiUser from '../../../untils/api/user'
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = data
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Email/Password bắt buộc')
      return
    }
    const user = {
      email: email,
      password: password
    }
    // Gọi phương thức postLogin từ ApiUser với đường dẫn và dữ liệu đăng nhập
    const response = await ApiUser.postLogin(user);
    if (response.success) {
      toast.success(response.message);
      localStorage.setItem('fullname', JSON.stringify(response.data.fullname)); // Store login data in local storage
      const expiresAt = new Date(new Date().getTime() + parseInt(response.expiresAt) * 60 * 1000);
      dispatch(
        loginSuccess({ token: response.accessToken, expiresAt: expiresAt.toISOString() })
      );
      navigate('/librarian')
    } else {
      toast.error(response.message)
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
          ĐĂNG NHẬP
        </Typography>

        <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin='normal'
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoFocus
            value={email}
            autoComplete='email'
            onChange={handleChange} />

          <TextField
            margin='normal'
            fullWidth
            id='password'
            label='Password'
            type='password'
            name='password'
            value={password}
            autoComplete='current-password'
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={email && password ? false : true}
          >
            Đăng nhập
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography component='p' variant='body2'>
              Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </Typography>
            <Typography component='p' variant='body2'>
              <Link to="/forget">Quên mật khẩu!</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container >
  )
}

export default LoginForm