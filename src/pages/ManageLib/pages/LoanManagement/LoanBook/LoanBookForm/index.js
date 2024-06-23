import React, { useState } from 'react';
import { TextField, Button, Grid, Container, MenuItem } from '@mui/material';
import LoanBookTable from './TableLoanBook';
import { useBookContext, useReaderContext } from '../../../../../../Context'; // Adjust the path as per your project structure
import ApiBorrowReturn from '../../../../../../untils/api/BorrowReturn';
import { toast } from 'react-toastify';

const LoanBook = ({ selectRows, closePopup }) => {
  const { hotenList } = useReaderContext();
  const { handleDataSuccess } = useBookContext();

  const [hoten, setHoten] = useState('');
  const [NgayMuon, setNgayMuon] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Construct the object to send
    const borrowOption = {
      hoten: hoten,
      NgayMuon: NgayMuon,
      danhSachSach: selectRows // Assuming selectRows is passed as a prop correctly
    };

    try {
      const response = await ApiBorrowReturn.postBookBorrow(borrowOption);
      if (response.success) {
        toast.success(response.message);
        handleDataSuccess(); // Update book data after successful borrowing
        closePopup()
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error borrowing book:', error);
      toast.error('Failed to borrow book. Please try again later.'); // Generic error message
    }

    // Reset form after submission (if needed)
    setHoten('');
    setNgayMuon(new Date().toISOString().split('T')[0]);
  };

  const handleCancel = () => {
    // Reset form on cancel
    setHoten('');
    setNgayMuon(new Date().toISOString().split('T')[0]);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Họ tên"
              variant="outlined"
              value={hoten}
              onChange={(e) => setHoten(e.target.value)}
              required
              select
            >
              {hotenList.map((hoten, index) => (
                <MenuItem key={index} value={hoten}>{hoten}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Ngày Mượn"
              variant="outlined"
              type="date"
              value={NgayMuon}
              onChange={(e) => setNgayMuon(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
        <LoanBookTable books={selectRows} />
        <Grid container justifyContent="flex-end" mt={2}>
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
            Xác nhận
          </Button>
          <Button variant="contained" color="error" onClick={handleCancel} style={{ marginLeft: '10px' }}>
            Hủy
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default LoanBook;
