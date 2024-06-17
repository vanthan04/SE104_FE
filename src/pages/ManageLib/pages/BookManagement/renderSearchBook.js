import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const renderSearchBook = ({ data }) => {
     const labels = ['STT', 'Mã Sách', 'Tên sách', 'Thể loại', 'Tác giả', 'Tình trạng'];
     console.log(data)
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
                         {data.map((book, index) => (
                              <TableRow
                                   key={index}
                                   sx={{ backgroundColor: book.isNew ? ' #ccffcc' : '#fff' }}
                              >
                                   <TableCell>{index + 1}</TableCell>
                                   <TableCell>{book.MaSach}</TableCell>
                                   <TableCell>{book.tensach}</TableCell>
                                   <TableCell>{book.theloai}</TableCell>
                                   <TableCell>{book.listtacgia.join(', ')}</TableCell> {/* Hiển thị tác giả */}
                                   <TableCell>{book.tinhtrang}</TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default renderSearchBook;
