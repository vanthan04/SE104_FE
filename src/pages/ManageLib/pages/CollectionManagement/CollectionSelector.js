import React, { useState, useEffect } from 'react';
import { TextField, Box, MenuItem } from '@mui/material';
import { useReaderContext } from '../../../../Context';
import axios from 'axios';

const CollectionSelector = ({ dataSelect, setDataSelect }) => {
     const { MaDGList } = useReaderContext();
     const [loading, setLoading] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setDataSelect((prev) => ({
               ...prev,
               [name]: value
          }));
     };

     useEffect(() => {
          const fetchReaderInfo = async () => {
               if (dataSelect.MaDG) {
                    setLoading(true);
                    try {
                         const response = await axios.get(`/api/searchReader`, {
                              params: { MaDG: dataSelect.MaDG }
                         });
                         setDataSelect((prev) => ({
                              ...prev,
                              hoTen: response.data.hoten
                         }));
                    } catch (error) {
                         console.error('Failed to fetch reader info:', error);
                    } finally {
                         setLoading(false);
                    }
               }
          };

          fetchReaderInfo();
     }, [dataSelect.MaDG]);

     return (
          <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
               <TextField
                    label="Mã Độc Giả"
                    variant="outlined"
                    name="MaDG"
                    value={dataSelect.MaDG}
                    onChange={handleChange}
                    fullWidth
                    select
               >
                    {MaDGList.map((maDG) => (
                         <MenuItem key={maDG} value={maDG}>
                              {maDG}
                         </MenuItem>
                    ))}
               </TextField>
          </Box>
     );
}

export default CollectionSelector;
