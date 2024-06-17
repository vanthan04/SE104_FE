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

const LoanBookTable = () => {
     // Sample books data
     const books = [
          { stt: 1, maSach: 'MS001', tenSach: 'Sách A', theLoai: 'Thể loại A', tacGia: ['Tác giả A1', 'Tác giả A2'] },
          { stt: 2, maSach: 'MS002', tenSach: 'Sách B', theLoai: 'Thể loại B', tacGia: ['Tác giả B1'] },
          { stt: 3, maSach: 'MS003', tenSach: 'Sách C', theLoai: 'Thể loại C', tacGia: ['Tác giả C1', 'Tác giả C2', 'Tác giả C3'] },
          { stt: 4, maSach: 'MS004', tenSach: 'Sách D', theLoai: 'Thể loại D', tacGia: ['Tác giả D1'] },
     ];

     return (
          <Paper elevation={3} sx={{ p: 2 }}>
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
                              {books.map((book) => (
                                   <TableRow key={book.maSach}>
                                        <TableCell align="center">{book.stt}</TableCell>
                                        <TableCell align="center">{book.maSach}</TableCell>
                                        <TableCell align="center">{book.tenSach}</TableCell>
                                        <TableCell align="center">{book.theLoai}</TableCell>
                                        <TableCell align="center">
                                             <ul>
                                                  {book.tacGia.map((author, index) => (
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

export default LoanBookTable;
