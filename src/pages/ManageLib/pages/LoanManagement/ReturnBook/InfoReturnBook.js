import React, { useState } from 'react';
import {
     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Typography
} from '@mui/material';
import ApiBorrowReturn from '../../../../../untils/api/BorrowReturn';
import { toast } from 'react-toastify';

const TableLoan = ({ data = [], refetchData }) => {
     const [selectedCells, setSelectedCells] = useState([]);
     const NgayTraThucTe = new Date().toISOString().split('T')[0];

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
               const response = await ApiBorrowReturn.postBookReturn(returnOption);
               if (response.success) {
                    toast.success(response.message);
                    refetchData(data[0].MaDocGia); // Call refetchData to refresh the data
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
               const [rowIndex] = selectedCell.split('-').map(Number);
               const reader = data[rowIndex];
               return reader.HoTenDocGia;
          }
          return '';
     };

     return (
          <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
               {data.length > 0 && (
                    <Paper sx={{ marginBottom: 2, padding: 2 }}>
                         <Typography variant="h6" gutterBottom>Thông tin độc giả</Typography>
                         <Typography><strong>Mã Độc Giả:</strong> {data[0].MaDocGia}</Typography>
                         <Typography><strong>Họ Tên:</strong> {data[0].HoTenDocGia}</Typography>
                         <Typography><strong>Tổng nợ:</strong> {data[0].TongNo}</Typography>
                    </Paper>
               )}
               <TableContainer component={Paper}>
                    <Table>
                         <TableHead>
                              <TableRow>
                                   <TableCell></TableCell>
                                   <TableCell>STT</TableCell>
                                   <TableCell>Mã sách</TableCell>
                                   <TableCell>Tên sách</TableCell>
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
                                             {item.DanhSachSach.map((sach, cellIndex) => {
                                                  const isBorrowed = sach.SoNgayMuon === null || sach.NgayTra === null;
                                                  return (
                                                       <TableRow key={`${rowIndex}-${cellIndex}`}>
                                                            <TableCell padding="checkbox">
                                                                 <Checkbox
                                                                      checked={selectedCells.includes(`${rowIndex}-${cellIndex}`)}
                                                                      onChange={() => toggleCellSelection(rowIndex, cellIndex)}
                                                                 />
                                                            </TableCell>
                                                            <TableCell>{cellIndex + 1}</TableCell>
                                                            <TableCell>{sach.MaSach}</TableCell>
                                                            <TableCell>{sach.TenSach}</TableCell>
                                                            <TableCell>{sach.NgayMuon}</TableCell>
                                                            <TableCell>{sach.SoNgayMuon}</TableCell>
                                                            <TableCell>{sach.NgayTra}</TableCell>
                                                            <TableCell>{sach.TienPhat}</TableCell>
                                                            <TableCell style={{ color: isBorrowed ? 'red' : 'green' }}>
                                                                 {isBorrowed ? 'Đang mượn' : 'Đã trả'}
                                                            </TableCell>
                                                       </TableRow>
                                                  );
                                             })}
                                             <TableRow key={`button-${rowIndex}`}>
                                                  <TableCell colSpan={9} align='right'>
                                                       <Button variant="contained" color="primary" onClick={handleReturnBooks}>
                                                            Trả sách
                                                       </Button>
                                                  </TableCell>
                                             </TableRow>
                                        </React.Fragment>
                                   ))
                              ) : (
                                   <TableRow>
                                        <TableCell colSpan={9} align="center">
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
