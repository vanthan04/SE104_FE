import React, { useState } from 'react';
import {
     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button
} from '@mui/material';
import ApiBorrowReturn from '../../../../../untils/api/BorrowReturn';
import { toast } from 'react-toastify';

const TableLoan = ({ data = [] }) => {
     const [selectedCells, setSelectedCells] = useState([]);
     const [NgayTraThucTe, setNgayTraThucTe] = useState(new Date().toISOString().split('T')[0]);

     const toggleCellSelection = (rowIndex, cellIndex) => {
          const cellIdentifier = `${rowIndex}-${cellIndex}`;
          if (selectedCells.includes(cellIdentifier)) {
               setSelectedCells(selectedCells.filter(cell => cell !== cellIdentifier));
          } else {
               setSelectedCells([...selectedCells, cellIdentifier]);
          }
     };

     const handleReturnBooks = async () => {
          const selectedBooks = [];
          selectedCells.forEach(cell => {
               const [rowIndex, cellIndex] = cell.split('-').map(Number);
               const reader = data[rowIndex];
               const book = reader.DanhSachSach[cellIndex];
               selectedBooks.push({
                    MaSach: book.MaSach,
                    tensach: book.TenSach, // Thêm thông tin 'tensach' vào đối tượng sách
                    NgayMuon: book.NgayMuon,
                    NgayTra: book.NgayTra,
                    TienPhat: book.TienPhat
               });
          });

          const returnOption = {
               hoten: getHoTenFromData(selectedCells[0]), // Lấy họ tên từ dữ liệu
               NgayTraThucTe: NgayTraThucTe,
               danhSachSach: selectedBooks
          };

          try {
               console.log('Check res >>>', returnOption);
               const response = await ApiBorrowReturn.postBookReturn(returnOption);
               console.log('Check res >>>', response);
               if (response.success) {
                    toast.success(response.message);
               } else {
                    toast.error(response.message);
               }
          } catch (error) {
               console.error('Error returning book:', error);
               toast.error('Failed to return book. Please try again later.');
          }
          setSelectedCells([]);
     };

     const getHoTenFromData = (selectedCell) => {
          if (selectedCell) {
               const [rowIndex, cellIndex] = selectedCell.split('-').map(Number);
               const reader = data[rowIndex];
               return reader.HoTenDocGia;
          }
          return '';
     };

     return (
          <div>
               <TableContainer component={Paper}>
                    <Table>
                         <TableHead>
                              <TableRow>
                                   <TableCell>STT</TableCell>
                                   <TableCell>Mã độc giả</TableCell>
                                   <TableCell>Họ tên</TableCell>
                                   <TableCell>Mã sách</TableCell>
                                   <TableCell>Ngày mượn</TableCell>
                                   <TableCell>Số ngày mượn</TableCell>
                                   <TableCell>Ngày trả</TableCell>
                                   <TableCell>Tiền phạt</TableCell>
                                   <TableCell>Trạng thái</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {data.length > 0 ? (
                                   data.map((item, rowIndex) => (
                                        <React.Fragment key={rowIndex}>
                                             <TableRow>
                                                  <TableCell rowSpan={item.DanhSachSach.length + 1}>
                                                       {rowIndex + 1}
                                                  </TableCell>
                                                  <TableCell rowSpan={item.DanhSachSach.length + 1}>
                                                       {item.MaDocGia}
                                                  </TableCell>
                                                  <TableCell rowSpan={item.DanhSachSach.length + 1}>
                                                       {item.HoTenDocGia}
                                                  </TableCell>
                                             </TableRow>
                                             {item.DanhSachSach.map((sach, cellIndex) => (
                                                  <TableRow key={`${rowIndex}-${cellIndex}`}>
                                                       <TableCell key={`MaSach-${rowIndex}-${cellIndex}`}>
                                                            <Checkbox
                                                                 checked={selectedCells.includes(`${rowIndex}-${cellIndex}`)}
                                                                 onChange={() => toggleCellSelection(rowIndex, cellIndex)}
                                                            />
                                                            {sach.MaSach}
                                                       </TableCell>
                                                       <TableCell key={`NgayMuon-${rowIndex}-${cellIndex}`}>{sach.NgayMuon}</TableCell>
                                                       <TableCell key={`SoNgayMuon-${rowIndex}-${cellIndex}`}>{sach.SoNgayMuon}</TableCell>
                                                       <TableCell key={`NgayTra-${rowIndex}-${cellIndex}`}>{sach.NgayTra}</TableCell>
                                                       <TableCell key={`TienPhat-${rowIndex}-${cellIndex}`}>{sach.TienPhat}</TableCell>
                                                  </TableRow>
                                             ))}
                                             <TableRow key={`button-${rowIndex}`}>
                                                  <TableCell rowSpan={item.DanhSachSach.length + 1} align='right'>
                                                       <Button variant="contained" color="primary" onClick={handleReturnBooks}>
                                                            Trả sách
                                                       </Button>
                                                  </TableCell>
                                             </TableRow>
                                        </React.Fragment>
                                   ))
                              ) : (
                                   <TableRow>
                                        <TableCell colSpan={8} align="center">
                                             Không có dữ liệu
                                        </TableCell>
                                   </TableRow>
                              )}
                         </TableBody>
                    </Table>
               </TableContainer>
          </div>
     );
};

export default TableLoan;
