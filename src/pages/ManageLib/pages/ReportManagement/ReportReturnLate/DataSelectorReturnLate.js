import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import ApiReport from '../../../../../untils/api/Report';
import { saveAs } from 'file-saver';

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

     const handleDownload = async () => {
          try {
               // Gọi API để tải file CSV từ server
               const response = await ApiReport.downloadInfoByMonth(dataSubmit);
               console.log(response);
               // Xây dựng tên file dựa trên tháng và năm
               let filename = `Báo cáo sách trả sách trễ ngày ${dataSubmit.ngaybaocao}.csv`;
       
               // Tạo một Blob từ dữ liệu nhận được
               const blob = new Blob([response], { type: 'text/csv;charset=utf-8;' });
       
               // Sử dụng file-saver để tải file về
               saveAs(blob, filename);

          } catch (error) {
               toast.error('Đã xảy ra lỗi khi tải file!')
          }    
          
     };

     return (
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
               <TextField
                    variant='outlined'
                    label="Ngày báo cáo"
                    type="date"
                    name="ngaybaocao"
                    value={dataSubmit.ngaybaocao}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
               />
               <Box>
                    <Button type="submit" variant="contained" color="primary" size="small" sx={{ mx: 2 }}>
                         Thống kê
                    </Button>
                    <Button variant="contained" color="success" size="small" onClick={handleDownload}>
                         Tải về
                    </Button>
               </Box>
          </Box>
     );
};

export default DateSelectorReturnLate;