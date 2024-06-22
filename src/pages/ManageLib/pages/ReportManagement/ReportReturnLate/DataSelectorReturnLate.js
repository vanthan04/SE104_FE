import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import ApiReport from '../../../../../untils/api/Report';

const DateSelectorReturnLate = ({ setData }) => {
     const [dataSubmit, setDataSubmit] = useState({
          ngaybaocao: ''
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setDataSubmit({
               ...dataSubmit,
               [name]: value
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const response = await ApiReport.getLateReturnBook(dataSubmit);
               // Gọi API với thông tin tháng và năm được đặt trong query parameters
               if (response.success) {
                    setData(response.data); // Giả sử API trả về dữ liệu dưới dạng response.data.data
                    toast.success(response.message)
               }
               else {
                    toast.error(response.message)
               }
          } catch (error) {
               toast.error('Failed to fetch data');
          }
     };

     return (
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, alignContent: 'center', display: 'flex' }}>
               <TextField
                    variant='outlined'
                    label="Ngày báo cáo"
                    type="date"
                    name="ngaybaocao"
                    value={dataSubmit.ngaybaocao}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    sx={{ mr: 2 }}
               />
               <Button type="submit" variant="contained" color="primary">
                    Thống kê
               </Button>
          </Box>
     );
};

export default DateSelectorReturnLate;
