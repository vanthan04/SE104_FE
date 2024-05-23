import React, { useState } from 'react';
import { Container, Grid, TextField, MenuItem, Button, Alert } from '@mui/material';

const initialFormData = {
  hoten: '',
  loaidocgia: '',
  ngaysinh: '',
  diachi: '',
  email: '',
  ngaylapthe: '',
};

function MyForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(''); // State to store validation errors

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    let hasEmptyFields = false;
    setError(''); // Clear previous errors before re-validation

    // Loop through form fields and check for empty values
    for (const field in formData) {
      if (!formData[field]) {
        hasEmptyFields = true;
        setError('Vui lòng điền đầy đủ các trường.'); // Set general error message
        break; // Exit loop after first empty field is found (optional)
      }
    }

    if (!hasEmptyFields) {
      // Form data is valid, submit the form (replace with your actual submission logic)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {error && <Alert severity="error">{error}</Alert>} {/* Display general error message */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="hoten"
              label="Họ Tên"
              name="hoten"
              value={formData.hoten}
              onChange={handleChange}
              error={error && !formData.hoten} // Set error state for this field
              helperText={error && !formData.hoten && 'Vui lòng nhập Họ Tên'} // Show helper text on error
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant="outlined"
              required
              fullWidth
              id="loaidocgia"
              label="Loại Độc Giả"
              name="loaidocgia"
              value={formData.loaidocgia}
              onChange={handleChange}
              error={error && !formData.loaidocgia} // Set error state for this field
              helperText={error && !formData.loaidocgia && 'Vui lòng chọn Loại Độc Giả'} // Show helper text on error
            >
              <MenuItem value="X">X</MenuItem>
              <MenuItem value="Y">Y</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="ngaysinh"
              label="Ngày Sinh"
              name="ngaysinh"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.ngaysinh}
              onChange={handleChange}
              error={error && !formData.ngaysinh} // Set error state for this field
              helperText={error && !formData.ngaysinh && 'Vui lòng nhập Ngày Sinh'} // Show helper text on error
            />
          </Grid>
          {/* ... other form fields */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Đăng Ký
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default MyForm;
