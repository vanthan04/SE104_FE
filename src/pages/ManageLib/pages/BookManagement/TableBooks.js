import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
     Box, Table, Button, TablePagination, Tooltip, Paper, TableBody,
     TableCell, TableHead, TableContainer, TableRow, Checkbox
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBookContext } from '../../../../Context';
import Popup from '../../../../components/controls/Popup';
import ConfirmDeleteBook from './ConfirmDeleteBook';

const columns = [
     { id: 'checkbox', label: '', disableSorting: true }, // Cột checkbox
     { id: 'stt', label: 'STT' },
     { id: 'MaSach', label: 'Mã Sách' },
     { id: 'tensach', label: 'Tên Sách' },
     { id: 'theloai', label: 'Thể loại' },
     { id: 'tacgia', label: 'Tác giả' },
     { id: 'tinhtrang', label: 'Tình trạng' }
];

export const TableBooks = ({ dataSearch }) => {
     const { data = [] } = useBookContext(); // Lấy dữ liệu sách từ context
     const [searchData, setSearchData] = useState(data);
     const [openDelete, setOpenDelete] = useState(false);
     const [page, setPage] = useState(0);
     const [rowsPerPage, setRowsPerPage] = useState(10);
     const [dataBookDelete, setDataBookDelete] = useState();
     const [selectedRows, setSelectedRows] = useState([]); // Trạng thái lưu trữ các hàng đã chọn

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

     const handleSelectRow = (row) => {
          setSelectedRows(prevSelected => {
               if (prevSelected.some(selectedRow => selectedRow._id === row._id)) {
                    return prevSelected.filter(selectedRow => selectedRow._id !== row._id);
               } else {
                    return [...prevSelected, row];
               }
          });
     };
     
     const getStatusColor = (status) => {
          return status === 'Còn Trống' ? 'green' : 'red';
     };
     const prevDataLength = useRef(data.length);

     const updateTableData = useCallback(() => {
          if (data.length !== prevDataLength.current) {
               setSearchData(data);
          } else if (dataSearch.length > 0) {
               setSearchData(dataSearch);
          }
          prevDataLength.current = data.length;
     }, [dataSearch, data]);

     useEffect(() => {
          updateTableData();
     }, [dataSearch, data, updateTableData]);

     const emptyRows = rowsPerPage - Math.min(rowsPerPage, searchData.length - page * rowsPerPage);

     return (
          <Box sx={{ minHeight: '500px', width: '100%' }}>
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
                              {searchData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                   <TableRow key={row._id}>
                                        <TableCell padding="checkbox">
                                             <Checkbox
                                                  checked={selectedRows.some(selectedRow => selectedRow._id === row._id)}
                                                  onChange={() => handleSelectRow(row)}
                                             />
                                        </TableCell>
                                        <TableCell align='center'>{page * rowsPerPage + index + 1}</TableCell>
                                        {columns.slice(2).map((column) => ( // Bỏ qua cột checkbox
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
                                   Array.from(Array(emptyRows)).map((_, index) => (
                                        <TableRow key={`empty-${index}`} style={{ height: 53 }}>
                                             <TableCell padding="checkbox" />
                                             <TableCell colSpan={columns.length + 1} />
                                        </TableRow>
                                   ))
                              )}
                         </TableBody>
                    </Table>
               </TableContainer>
               <TablePagination
                    component="div"
                    count={searchData.length}
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
