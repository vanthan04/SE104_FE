import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Container } from '@mui/material';
import ApiUser from '../../../../untils/api/user';
const FormAddReader = (props) => {
     const { closePopup } = props
     const [formData, setFormData] = useState({
          hoten: '',
          loaidocgia: '',
          ngaysinh: '',
          diachi: '',
          email: '',
          ngaylapthe: '',
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
          ApiUser.postAddReader("/readerManage/createNewReader", formData)
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
                                   id="hoten"
                                   label="Họ Tên"
                                   name="hoten"
                                   value={formData.hoten}
                                   onChange={handleChange}
                                   error={error && !formData.hoten}
                                   helperText={error && !formData.hoten && 'Vui lòng nhập Họ Tên'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   select
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="loaidocgia"
                                   label="Loại Độc Giả"
                                   name="loaidocgia"
                                   value={formData.loaidocgia}
                                   onChange={handleChange}
                                   error={error && !formData.loaidocgia} 
                                   helperText={error && !formData.loaidocgia && 'Vui lòng chọn Loại Độc Giả'}
                              >
                                   <MenuItem value="X">X</MenuItem>
                                   <MenuItem value="Y">Y</MenuItem>
                              </TextField>
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="ngaysinh"
                                   label="Ngày Sinh"
                                   name="ngaysinh"
                                   type="date"
                                   InputLabelProps={{ shrink: true }}
                                   value={formData.ngaysinh}
                                   onChange={handleChange}
                                   error={error && !formData.ngaysinh}
                                   helperText={error && !formData.ngaysinh && 'Vui lòng nhập Ngày Sinh'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="diachi"
                                   label="Địa Chỉ"
                                   name="diachi"
                                   value={formData.diachi}
                                   onChange={handleChange}
                                   error={error && !formData.diachi}
                                   helperText={error && !formData.diachi && 'Vui lòng nhập Địa chỉ'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="email"
                                   label="Email"  
                                   name="email"
                                   type="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   error={error && !formData.email}
                                   helperText={error && !formData.email && 'Vui lòng nhập Email'}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="ngaylapthe"
                                   label="Ngày Lập Thẻ"
                                   name="ngaylapthe"
                                   type="date"
                                   InputLabelProps={{ shrink: true }}
                                   value={formData.ngaylapthe}
                                   onChange={handleChange}
                                   error={error && !formData.ngaylapthe}
                                   helperText={error && !formData.ngaylapthe && 'Vui lòng nhập Ngày lập thẻ'}
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

export default FormAddReader;
