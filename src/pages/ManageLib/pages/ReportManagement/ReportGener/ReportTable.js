import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ReportTable = ({ data }) => {
     if (!data) {
          return <h3>Thông tin chưa được cập nhật...</h3>;
     }
     return (
          <TableContainer component={Paper}>
               <Table>
                    <TableHead>
                         <TableRow>
                              <TableCell>Thể Loại</TableCell>
                              <TableCell>Số Lượt Mượn</TableCell>
                              <TableCell>Tỉ Lệ</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {data.thongKeTheoTheLoai.map((row, index) => (
                              <TableRow key={index}>
                                   <TableCell>{row.tenTheLoai}</TableCell>
                                   <TableCell>{row.soLuotMuon}</TableCell>
                                   <TableCell>{row.tiLe}</TableCell>
                              </TableRow>
                         ))}
                         <TableRow>
                              <TableCell colSpan={2}>Tổng Số Lượt Mượn</TableCell>
                              <TableCell>{data.tongSoLuotMuon}</TableCell>
                         </TableRow>
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default ReportTable;
