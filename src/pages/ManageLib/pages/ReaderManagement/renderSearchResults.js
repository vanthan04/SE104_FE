import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const renderSearchResults = ({ data }) => {
     const labels = ['Mã ĐG', 'Họ tên', 'Ngày sinh', 'Ngày lập thẻ', 'Email', 'Loại ĐG', 'Địa chỉ'];
     return (
          <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
               <Table>
                    <TableHead>
                         <TableRow>
                              {labels.map((label, index) => (
                                   <TableCell key={index}>{label}</TableCell>
                              ))}
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {data.map((reader, index) => (
                              <TableRow
                                   key={index}
                                   sx={{ backgroundColor: reader.isNew ? ' #ccffcc' : '#fff' }}
                              >
                                   {Object.values(reader).map((value, idx) => (
                                        <TableCell key={idx}>{value}</TableCell>
                                   ))}
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default renderSearchResults;
