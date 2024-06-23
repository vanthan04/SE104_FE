import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const RegulationTable = ({ data, keyMapping, units, handleInputChange }) => {
     return (
          <TableContainer component={Paper}>
               <Table>
                    <TableHead>
                         <TableRow>
                              <TableCell>Tên quy định</TableCell>
                              <TableCell>Giá trị</TableCell>
                              <TableCell>Đơn vị</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {Object.keys(data).length > 0 ? (
                              Object.entries(data).map(([key, value]) => (
                                   <TableRow key={key}>
                                        <TableCell component="th" scope="row">
                                             {keyMapping[key]}
                                        </TableCell>
                                        <TableCell>
                                             <TextField
                                                  variant="outlined"
                                                  value={value}
                                                  onChange={(e) => handleInputChange(key, e.target.value)}
                                                  type='number'
                                                  fullWidth
                                             />
                                        </TableCell>
                                        <TableCell>
                                             {units[key]}
                                        </TableCell>
                                   </TableRow>
                              ))
                         ) : (
                              <TableRow>
                                   <TableCell colSpan={3}>Không tìm thấy quy định</TableCell>
                              </TableRow>
                         )}
                    </TableBody>
               </Table>
          </TableContainer>
     );
}

export default RegulationTable;
