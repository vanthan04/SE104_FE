import React, { useState } from 'react';
import { Container, Grid, TextField, Box, MenuItem, Button } from '@mui/material';
import ApiUser from '../../../../untils/api/user';
import { toast } from 'react-toastify';

const EditReader = (props) => {
  const { user, editUserSuccess } = props;
  const [formUser, setFormUser] = useState({
    MaDG: user.MaDG,
    hoten: user.hoten,
    loaidocgia: user.loaidocgia,
    ngaysinh: user.ngaysinhtoUpdate,
    diachi: user.diachi,
    email: user.email,
    ngaylapthe: user.ngaylapthetoUpdate,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser({
      ...formUser,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await ApiUser.putUpdateReader("/readerManage/updateReader", formUser);
    if (response && response.data) {
      toast.success(`${response.message}`);
      editUserSuccess()
    } else {
      toast.error(`${response.message}`);
    }
  };

  return (
    <Container component='main-edit-reader' maxWidth='xs'>
      <Box component='form' autoComplete='off'>
        <Grid container spacing={2} my={1}>
          <Grid item xs={4}>
            <TextField
              variant='outlined'
              label='MaDG'
              id='madg'
              name='madg'
              fullWidth
              value={formUser.MaDG}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              variant='outlined'
              label='Họ tên'
              id='hoten'
              name='hoten'
              fullWidth
              value={formUser.hoten}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              variant='outlined'
              label='Email'
              id='email'
              name='email'
              fullWidth
              value={formUser.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              select
              variant="outlined"
              required
              fullWidth
              id="loaidocgia"
              label="Loại Độc Giả"
              name="loaidocgia"
              value={formUser.loaidocgia}
              onChange={handleChange}
            >
              <MenuItem value="X">X</MenuItem>
              <MenuItem value="Y">Y</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Ngày sinh'
              id='ngaysinh'
              name='ngaysinh'
              InputLabelProps={{ shrink: true }}
              fullWidth
              type='date'
              value={formUser.ngaysinh}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='outlined'
              label='Ngày lập thẻ'
              id='ngaylapthe'
              name='ngaylapthe'
              InputLabelProps={{ shrink: true }}
              fullWidth
              type='date'
              value={formUser.ngaylapthe}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              label='Địa chỉ'
              id='diachi'
              name='diachi'
              fullWidth
              value={formUser.diachi}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Box display='flex' justifyContent='end'>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Change
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditReader;
