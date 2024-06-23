import React, { useState, useEffect, useCallback } from 'react';
import {
    Box, Table, Button, TablePagination, Tooltip, Paper,
    TableBody, TableCell, TableHead, TableContainer, TableRow, Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReportIcon from '@mui/icons-material/Report';

import { Popup } from '../../../../components/controls';
import { useReaderContext } from '../../../../Context';

import EditReader from './EditReader';
import ConfirmDeleteReader from './ConfirmDeleteReader';
import FormAddCollection from '../CollectionManagement/FormAddCollection';

const columns = [
    { id: 'MaDG', label: 'MaDG' },
    { id: 'hoten', label: 'Họ và tên' },
    { id: 'ngaysinhtoShow', label: 'Ngày sinh' },
    { id: 'email', label: 'Email' },
    { id: 'loaidocgia', label: 'Loại độc giả' },
    { id: 'diachi', label: 'Địa chỉ' },
    { id: 'ngaylapthetoShow', label: 'Ngày Lập thẻ' },
    { id: 'tongno', label: 'Tổng nợ' },
    { id: 'isLocked', label: 'Trạng thái' }
];

export const TableReaders = ({ dataSearch }) => {
    const { data } = useReaderContext();
    const [searchData, setSearchData] = useState(data);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openUserCollection, setOpenUserCollection] = useState(false)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [dataUserEdit, setDataUserEdit] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState();

    const [dataUserCollection, setDataUserCollection] = useState({})



    const updateTableData = useCallback(() => {
        if (dataSearch.length > 0) {
            setSearchData(dataSearch);
        }
    }, [dataSearch]);

    useEffect(() => {
        updateTableData();
    }, [dataSearch, updateTableData]);

    useEffect(() => {
        setSearchData(data)
    }, [data])

    const handleDelete = (madg) => {
        setOpenDelete(true);
        setDataUserDelete(madg);
    };

    const handleEdit = (user) => {
        setOpenEdit(true);
        setDataUserEdit(user);
    };

    const handleCollection = (user) => {
        setDataUserCollection(user)
        setOpenUserCollection(true)
    }

    const handleClosePopup = () => {
        setOpenDelete(false);
        setOpenEdit(false);
        setOpenUserCollection(false)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, searchData.length - page * rowsPerPage);

    return (
        <>
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
                                <TableCell align='center'>Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {searchData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow key={`${row._id} - ${index}`}>
                                    {columns.map((column) => (
                                        <TableCell key={`${row._id}-${column.id}`} align='center'>
                                            {column.id === 'isLocked' ? (
                                                <Tooltip title={row.isLocked ? row.reasonLocked : ''}>
                                                    <Typography color={row[column.id] ? 'error' : 'green'}>
                                                        {row[column.id] ? 'Đã khóa' : 'Đang hoạt động'}
                                                    </Typography>
                                                </Tooltip>
                                            ) : (
                                                row[column.id]
                                            )}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Box display='flex' justifyContent='center'>
                                            <Tooltip title="Chỉnh sửa độc giả" arrow placement='top'>
                                                <Button
                                                    variant='contained'
                                                    sx={{ mr: 1 }}
                                                    color='warning'
                                                    onClick={() => handleEdit(row)}
                                                >
                                                    <EditIcon fontSize='small' />
                                                </Button>
                                            </Tooltip>
                                            <Tooltip title="Xóa độc giả" arrow placement='top'>
                                                <Button
                                                    variant='contained'
                                                    color='error'
                                                    onClick={() => handleDelete(row.MaDG)}
                                                    sx={{ mr: 1 }}
                                                >
                                                    <DeleteIcon fontSize='small' />
                                                </Button>
                                            </Tooltip>
                                            <Tooltip title="Lập phiếu phạt" arrow placement='top'>
                                                <Button
                                                    variant='contained'
                                                    color='primary'
                                                    onClick={() => handleCollection(row)}
                                                >
                                                    <ReportIcon fontSize='small' />
                                                </Button>
                                            </Tooltip>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                Array.from(Array(emptyRows)).map((_, index) => (
                                    <TableRow key={`empty-${index}`} style={{ height: 53 }}>
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
            </Box>

            <Popup
                title='Chỉnh sửa độc giả'
                openPopup={openEdit}
                setOpenPopup={setOpenEdit}
            >
                <EditReader
                    user={dataUserEdit}
                    closePopup={handleClosePopup}
                />
            </Popup>

            <Popup
                title='Xác nhận'
                openPopup={openDelete}
                setOpenPopup={setOpenDelete}
            >
                <ConfirmDeleteReader
                    MaDG={dataUserDelete}
                    closePopup={handleClosePopup}
                />
            </Popup>

            <Popup
                title='Lập phiếu thu tiền phạt'
                openPopup={openUserCollection}
                setOpenPopup={setOpenUserCollection}
            >
                <FormAddCollection
                    data={dataUserCollection}
                    closePopup={handleClosePopup}
                />
            </Popup>
        </>
    );
}
