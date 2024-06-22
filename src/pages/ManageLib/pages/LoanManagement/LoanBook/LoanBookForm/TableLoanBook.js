import React from 'react';
import {
     Paper,
     Typography,
     Table,
     TableContainer,
     TableHead,
     TableBody,
     TableRow,
     TableCell,
} from '@mui/material';

const TableLoanBook = ({ books }) => {
     return (
          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
               <Typography variant="h6">Danh sách sách</Typography>
               <TableContainer>
                    <Table sx={{ mt: 2 }}>
                         <TableHead>
                              <TableRow>
                                   <TableCell align="center">STT</TableCell>
                                   <TableCell align="center">Mã sách</TableCell>
                                   <TableCell align="center">Tên sách</TableCell>
                                   <TableCell align="center">Thể loại</TableCell>
                                   <TableCell align="center">Tác giả</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {books.map((book, index) => (
                                   <TableRow key={book._id}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{book.MaSach}</TableCell>
                                        <TableCell align="center">{book.tensach}</TableCell>
                                        <TableCell align="center">{book.theloai}</TableCell>
                                        <TableCell align="center">
                                             <ul>
                                                  {book.tacgia.map((author, index) => (
                                                       <li key={index}>{author}</li>
                                                  ))}
                                             </ul>
                                        </TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          </Paper>
     );
};

export default TableLoanBook;
