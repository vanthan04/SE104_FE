import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ReportTable = ({ data }) => {
     if (!data || data.tongSoLuotMuon === 0) {
          return <h4>Thông tin không có sẵn</h4>;
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
