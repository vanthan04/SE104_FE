import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import ApiReport from '../../../../../untils/api/Report';

const DateSelector = ({ setData }) => {
     const [dataSubmit, setDataSubmit] = useState({
          month: '',
          year: ''
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
          console.log('check data submit: ', dataSubmit)
          try {
               // Gọi API ở đây với thông tin ngày và tháng
               const response = await ApiReport.getInfoByMonth(dataSubmit);
               setData(response.data); // Giả sử API trả về dữ liệu dưới dạng response.data
          } catch (error) {
               toast.error('Failed to fetch data');
          }
     };

     return (
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
               <TextField
                    label="Month"
                    type="number"
                    name="month"
                    value={dataSubmit.month}
                    onChange={handleChange}
                    required
                    sx={{ mr: 2 }}
               />
               <TextField
                    label="Year"
                    type="number"
                    name="year"
                    value={dataSubmit.year}
                    onChange={handleChange}
                    required
                    sx={{ mr: 2 }}
               />
               <Box>
                    <Button type="submit" variant="contained" color="primary" size="small" sx={{ mx: 2 }}>
                         Thống kê
                    </Button>
                    <Button variant="contained" color="success" size="small" >
                         Tải về
                    </Button>
               </Box>
          </Box>
     );
};

export default DateSelector;
