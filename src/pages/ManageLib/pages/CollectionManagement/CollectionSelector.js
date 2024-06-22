import React from 'react';
import { TextField, Box, MenuItem } from '@mui/material';
import { useReaderContext } from '../../../../Context';

const CollectionSelector = ({ dataSelect, setDataSelect }) => {
     const { MaDGList } = useReaderContext();

     const handleChange = (e) => {
          const { name, value } = e.target;
          setDataSelect((prev) => ({
               ...prev,
               [name]: value
          }));
     };

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
