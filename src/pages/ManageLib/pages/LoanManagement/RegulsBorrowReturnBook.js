import React, { useEffect, useState } from 'react';
import {
     Box, Paper, TextField, Button
} from '@mui/material';
import ApiReg from '../../../../untils/api/Regulation';
import { toast } from 'react-toastify';

const RegulsBorrowReturnBook = ({ closePopup }) => {
     const [dataReguls, setDataReguls] = useState({
          songaymuontoida: '',
          sosachmuontoida: '',
          tienphatmoingay: ''
     });

     const fetchData = async () => {
          try {
               const response = await ApiReg.getBorrowReturnRule();
               console.log(response)
               if (response.success) {
                    console.log(response)
                    setDataReguls({
                         songaymuontoida: response.data.songaymuontoida || '',
                         sosachmuontoida: response.data.soluongsachmuontoida || '',
                         tienphatmoingay: response.data.tienphatmoingay || ''
                    });
               }
          } catch (error) {
               console.error("Failed to fetch regulation data:", error);
          }
     };

     useEffect(() => {
          fetchData();
     }, []);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setDataReguls({
               ...dataReguls,
               [name]: value
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               console.log(dataReguls)
               const response = await ApiReg.putUpdateBorrowReturnRule(dataReguls);
               if (response.success) {
                    toast.success(response.message)
                    closePopup();
               } else {
                    toast.error(response.message)
                    console.error('Error updating regulations:', response.statusText);
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     return (
          <Box
               sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    backgroundColor: '#f0f0f0',
                    padding: 2,
               }}
          >
               <Paper
                    sx={{
                         padding: 3,
                         width: '400px',
                         boxShadow: 3,
                    }}
               >
                    <Box
                         component="form"
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 2,
                         }}
                         onSubmit={handleSubmit}
                    >
                         <TextField
                              label="Số ngày mượn sách tối đa"
                              name="songaymuontoida"
                              type="number"
                              fullWidth
                              required
                              value={dataReguls.songaymuontoida}
                              onChange={handleChange}
                         />
                         <TextField
                              label="Số lượng sách mượn tối đa"
                              name="sosachmuontoida"
                              type="number"
                              fullWidth
                              required
                              value={dataReguls.sosachmuontoida}
                              onChange={handleChange}
                         />
                         <TextField
                              label="Số tiền phạt mỗi ngày"
                              name="tienphatmoingay"
                              type="number"
                              fullWidth
                              required
                              value={dataReguls.tienphatmoingay}
                              onChange={handleChange}
                         />
                         <Box
                              sx={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   mt: 2,
                              }}
                         >
                              <Button
                                   variant="contained"
                                   color="primary"
                                   type="submit"
                              >
                                   Lưu
                              </Button>
                              <Button
                                   variant="outlined"
                                   color="secondary"
                                   onClick={() => closePopup()}
                              >
                                   Hủy
                              </Button>
                         </Box>
                    </Box>
               </Paper>
          </Box>
     );
};

export default RegulsBorrowReturnBook;
