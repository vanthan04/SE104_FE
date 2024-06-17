import React, { useState } from 'react';
import {
     Box, Table, Button, TablePagination, Tooltip, Paper, TableBody,
     TableCell, TableHead, TableContainer, TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBookContext } from '../../../../Context';
import Popup from '../../../../components/controls/Popup';
import ConfirmDeleteBook from './ConfirmDeleteBook';

const columns = [
     { id: 'stt', label: 'STT' },
     { id: 'MaSach', label: 'Mã Sách' },
     { id: 'tensach', label: 'Tên Sách' },
     { id: 'theloai', label: 'Thể loại' },
     { id: 'tacgia', label: 'Tác giả' },
     { id: 'tinhtrang', label: 'Tình trạng' }
];

export const TableBooks = () => {
     const { data = [] } = useBookContext(); // Lấy dữ liệu sách từ context

     const [openDelete, setOpenDelete] = useState(false);
     const [page, setPage] = useState(0);
     const [rowsPerPage, setRowsPerPage] = useState(10);
     const [dataBookDelete, setDataBookDelete] = useState();

     const handleDelete = (MaSach) => {
          setDataBookDelete(MaSach);
          setOpenDelete(true);
     };

     const handleClosePopup = () => {
          setOpenDelete(false);
     };

     const handleChangePage = (event, newPage) => {
          setPage(newPage);
     };

     const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
     };

     const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

     const getStatusColor = (status) => {
          return status === 'Còn Trống' ? 'green' : 'red';
     };

     return (
          <Box sx={{ height: '500px', width: '100%' }}>
               <TableContainer component={Paper} sx={{ maxHeight: '480px', overflow: 'auto' }}>
                    <Table stickyHeader>
                         <TableHead>
                              <TableRow>
                                   {columns.map((column) => (
                                        <TableCell key={column.id} align='center'>
                                             {column.label}
                                        </TableCell>
                                   ))}
                                   <TableCell align='center'>Actions</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                   <TableRow key={row._id}>
                                        <TableCell align='center'>{page * rowsPerPage + index + 1}</TableCell>
                                        {columns.slice(1).map((column) => (
                                             <TableCell
                                                  key={`${row._id}-${column.id}`}
                                                  align='center'
                                                  style={column.id === 'tinhtrang' ? { color: getStatusColor(row[column.id]) } : {}}
                                             >
                                                  {column.id === 'tacgia'
                                                       ? row[column.id].join(', ')
                                                       : row[column.id]}
                                             </TableCell>
                                        ))}
                                        <TableCell>
                                             <Box display='flex' justifyContent='center'>
                                                  <Tooltip title="Delete" arrow placement='top'>
                                                       <Button
                                                            variant='contained'
                                                            color='error'
                                                            onClick={() => handleDelete(row.MaSach)}
                                                       >
                                                            <DeleteIcon fontSize='small' />
                                                       </Button>
                                                  </Tooltip>
                                             </Box>
                                        </TableCell>
                                   </TableRow>
                              ))}
                              {emptyRows > 0 && (
                                   <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={columns.length + 1} />
                                   </TableRow>
                              )}
                         </TableBody>
                    </Table>
               </TableContainer>
               <TablePagination
                    component="div"
                    count={data.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[10, 15, 20]}
               />
               <Popup
                    title='Xác nhận'
                    openPopup={openDelete}
                    setOpenPopup={setOpenDelete}
               >
                    <ConfirmDeleteBook
                         MaSach={dataBookDelete}
                         closePopup={handleClosePopup}
                    />
               </Popup>
          </Box>
     );
};
