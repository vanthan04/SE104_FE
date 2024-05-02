import { Box, Container, TextField, Typography, Button } from '@mui/material'
import React from 'react'

const LoginForm = () => {
     return (
          <Container
               sx = {{height: '60vh'}}
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

                    <Box component='form' noValidate sx={{ mt: 1}}>
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