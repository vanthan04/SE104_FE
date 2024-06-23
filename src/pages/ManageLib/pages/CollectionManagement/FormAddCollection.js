import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Paper } from '@mui/material';
import ApiCollection from '../../../../untils/api/Collection';
import { toast } from 'react-toastify';
import { useReaderContext } from '../../../../Context';

const FormAddCollection = ({ data, closePopup }) => {
     const { handleDataSuccess } = useReaderContext()
     const [values, setValues] = useState({
          MaDG: data.MaDG,
          hoTenDocGia: data.hoten || '',
          tongNo: data.tongno || 0,
          tienthu: 0,
          conLai: data.tongno || 0.,
          ngaythu: ''
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setValues((prevValues) => ({
               ...prevValues,
               [name]: value,
               conLai: name === 'tienthu' ? prevValues.tongNo - value : prevValues.conLai
          }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const response = await ApiCollection.postTaoPhieuThuTienPhat(values)
               if (response.success) {
                    toast.success('Thành công')
                    handleDataSuccess()
                    closePopup()
               }
               else {
                    toast.error(response.message)
               }
          }
          catch (error) {
               console.error('Lỗi lập phiếu phạt:', error);
               toast.error('Làm ơn thử lại.'); // Generic error message
          }
          closePopup();
     };

     return (
          <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
               <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} mt={2}>
                         <Grid item xs={12}>
                              <TextField
                                   label="Họ tên độc giả"
                                   variant="outlined"
                                   name="hoTenDocGia"
                                   value={values.hoTenDocGia}
                                   onChange={handleChange}
                                   fullWidth
                                   disabled
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   label="Mã độc giả"
                                   variant="outlined"
                                   name="MaDG"
                                   value={values.MaDG}
                                   onChange={handleChange}
                                   fullWidth
                                   disabled
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   label="Tổng nợ"
                                   variant="outlined"
                                   name="tongNo"
                                   value={values.tongNo}
                                   onChange={handleChange}
                                   fullWidth
                                   disabled
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   label="Số tiền thu"
                                   variant="outlined"
                                   name="tienthu"
                                   value={values.tienthu}
                                   onChange={handleChange}
                                   type="number"
                                   inputProps={{ min: 0 }}
                                   fullWidth
                                   required
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   label="Còn lại"
                                   variant="outlined"
                                   name="conLai"
                                   value={values.conLai}
                                   onChange={handleChange}
                                   fullWidth
                                   disabled
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   variant='outlined'
                                   label="Ngày thu tiền"
                                   type="date"
                                   name="ngaythu"
                                   value={values.ngaythu}
                                   onChange={handleChange}
                                   required
                                   InputLabelProps={{ shrink: true }}
                              />
                         </Grid>
                         <Grid item xs={12} display="flex" justifyContent="flex-end">
                              <Button type="submit" variant="contained" color="primary">
                                   Xác nhận
                              </Button>
                         </Grid>
                    </Grid>
               </Box>
          </Paper>
     );
};

export default FormAddCollection;
