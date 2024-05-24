import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Container } from '@mui/material';
import ApiUser from '../../../../untils/api/user';
const FormAddBook = (props) => {
     const { closePopup } = props
     const [formData, setFormData] = useState({
          tensach: '',
          theloai: '',
          tacgia: '',
          namxuatban: '',
          nhaxuatban: '',
          ngaynhap: '',
          trigia: '',
     });
     const [error, setError] = useState('');
     const handleChange = (event) => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        };


     const handleSubmit = (event) => {
          event.preventDefault();
          let hasEmptyFields = false;
          setError(''); // Clear previous errors before re-validation

          for (const field in formData) {
               if (!formData[field]) {
               hasEmptyFields = true;
               setError('Vui lòng điền đầy đủ các trường.'); // Set general error message
               break; // Exit loop after first empty field is found (optional)
               }
          }
          // Xử lý dữ liệu form ở đây
          if (!hasEmptyFields){
          //ApiUser.postAddReader("/readerManage/createNewReader", formData)
          console.log(formData);
          closePopup()
          }

     };
     
     return (
          <Container component="main" maxWidth="xs">
               <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} mt={1}>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="tensach"
                                   label="Tên sách"
                                   name="tensach"
                                   value={formData.tensach}
                                   onChange={handleChange}
                                   error={error && !formData.tensach}
                                   helperText={error && !formData.tensach && 'Vui lòng nhập Tên sách'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   select
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="theloai"
                                   label="Thể Loại"
                                   name="theloai"
                                   value={formData.theloai}
                                   onChange={handleChange}
                                   error={error && !formData.theloai} 
                                   helperText={error && !formData.theloai && 'Vui lòng chọn Thể loại'}
                              >
                                   <MenuItem value="A">X</MenuItem>
                                   <MenuItem value="B">Y</MenuItem>
                                   <MenuItem value="C">Y</MenuItem>
                              </TextField>
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="tacgia"
                                   label="Tác giả"
                                   name="tacgia"
                                   value={formData.tacgia}
                                   onChange={handleChange}
                                   error={error && !formData.tacgia}
                                   helperText={error && !formData.tacgia && 'Vui lòng nhập Tác giả'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="namxuatban"
                                   label="Năm xuất bản"
                                   name="namxuatban"
                                   value={formData.namxuatban}
                                   onChange={handleChange}
                                   error={error && !formData.namxuatban}
                                   helperText={error && !formData.namxuatban && 'Vui lòng nhập Năm xuất bản'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="nhaxuatban"
                                   label="Nhà xuất bản"  
                                   name="nhaxuatban"
                                   value={formData.nhaxuatban}
                                   onChange={handleChange}
                                   error={error && !formData.nhaxuatban}
                                   helperText={error && !formData.nhaxuatban && 'Vui lòng nhập Nhà xuất bản'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="ngaynhap"
                                   label="Ngày nhập"
                                   name="ngaynhap"
                                   type="date"
                                   InputLabelProps={{ shrink: true }}
                                   value={formData.ngaynhap}
                                   onChange={handleChange}
                                   error={error && !formData.ngaynhap}
                                   helperText={error && !formData.ngaynhap && 'Vui lòng nhập Ngày lập thẻ'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="trigia"
                                   label="Trị giá (VND)"  
                                   name="trigia"
                                   value={formData.trigia}
                                   onChange={handleChange}
                                   error={error && !formData.trigia}
                                   helperText={error && !formData.trigia && 'Vui lòng nhập Trị giá'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <Button
                                   type="submit"
                                   fullWidth
                                   variant="contained"
                                   color="primary"
                                   onClick={handleSubmit}
                              >
                                   Đăng Ký
                              </Button>
                         </Grid>
                    </Grid>
               </form>
          </Container>
     );
};

export default FormAddBook;
