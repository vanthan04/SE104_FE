import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const ReportReturnLateTable = ({ data }) => {
     if (!data || data.length === 0) {
          return <h4>Thông tin chưa được cập nhật... </h4>
     }
     return (
          <TableContainer component={Paper}>
               <Table>
                    <TableHead>
                         <TableRow>
                              <TableCell>Mã Độc Giả</TableCell>
                              <TableCell>Họ Tên</TableCell>
                              <TableCell>Mã Sách</TableCell>
                              <TableCell>Tên Sách</TableCell>
                              <TableCell>Ngày Mượn</TableCell>
                              <TableCell>Số Ngày Trả Trễ</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {data.map((item, index) => (
                              <TableRow key={index}>
                                   <TableCell>{item.MaDG}</TableCell>
                                   <TableCell>{item.hoten}</TableCell>
                                   <TableCell>{item.MaSach}</TableCell>
                                   <TableCell>{item.tensach}</TableCell>
                                   <TableCell>{item.NgayMuon}</TableCell>
                                   <TableCell>{item.SoNgayTraTre}</TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default ReportReturnLateTable;
