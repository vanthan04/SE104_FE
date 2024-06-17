import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { format } from 'date-fns';
import LoanBookTable from './TableLoanBook';

const LoanBookForm = () => {
  // State để lưu thông tin độc giả và ngày mượn
  const [readerName, setReaderName] = useState('');
  const [loanDate, setLoanDate] = useState(new Date());
  // Function để xử lý khi thay đổi ngày mượn
  const handleLoanDateChange = () => {
    setLoanDate(new Date());
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2, width: '100%' }}>
      <Grid container spacing={2}>
        {/* Phần nội dung */}
        <Grid item xs={12} md={6} fullWidth>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Thông tin mượn sách</Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Tên độc giả"
                variant="outlined"
                value={readerName}
                onChange={(e) => setReaderName(e.target.value)}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Ngày mượn: {format(loanDate, 'dd/MM/yyyy')}</Typography>
              {/* Nút cập nhật ngày mượn */}
              <button onClick={handleLoanDateChange}>Cập nhật ngày mượn</button>
            </Box>
          </Paper>
        </Grid>

        {/* Phần bảng sách */}
        <Grid item xs={12} md={6}>
          <LoanBookTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanBookForm;
