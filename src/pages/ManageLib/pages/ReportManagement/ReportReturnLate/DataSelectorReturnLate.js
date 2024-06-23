import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import ApiReport from '../../../../../untils/api/Report';
import { saveAs } from 'file-saver';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
const ExcelJS = require('exceljs');

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
     const validateFields = () => {
          if (!dataSubmit.ngaybaocao) {
               toast.warning('Giá trị đầu vào bị bỏ trống');
               return false
          }
          return true
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (!validateFields()) {
               return;
          }
          try {
               const response = await ApiReport.getLateReturnBook(dataSubmit);
               // Gọi API với thông tin tháng và năm được đặt trong query parameters
               if (response.success) {
                    setData(response.data); // Giả sử API trả về dữ liệu dưới dạng response.data.data
                    if (response.data.length === 0) {
                         toast.warning('Không có sách trả trễ!!');
                         return
                    }
               }
               else {
                    toast.error(response.message)
               }
          } catch (error) {
               toast.error('Failed to fetch data');
          }
     };

     const handleDownload = async () => {
          if (!validateFields()) {
               return;
          }
          try {
               // Gọi API để tải file CSV từ server
               const response = await ApiReport.dowloadLateReturnBook(dataSubmit);
               console.log(response);


               // Build filename based on month and year
               let filename = `Báo cáo sách sách trả trễ ${dataSubmit.ngaybaocao}.xlsx`;

               // Convert CSV data to workbook
               const workbook = new ExcelJS.Workbook();
               const worksheet = workbook.addWorksheet('Báo cáo');

               // Assuming 'response' contains valid CSV data
               const csvData = response.split('\n');
               const dataArray = csvData.map(row => row.split(','));

               // Trim whitespace and remove ""
               const trimmedDataArray = dataArray.map(row => row.map(cell => cell.trim().replace(/^"(.+(?="$))"$/, '$1')));

               // Add column headers
               worksheet.columns = trimmedDataArray[0].map(header => ({ header, key: header, width: 20 }));

               // Add data rows
               trimmedDataArray.slice(1).forEach(row => worksheet.addRow(row));

               // Create Blob from workbook
               const buffer = await workbook.xlsx.writeBuffer();
               const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

               // Download file using FileSaver.js
               saveAs(blob, filename);

          } catch (error) {
               toast.error('Đã xảy ra lỗi khi tải file!');
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
                    // required
                    InputLabelProps={{ shrink: true }}
               />
               <Box>
                    <Button
                         type="submit"
                         variant="contained"
                         color="primary"
                         size="small"
                         sx={{ mx: 2 }}
                         startIcon={<SignalCellularAltOutlinedIcon />}
                    >
                         Thống kê
                    </Button>
                    <Button
                         variant="contained"
                         color="success"
                         size="small"
                         onClick={handleDownload}
                         disabled={!dataSubmit.ngaybaocao}
                         startIcon={<DownloadOutlinedIcon />}
                    >
                         Tải về
                    </Button>
               </Box>
          </Box>
     );
};

export default DateSelectorReturnLate;
