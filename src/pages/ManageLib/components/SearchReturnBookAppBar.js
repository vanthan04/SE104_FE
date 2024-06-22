import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, MenuItem, Button } from '@mui/material';
import { useReaderContext } from '../../../Context';
import { toast } from 'react-toastify';
import ApiBorrowReturn from '../../../untils/api/BorrowReturn';

const SearchAppBar = ({ title, setDataSearch }) => {
     const { MaDGList } = useReaderContext();
     const [selectedMaDG, setSelectedMaDG] = useState('');

     const handleSelectChange = (event) => {
          setSelectedMaDG(event.target.value);
     };

     const handleButtonClick = async (e) => {
          e.preventDefault();
          try {
               const response = await ApiBorrowReturn.getBookBorrowReturn(selectedMaDG)
               if (response.success) {
                    toast.success('Thành công')
                    setDataSearch(response.data)
               } else {
                    toast.error('Thất bại');
               }
          } catch (error) {
               console.error('Error borrowing book:', error);
               toast.error('Failed to borrow book. Please try again later.'); // Generic error message
          }

     };

     return (
          <AppBar position="static">
               <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                         {title}
                    </Typography>
                    <TextField
                         select
                         variant="outlined"
                         value={selectedMaDG}
                         onChange={handleSelectChange}
                         size="small"
                         sx={{ minWidth: 200, backgroundColor: 'white', borderRadius: 1, mr: 2 }}
                         SelectProps={{
                              displayEmpty: true,
                              renderValue: (value) => (value ? `Selected: ${value}` : 'Select MaDG'),
                         }}
                    >
                         <MenuItem disabled value="">
                              Select MaDG
                         </MenuItem>
                         {MaDGList.map((maDG) => (
                              <MenuItem key={maDG} value={maDG}>
                                   {maDG}
                              </MenuItem>
                         ))}
                    </TextField>
                    <Button variant="contained" color="success" onClick={handleButtonClick}>
                         Search
                    </Button>
               </Toolbar>
          </AppBar>
     );
};

export default SearchAppBar;
