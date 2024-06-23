import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import RegulationTable from '../../components/RegulationTable'; // Đảm bảo rằng đường dẫn đúng đến file RegulationTable
import ApiReg from '../../../../untils/api/Regulation';
import { useReaderContext } from '../../../../Context';
const RegReader = ({ closePopup }) => {
     const { handleDataSuccess } = useReaderContext()
     const [dataRegReader, setDataRegReader] = useState({
          tuoitoithieu: '',
          tuoitoida: '',
          giatrithe: ''
     });

     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = async () => {
          try {
               const response = await ApiReg.getReaderRule();
               if (response.data && response.success) {
                    setDataRegReader(response.data);
               } else {
                    toast.error(response.message);
               }
          } catch (error) {
               console.error('Error fetching data:', error);
               toast.error('Error fetching data');
          }
     };

     const handleInputChange = (key, value) => {
          setDataRegReader(prevState => ({
               ...prevState,
               [key]: value
          }));
     };

     const keyMapping = {
          tuoitoithieu: 'Tuổi tối thiểu',
          tuoitoida: 'Tuổi tối đa',
          giatrithe: 'Giá trị thẻ'
     };

     const units = {
          tuoitoithieu: 'tuổi',
          tuoitoida: 'tuổi',
          giatrithe: 'tháng'
     };

     const handleUpdateRegReader = async (e) => {
          e.preventDefault();
          try {
               const response = await ApiReg.updateReaderRule(dataRegReader);
               if (response.success) {
                    toast.success(response.message);
                    handleDataSuccess()
                    closePopup()
               } else {
                    toast.error(response.message);
               }
          } catch (error) {
               console.error('Error updating data:', error);
               toast.error('Error updating data');
          }
     };

     return (
          <Box component='reg-reader'>
               <RegulationTable
                    data={dataRegReader}
                    keyMapping={keyMapping}
                    units={units}
                    handleInputChange={handleInputChange}
               />
               <Box display='flex' justifyContent='center' mt={2}>
                    <Button
                         variant='contained'
                         color='error'
                         sx={{ mx: '10px' }}
                         onClick={closePopup}
                    >
                         Hủy
                    </Button>
                    <Button
                         variant='contained'
                         color='success'
                         sx={{ mx: '10px' }}
                         onClick={handleUpdateRegReader}
                    >
                         Cập nhật
                    </Button>
               </Box>
          </Box>
     );
}

export default RegReader;
