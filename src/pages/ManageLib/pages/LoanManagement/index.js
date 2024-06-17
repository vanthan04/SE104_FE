import React, { useState, useEffect } from 'react';
import {  Container, Box, BottomNavigation, BottomNavigationAction, Grid, TextField, Button, Typography} from '@mui/material';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

const LoanPage = () => {
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    hoten: '',
    MaDG: '',
    ngaymuon: '',
    soluong: 1,
    sach: [
        { maSach: '', tenSach: '', theLoai: '', tacGia: '' } // Mảng chứa thông tin sách
      ],
    ngaytra: '',
    songaymuon: '',
    tienphat: '',
    tongno: ''
  });

  // Cập nhật mảng sach khi số lượng sách thay đổi
  useEffect(() => {
    const newSach = [];
    for (let i = 0; i < formData.soluong; i++) {
      newSach.push({ maSach: '', tenSach: '', theLoai: '', tacGia: '' });
    }
    setFormData(prevData => ({ ...prevData, sach: newSach }));
  }, [formData.soluong]);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name.startsWith('sach[')) {
      const index = parseInt(name.split('[')[1].split(']')[0]);
      const fieldName = name.split('.')[1];
      setFormData(prevData => ({
        ...prevData,
        sach: prevData.sach.map((sach, i) =>
          i === index ? { ...sach, [fieldName]: value } : sach
        )
      }));
    } else {
      let newValue = value;
      if (name === 'soluong') {
        newValue = Math.max(1, Math.min(5, parseInt(value, 10) || 0)); // Giới hạn và xử lý NaN
        // Đảm bảo số lượng sách trong mảng sach không vượt quá giới hạn
        const newSach = formData.sach.slice(0, newValue);
        while (newSach.length < newValue) {
          newSach.push({ maSach: '', tenSach: '', theLoai: '', tacGia: '' });
        }
        setFormData(prevData => ({ ...prevData, soluong: newValue, sach: newSach }));
      } else {
        setFormData(prevData => ({ ...prevData, [name]: newValue }));
      }
    }
  };
  
  const handleCancel = () => {
    setFormData({
      hoten: '',
      MaDG: '',
      ngaymuon: '',
      soluong: 1,
      sach: [{ maSach: '', tenSach: '', theLoai: '', tacGia: '' }]
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý lưu dữ liệu
    console.log('Submitted Data:', formData);
  };

  return (
    <Container component='main-change-rules' maxWidth='lg' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {/* <Box component='div'> */}
        <Box component='div' sx={{ mb: 2 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ width: '100%', gap: '1px' }}
          >
            <BottomNavigationAction label="Lập phiếu mượn sách" icon={<LibraryAddOutlinedIcon />} />
            <BottomNavigationAction label="Lập phiếu trả sách" icon={<LibraryAddCheckOutlinedIcon />} />
          </BottomNavigation>
        </Box>
        <Grid container spacing={2} justifyContent='center'>
          {value === 0 && /*Lập phiếu mượn sách*/
            <>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Họ tên độc giả'
                  id='hoten'
                  name='hoten'
                  fullWidth
                  value={formData.hoten}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Mã độc giả'
                  id='MaDG'
                  name='MaDG'
                  fullWidth
                  value={formData.MaDG}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Ngày mượn'
                  id='ngaymuon'
                  name='ngaymuon'
                  type='date'
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={formData.ngaymuon}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                variant='outlined'
                label='Số lượng'
                id='soluong'
                name='soluong'
                type='number'
                fullWidth
                value={formData.soluong} // Kết nối với state
                onChange={handleChange} // Cập nhật state khi thay đổi
                sx={{ maxWidth: '400px', mx: 'auto' }}
                // InputProps={{ inputProps: { min: 1, max: 5 } }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" align="center" gutterBottom>
                Danh sách sách mượn
                </Typography>
            </Grid>
            {formData.sach.map((sach, index) => (
                <Box key={index} sx={{ border: '1px solid #ccc', p: 2, mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Sách {index + 1}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                    <TextField
                        label="Mã sách"
                        variant="outlined"
                        fullWidth
                        value={sach.maSach}
                        onChange={handleChange}
                        name={`sach[${index}].maSach`}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        label="Tên sách"
                        variant="outlined"
                        fullWidth
                        value={sach.tenSach}
                        onChange={handleChange}
                        name={`sach[${index}].tenSach`}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        label="Thể loại"
                        variant="outlined"
                        fullWidth
                        value={sach.theLoai}
                        onChange={handleChange}
                        name={`sach[${index}].theLoai`}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        label="Tác giả"
                        variant="outlined"
                        fullWidth
                        value={sach.tacGia}
                        onChange={handleChange}
                        name={`sach[${index}].tacGia`}
                    />
                    </Grid>
                </Grid>
                </Box>
            ))}
            <Grid container justifyContent="center" sx={{ mt: 2 }}> {/* Grid container để căn giữa các nút */}
                <Button variant="contained" color="error" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="contained" color="success" type="submit" sx={{ ml: 2 }}>
                    Add
                </Button>
            </Grid>
            </>
            
          }
          {value === 1 && /*Lập phiếu trả sách*/
            <>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Họ tên độc giả'
                  id='hoten'
                  name='hoten'
                  fullWidth
                  value={formData.hoten}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Mã độc giả'
                  id='MaDG'
                  name='MaDG'
                  fullWidth
                  value={formData.MaDG}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                  variant='outlined'
                  label='Ngày trả'
                  id='ngaytra'
                  name='ngaytra'
                  type='date'
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={formData.ngaymuon}
                  onChange={handleChange}
                  sx={{ maxWidth: '400px', mx: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                variant='outlined'
                label='Số lượng'
                id='soluong'
                name='soluong'
                type='number'
                fullWidth
                value={formData.soluong} // Kết nối với state
                onChange={handleChange} // Cập nhật state khi thay đổi
                sx={{ maxWidth: '400px', mx: 'auto' }}
                // InputProps={{ inputProps: { min: 1, max: 5 } }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" align="center" gutterBottom>
                Danh sách sách trả
                </Typography>
            </Grid>
            {formData.sach.map((sach, index) => (
                <Box key={index} sx={{ border: '1px solid #ccc', p: 2, mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Sách {index + 1}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                    <TextField
                        label="Mã sách"
                        variant="outlined"
                        fullWidth
                        value={sach.maSach}
                        onChange={handleChange}
                        name={`sach[${index}].maSach`}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        label="Tên sách"
                        variant="outlined"
                        fullWidth
                        value={sach.tenSach}
                        onChange={handleChange}
                        name={`sach[${index}].tenSach`}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        label="Thể loại"
                        variant="outlined"
                        fullWidth
                        value={sach.theLoai}
                        onChange={handleChange}
                        name={`sach[${index}].theLoai`}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        label="Tác giả"
                        variant="outlined"
                        fullWidth
                        value={sach.tacGia}
                        onChange={handleChange}
                        name={`sach[${index}].tacGia`}
                    />
                    </Grid>
                </Grid>
                </Box>
            ))}
            <Grid container justifyContent="center" sx={{ mt: 2 }}> {/* Grid container để căn giữa các nút */}
                <Button variant="contained" color="error" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="contained" color="success" type="submit" sx={{ ml: 2 }}>
                    Add
                </Button>
            </Grid>
            </>
          }
        </Grid>
    </Container>
  );
};

export default LoanPage;
