import { useState } from 'react'
import {
    Box,
    Table,
    Button,
    TablePagination,
    Tooltip, Paper,
    TableBody,
    TableCell,
    TableHead,
    TableContainer,
    TableRow
}
    from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Popup from '../../../../components/controls/Popup';
import EditReader from './EditReader';

const columns = [
    { id: 'MaDG', label: 'MaDG' },
    { id: 'hoten', label: 'Họ và tên' },
    { id: 'ngaysinh', label: 'Ngày sinh' },
    { id: 'email', label: 'Email' },
    { id: 'loaidocgia', label: 'Loại độc giả' },
    { id: 'diachi', label: 'Địa chỉ' },
    { id: 'ngaylapthe', label: 'Ngày Lập thẻ' },
    { id: 'tongno', label: 'Tổng nợ' }
];

export const TableReaders = (props) => {
    const { data, handleDataSuccess } = props;

    const [openEdit, setOpenEdit] = useState(false)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [dataUserEdit, setDataUserEdit] = useState({})

    const handleEdit = (user) => {
        setOpenEdit(true)
        setDataUserEdit(user)
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <>
            <Box sx={{ height: '100%', width: '100%' }}>
                <TableContainer component={Paper} sx={{ maxHeight: '400px', overflow: 'auto' }}>
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
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row._id}>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align='center'>
                                            {row[column.id]}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Box display='flex'>
                                            <Tooltip title="Edit" arrow placement='top'>
                                                <Button
                                                    variant='contained'
                                                    sx={{ mr: 1 }}
                                                    color='warning'
                                                    onClick={() => handleEdit(row)}
                                                >
                                                    <EditIcon fontSize='small' />
                                                </Button>
                                            </Tooltip>
                                            <Tooltip title="Delete" arrow placement='top'>
                                                <Button
                                                    variant='contained'
                                                    color='error'
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
                    rowsPerPageOptions={[5, 10, 15]}
                />
            </Box>

            <Popup
                title='Form Add Reader'
                openPopup={openEdit}
                setOpenPopup={setOpenEdit}
            >
                <EditReader
                    user={dataUserEdit}
                    editUserSuccess={handleDataSuccess}
                />
            </Popup>
        </>
    );
}