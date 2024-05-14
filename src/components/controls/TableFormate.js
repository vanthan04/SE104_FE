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






export const TableFormate = (props) => {
     const { rows } = props
     const columns = Object.keys(rows[0])

     const [page, setPage] = React.useState(0); // Trang bắt đầu từ 0
     const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                                   {/* <TableCell align='center'>ID</TableCell>
                                   <TableCell align='center'>Mã độc giả</TableCell>
                                   <TableCell align='center'>Họ tên</TableCell>
                                   <TableCell align='center'>Ngày sinh</TableCell>
                                   <TableCell align='center'>Loại độc giả</TableCell>
                                   <TableCell align='center'>Email</TableCell>
                                   <TableCell align='center'>Địa chỉ</TableCell>
                                   <TableCell align='center'>Ngày lập thẻ</TableCell>
                                   <TableCell align='center'>Active</TableCell> */}
                                   {columns.map(column => (
                                        <TableCell align='center'>{column}</TableCell>
                                   ))}
                                   <TableCell align='center'>Active</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {(rowsPerPage > 0
                                   ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                   : rows
                              ).map((row) => (
                                   <TableRow key={row.id}>
                                        {columns.map((column) => {
                                             const value = row[column]
                                             return (
                                                  <TableCell align='right'>{value}</TableCell>
                                             )
                                        })}
                                        {/* <TableCell align='right'>{row.id}</TableCell>
                                        <TableCell align='right'>{row.madg}</TableCell>
                                        <TableCell align='right'>{row.hoten}</TableCell>
                                        <TableCell align='right'>{row.ngaysinh}</TableCell>
                                        <TableCell align='right'>{row.loai}</TableCell>
                                        <TableCell align='right'>{row.email}</TableCell>
                                        <TableCell align='right'>{row.diachi}</TableCell>
                                        <TableCell align='right'>{row.ngaylapthe}</TableCell> */}
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
                    rowsPerPageOptions={[5, 10, 15]}
               />
          </Box>
     );
}