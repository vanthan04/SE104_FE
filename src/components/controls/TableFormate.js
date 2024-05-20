import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TablePagination, Tooltip } from '@mui/material';

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
          <Box sx={{ height: '100%', width: '100%' }}>
               <TableContainer component={Paper} sx={{ maxHeight: '400px', overflow: 'auto' }}>
                    <Table>
                         <TableHead>
                              <TableRow>
                                   {columns.map((column, index) => (
                                        <TableCell key={index + 'column'} align='center'>{column}</TableCell>
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
                                        {columns.map((column, index) => {
                                             const value = row[column]
                                             return (
                                                  <TableCell key={index + 'column'} align='right'>{value}</TableCell>
                                             )
                                        })}
                                        <TableCell align='center'>
                                             <Tooltip title="Edit" arrow placement='top'>
                                                  <Button
                                                       variant='contained'
                                                       sx={{ mr: 2 }} color='warning'
                                                  >
                                                       <EditIcon />
                                                  </Button>
                                             </Tooltip>
                                             <Tooltip title="Delete" arrow placement='top'>
                                                  <Button
                                                       variant='contained'
                                                       color='error'
                                                  >
                                                       <DeleteIcon />
                                                  </Button>
                                             </Tooltip>
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