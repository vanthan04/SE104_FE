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
    const { data } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
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
                                    <TableCell key={column.id} align='justify'>
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Box display='flex'>
                                        <Tooltip title="Edit" arrow placement='top'>
                                            <Button variant='contained' sx={{ mr: 1 }} color='warning' >
                                                <EditIcon fontSize='small' />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip title="Delete" arrow placement='top'>
                                            <Button variant='contained' color='error'>
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
    );
}
