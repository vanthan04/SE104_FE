import { Box, Container, TextField, Typography, Button } from '@mui/material'
import React from 'react'

const LoginForm = () => {
     const handleSubmit = (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          console.log({
               email: data.get('email'),
               password: data.get('password'),
          });
     };

     return (
          <Container
               component='main'
               maxWidth='sx'
          >
               <Box
                    sx={{
                         marginTop: 8,
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                    }}>
                    <Typography component='h1' variant='h3'>
                         Login Form
                    </Typography>

                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                         <TextField
                              margin='normal'
                              required
                              fullWidth
                              id='email'
                              label='Email'
                              name='email'
                              autoComplete='email'
                              autoFocus />

                         <TextField
                              margin='normal'
                              required
                              fullWidth
                              id='password'
                              label='Password'
                              type='password'
                              name='pwd'
                              autoComplete="current-password"
                         />
                         <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                         >
                              Sign In
                         </Button>
                    </Box>
               </Box>
          </Container >
     )
}

export default LoginForm