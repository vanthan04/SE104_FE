import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';
import ApiReport from '../../../../../untils/api/Report';
import { saveAs } from 'file-saver';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
const ExcelJS = require('exceljs');

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

     const validateFields = () => {
          if (!dataSubmit.month || !dataSubmit.year) {
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
               const response = await ApiReport.getInfoByMonth(dataSubmit);
               if (response.data.tongSoLuotMuon === 0) {
                    toast.warning('Chưa có thống kê về thể loại sách');
                    return;
               }
               setData(response.data);
          } catch (error) {
               toast.error('Failed to fetch data');
          }
     };

     const handleDownload = async () => {
          if (!validateFields()) {
               return;
          }

          try {
               const response = await ApiReport.downloadInfoByMonth(dataSubmit);

               if (!response.success) {
                    toast.error(response.message);
               }

               let filename = `Báo cáo sách mượn sách tháng ${dataSubmit.month}/${dataSubmit.year}.xlsx`;

               const workbook = new ExcelJS.Workbook();
               const worksheet = workbook.addWorksheet('Báo cáo');

               const csvData = response.split('\n');
               const dataArray = csvData.map(row => row.split(','));

               const trimmedDataArray = dataArray.map(row => row.map(cell => cell.trim().replace(/^"(.+(?="$))"$/, '$1')));

               worksheet.columns = trimmedDataArray[0].map(header => ({ header, key: header, width: 20 }));

               trimmedDataArray.slice(1).forEach(row => worksheet.addRow(row));

               const buffer = await workbook.xlsx.writeBuffer();
               const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

               saveAs(blob, filename);

          } catch (error) {
               console.log(error);
               toast.error('Đã xảy ra lỗi khi tải file!');
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
                         disabled={!dataSubmit.month || !dataSubmit.year}
                         startIcon={<DownloadOutlinedIcon />}
                    >
                         Tải về
                    </Button>
               </Box>
          </Box>
     );
};

export default DateSelector;
