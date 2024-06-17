import React, { useState } from 'react';

import { TextField, Button, MenuItem, Grid, Container } from '@mui/material';

import { toast } from 'react-toastify';

import ApiReader from '../../../../untils/api/Reader';
import { useReaderContext } from '../../../../Context';

const FormAddReader = () => {
     const { handleDataSuccess } = useReaderContext();
     const [formData, setFormData] = useState({
          hoten: '',
          loaidocgia: '',
          ngaysinh: '',
          diachi: '',
          email: '',
          ngaylapthe: '',
     });

     const [error, setError] = useState({
          formateEmail: '',
          fields: {
               hoten: false,
               loaidocgia: false,
               ngaysinh: false,
               diachi: false,
               email: false,
               ngaylapthe: false,
          }
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value,
          });
          setError({
               ...error,
               fields: { ...error.fields, [name]: false }
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          // Validation
          let hasEmptyFields = false;
          let invalidEmail = false;
          let newFieldErrors = { ...error.fields };

          for (const field in formData) {
               if (!formData[field]) {
                    hasEmptyFields = true;
                    newFieldErrors[field] = true;
               }
          }

          if (formData.email) {
               const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if (!emailPattern.test(formData.email)) {
                    invalidEmail = true;
                    newFieldErrors.email = true;
               }
          }

          if (hasEmptyFields || invalidEmail) {
               setError({
                    formateEmail: invalidEmail ? 'Địa chỉ email không hợp lệ.' : 'Vui lòng nhập Email',
                    fields: newFieldErrors
               });
               return;
          }

          let response = await ApiReader.postAddReader(formData);
          if (response && response.success) {
               toast.success(`${response.message}`); // Thông báo thành công
               handleDataSuccess(); // Cập nhật lại dữ liệu của table khi add thành công
               setFormData({
                    hoten: '',
                    loaidocgia: '',
                    ngaysinh: '',
                    diachi: '',
                    email: '',
                    ngaylapthe: '',
               });
          } else {
               toast.error(`${response.message}`); // Thông báo lỗi
          }
     };

     return (
          <Container component="main" maxWidth="xs">
               <form onSubmit={handleSubmit}>
                    <Grid container spacing={1} mt={1}>
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
                                   error={error.fields.hoten}
                                   helperText={error.fields.hoten ? 'Vui lòng nhập Họ Tên' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Adjust as necessary
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
                                   error={error.fields.loaidocgia}
                                   helperText={error.fields.loaidocgia ? 'Vui lòng chọn Loại Độc Giả' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Adjust as necessary
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
                                   type='date'
                                   InputLabelProps={{ shrink: true }}
                                   value={formData.ngaysinh}
                                   onChange={handleChange}
                                   error={error.fields.ngaysinh}
                                   helperText={error.fields.ngaysinh ? 'Vui lòng nhập Ngày Sinh' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Adjust as necessary
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
                                   error={error.fields.diachi}
                                   helperText={error.fields.diachi ? 'Vui lòng nhập Địa Chỉ' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Adjust as necessary
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
                                   error={error.fields.email}
                                   helperText={error.fields.email ? error.formateEmail || 'Vui lòng nhập Email' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Adjust as necessary
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
                                   type='date'
                                   InputLabelProps={{ shrink: true }}
                                   value={formData.ngaylapthe}
                                   onChange={handleChange}
                                   error={error.fields.ngaylapthe}
                                   helperText={error.fields.ngaylapthe ? 'Vui lòng nhập Ngày Lập Thẻ' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Adjust as necessary
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
