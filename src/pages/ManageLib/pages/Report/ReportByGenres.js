import { TextField, Button, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';
import { useState } from 'react';

const ReportByGenres = () => {
    const [thang, setThang] = useState('');
    const [nam, setNam] = useState('')
    const [data, setData] = useState([]);
  
    const handleThangChange = (event) => {
      setThang(event.target.value);
    };
  
    const handleSubmit = () => {
      // Lấy dữ liệu từ form và xử lý để tạo báo cáo
      const newData = [
        // ... dữ liệu báo cáo
      ];
      setData(newData);
    };
  
    return (
      <div>
        <h1>Báo Cáo Thông Kê Tình Hình Mượn Sách Theo Thể Loại</h1>
        <TextField
          id="thang"
          label="Tháng"
          type="month"
          value={thang}
          onChange={handleThangChange}
        />
        <TextField
          id="nam"
          label="Năm"
          type="year"
          value={nam}
          onChange={handleThangChange}
        />
        <Button variant="contained" onClick={handleSubmit}>Tạo báo cáo</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên Thể Loại</TableCell>
              <TableCell>Số Lượt Mượn</TableCell>
              <TableCell>Tỉ Lệ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.tenTheLoai}</TableCell>
                <TableCell>{row.soLuotMuon}</TableCell>
                <TableCell>{row.tiLe}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default ReportByGenres;
  