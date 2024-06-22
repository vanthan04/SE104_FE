import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CollectionTable = ({ data }) => {
     return (
          <Box sx={{ padding: 2 }}>
               <Paper sx={{ marginBottom: 2, padding: 2 }}>
                    <Typography variant="h6" gutterBottom>Thông tin độc giả</Typography>
                    <Typography><strong>Mã Độc Giả:</strong> {data.MaDG}</Typography>
                    <Typography><strong>Họ Tên:</strong> {data.HoTen}</Typography>
                    <Typography><strong>Email:</strong> {data.email}</Typography>
                    <Typography><strong>Ngày Sinh:</strong> {data.ngaysinh}</Typography>
               </Paper>
               <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
                    <Table>
                         <TableHead>
                              <TableRow>
                                   <TableCell>STT</TableCell>
                                   <TableCell>Tiền Nợ Hiện Tại</TableCell>
                                   <TableCell>Tiền Thu</TableCell>
                                   <TableCell>Ngày Thu</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {data.collectionList.map((item, index) => (
                                   <TableRow key={item._id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.tiennohientai}</TableCell>
                                        <TableCell>{item.tienthu}</TableCell>
                                        <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          </Box>
     );
};

export default CollectionTable;
