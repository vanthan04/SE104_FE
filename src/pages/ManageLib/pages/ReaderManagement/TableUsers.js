import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TablePagination, styled } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const rows = [
     { id: 1, madg: 'Snow1', hoten: 'Jon1', ngaysinh: '01/01/2004', loai: 'X', diachi: '1', email: 'test1@gmail.com', ngaylapthe: '01/01/2024' },
     { id: 2, madg: 'Snow2', hoten: 'Jon2', ngaysinh: '02/01/2004', loai: 'Y', diachi: '2', email: 'test2@gmail.com', ngaylapthe: '02/02/2024' },
     { id: 3, madg: 'Snow3', hoten: 'Jon3', ngaysinh: '03/01/2004', loai: 'Y', diachi: '3', email: 'test3@gmail.com', ngaylapthe: '12/03/2024' },
     { id: 4, madg: 'Snow4', hoten: 'Jon4', ngaysinh: '04/01/2004', loai: 'X', diachi: '4', email: 'test4@gmail.com', ngaylapthe: '12/04/2024' },
     { id: 5, madg: 'Snow5', hoten: 'Jon5', ngaysinh: '05/01/2004', loai: 'Y', diachi: '5', email: 'test5@gmail.com', ngaylapthe: '12/05/2024' },
     { id: 6, madg: 'Snow6', hoten: 'Jon6', ngaysinh: '06/01/2004', loai: 'X', diachi: '6', email: 'test6@gmail.com', ngaylapthe: '12/06/2024' },
     { id: 7, madg: 'Snow7', hoten: 'Jon7', ngaysinh: '07/01/2004', loai: 'Y', diachi: '7', email: 'test7@gmail.com', ngaylapthe: '12/07/2024' },
     { id: 8, madg: 'Snow8', hoten: 'Jon8', ngaysinh: '08/01/2004', loai: 'X', diachi: '8', email: 'test8@gmail.com', ngaylapthe: '12/08/2024' },
     { id: 9, madg: 'Snow9', hoten: 'Jon9', ngaysinh: '09/01/2004', loai: 'Y', diachi: '9', email: 'test9@gmail.com', ngaylapthe: '12/09/2024' },
     { id: 10, madg: 'Snow10', hoten: 'Jon10', ngaysinh: '10/01/2004', loai: 'X', diachi: '10', email: 'test10@gmail.com', ngaylapthe: '12/10/2024' },
     { id: 11, madg: 'Snow11', hoten: 'Jon11', ngaysinh: '11/01/2004', loai: 'Y', diachi: '11', email: 'test11@gmail.com', ngaylapthe: '12/11/2024' },
     { id: 12, madg: 'Snow12', hoten: 'Jon12', ngaysinh: '12/01/2004', loai: 'X', diachi: '12', email: 'test12@gmail.com', ngaylapthe: '12/12/2024' },
];

export const TableUser = () => {
     const [page, setPage] = React.useState(0); // Trang bắt đầu từ 0
     const [rowsPerPage, setRowsPerPage] = React.useState(5);

     const rowsPerPageOptions = [5, 10, 15];

     const handleChangePage = (event, newPage) => {
          setPage(newPage);
     };

     const handleChangeRowsPerPage = (event) => {
          console.log(event)
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
     };

     const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

     return (
          <Box sx={{ height: "100%", width: '100%' }}>
               <TableContainer component={Paper} sx={{ maxHeight: 'sm', overflow: 'auto' }}>
                    <Table>
                         <TableHead>
                              <TableRow>
                                   <TableCell align='center'>ID</TableCell>
                                   <TableCell align='center'>Mã độc giả</TableCell>
                                   <TableCell align='center'>Họ tên</TableCell>
                                   <TableCell align='center'>Ngày sinh</TableCell>
                                   <TableCell align='center'>Loại độc giả</TableCell>
                                   <TableCell align='center'>Email</TableCell>
                                   <TableCell align='center'>Địa chỉ</TableCell>
                                   <TableCell align='center'>Ngày lập thẻ</TableCell>
                                   <TableCell align='center'>Active</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {(rowsPerPage > 0
                                   ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                   : rows
                              ).map((row) => (
                                   <TableRow key={row.id}>
                                        <TableCell align='right'>{row.id}</TableCell>
                                        <TableCell align='right'>{row.madg}</TableCell>
                                        <TableCell align='right'>{row.hoten}</TableCell>
                                        <TableCell align='right'>{row.ngaysinh}</TableCell>
                                        <TableCell align='right'>{row.loai}</TableCell>
                                        <TableCell align='right'>{row.email}</TableCell>
                                        <TableCell align='right'>{row.diachi}</TableCell>
                                        <TableCell align='right'>{row.ngaylapthe}</TableCell>
                                        <TableCell>
                                             <Button
                                                  variant='contained'
                                                  sx={{ mx: 2 }} color='warning'
                                             >
                                                  <EditIcon />
                                             </Button>
                                             <Button
                                                  variant='contained'
                                                  color='error'
                                             >
                                                  <DeleteIcon />
                                             </Button>
                                        </TableCell>
                                   </TableRow>
                              ))}
                              {emptyRows > 0 && (
                                   <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={9} />
                                   </TableRow>
                              )}
                         </TableBody>
                    </Table>
               </TableContainer>
               <TablePagination
                    component="div"
                    count={rows.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={rowsPerPageOptions}
               />
          </Box>
     );
}