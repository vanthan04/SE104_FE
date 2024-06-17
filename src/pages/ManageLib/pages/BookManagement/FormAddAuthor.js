// src/components/FormAddAuthor.js

import React from 'react';
import { Grid, TextField } from '@mui/material';

const FormAddAuthor = ({ numAuthors, formData, handleChange, error }) => {
     return (
          <>
               <Grid item xs={4}>
                    <TextField
                         variant="outlined"
                         required
                         fullWidth
                         id="numAuthors"
                         label="SL Tác Giả"
                         name="numAuthors"
                         type='number'
                         value={numAuthors}
                         onChange={handleChange}
                         sx={{ minHeight: '80px' }} // Adjust as necessary
                    />
               </Grid>
               {formData.tacgia.map((author, index) => (
                    <Grid item xs={12} key={index}>
                         <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id={`tacgia_${index}`}
                              label={`Tác Giả ${index + 1}`}
                              name={`tacgia_${index}`}
                              value={author}
                              onChange={handleChange}
                              error={error.tacgia[index]}
                              helperText={error.tacgia[index] ? 'Vui lòng nhập tác giả' : ''}
                              FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                              sx={{ minHeight: '80px' }} // Adjust as necessary
                         />
                    </Grid>
               ))}
          </>
     );
};

export default FormAddAuthor;
