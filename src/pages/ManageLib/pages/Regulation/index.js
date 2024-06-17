import React, { useState } from 'react';
import {  Container, Box, BottomNavigation, BottomNavigationAction, Grid, TextField, Button} from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

const ChangeRulesForm = () => {
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    tuoiToiThieu: '',
    tuoiToiDa: '',
    thoiHanThe: '',
    soLuongTheLoai: '',
    tenTheLoai: '',
    namXuatBanTu: '',
    namXuatBanDen: '',
    soLuongSachMuonToiDa: '',
    soNgayMuonToiDa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý lưu dữ liệu
    console.log('Submitted Data:', formData);
  };

  return (
    <Container component='main-change-rules' maxWidth='lg' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box component='div'>
        <Box component='div' sx={{ mb: 2 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ width: '100%', gap: '1px' }}
          >
            <BottomNavigationAction label="Quy Định Tuổi" icon={<PermIdentityOutlinedIcon />} />
            <BottomNavigationAction label="Thể Loại Sách" icon={<BookOutlinedIcon />} />
            <BottomNavigationAction label="Quy Định Mượn Sách" icon={<DateRangeOutlinedIcon />} />
          </BottomNavigation>
        </Box>
        <Grid container spacing={2} justifyContent='center'>
          {value === 0 &&
            <>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Tuổi Tối Thiểu'
                  id='tuoiToiThieu'
                  name='tuoiToiThieu'
                  type='number'
                  fullWidth
                  value={formData.tuoiToiThieu}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Tuổi Tối Đa'
                  id='tuoiToiDa'
                  name='tuoiToiDa'
                  type='number'
                  fullWidth
                  value={formData.tuoiToiDa}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Thời Hạn Thẻ (tháng)'
                  id='thoiHanThe'
                  name='thoiHanThe'
                  type='number'
                  fullWidth
                  value={formData.thoiHanThe}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
            </>
          }
          {value === 1 &&
            <>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Số Lượng Thể Loại'
                  id='soLuongTheLoai'
                  name='soLuongTheLoai'
                  type='number'
                  fullWidth
                  value={formData.soLuongTheLoai}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Tên Các Thể Loại (ngăn cách bằng dấu phẩy)'
                  id='tenTheLoai'
                  name='tenTheLoai'
                  fullWidth
                  value={formData.tenTheLoai}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Năm Xuất Bản Từ'
                  id='namXuatBanTu'
                  name='namXuatBanTu'
                  type='number'
                  fullWidth
                  value={formData.namXuatBanTu}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Năm Xuất Bản Đến'
                  id='namXuatBanDen'
                  name='namXuatBanDen'
                  type='number'
                  fullWidth
                  value={formData.namXuatBanDen}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
            </>
          }
          {value === 2 &&
            <>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Số Lượng Sách Mượn Tối Đa'
                  id='soLuongSachMuonToiDa'
                  name='soLuongSachMuonToiDa'
                  type='number'
                  fullWidth
                  value={formData.soLuongSachMuonToiDa}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Số Ngày Mượn Tối Đa'
                  id='soNgayMuonToiDa'
                  name='soNgayMuonToiDa'
                  type='number'
                  fullWidth
                  value={formData.soNgayMuonToiDa}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
            </>
          }
        </Grid>
        <Box display='flex' justifyContent='center' mt={2}>
          <Button variant="contained" color="error" onClick={() => console.log('Canceled')}>
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit" sx={{ mx: '10px' }}>
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangeRulesForm;
