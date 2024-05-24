import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Container } from '@mui/material';
import ApiUser from '../../../../untils/api/user';
import { toast } from 'react-toastify';
import { useReaderContext } from '../../../../Context/ReaderContext';
const FormAddReader = () => {
     const { handleDataSuccess } = useReaderContext()
     const [formData, setFormData] = useState({
          hoten: '',
          loaidocgia: '',
          ngaysinh: '',
          diachi: '',
          email: '',
          ngaylapthe: '',
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value,
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          let response = await ApiUser.postAddReader("/readerManage/createNewReader", formData);
          if (response && response.success) {
               toast.success(`${response.message}`) //Thông báo thành công
               handleDataSuccess();//Cập nhật lại dữ liệu của table khi add thành công
               setFormData({
                    hoten: '',
                    loaidocgia: '',
                    ngaysinh: '',
                    diachi: '',
                    email: '',
                    ngaylapthe: '',
               });
          } else {
               toast.error(`${response.message}`) //Thông báo lỗi
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
