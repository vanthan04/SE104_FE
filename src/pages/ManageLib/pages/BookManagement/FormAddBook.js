import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useBookContext } from '../../../../Context';
import ApiBook from '../../../../untils/api/Book';
import FormAddAuthor from './FormAddAuthor'; // Import component mới

// Component FormAddBook
const FormAddBook = ({ closePopup }) => {
     // Lấy các hàm và dữ liệu cần thiết từ context
     const { handleDataSuccess, bookGenres } = useBookContext();
     // Khởi tạo state để lưu dữ liệu form
     const [formData, setFormData] = useState({
          tensach: '',
          theloai: '',
          tacgia: [''], // Khởi tạo là mảng để lưu nhiều tác giả
          namxuatban: '',
          nhaxuatban: '',
          ngaynhap: '',
          trigia: ''
     });

     // Khởi tạo state để theo dõi số lượng tác giả
     const [numAuthors, setNumAuthors] = useState(1);

     // Khởi tạo state để theo dõi lỗi
     const [error, setError] = useState({
          tensach: false,
          theloai: false,
          tacgia: [false], // Khởi tạo là mảng để theo dõi lỗi của nhiều tác giả
          namxuatban: false,
          nhaxuatban: false,
          ngaynhap: false,
          trigia: false
     });

     // Hàm xử lý khi có thay đổi trong form
     const handleChange = (e) => {
          const { name, value } = e.target;
          if (name === 'numAuthors') {
               // Nếu thay đổi số lượng tác giả
               const newNumAuthors = parseInt(value, 10);
               setNumAuthors(newNumAuthors);
               setFormData({
                    ...formData,
                    tacgia: Array(newNumAuthors).fill(""),
               });
               setError({
                    ...error,
                    tacgia: Array(newNumAuthors).fill(false),
               });
          } else if (name.startsWith('tacgia')) {
               // Nếu thay đổi thông tin tác giả
               const index = parseInt(name.split('_')[1], 10);
               const newAuthors = [...formData.tacgia];
               newAuthors[index] = value;
               setFormData({
                    ...formData,
                    tacgia: newAuthors,
               });
               const newAuthorErrors = [...error.tacgia];
               newAuthorErrors[index] = false;
               setError({
                    ...error,
                    tacgia: newAuthorErrors,
               });
          } else {
               // Nếu thay đổi các trường khác
               setFormData({
                    ...formData,
                    [name]: value,
               });
               setError({
                    ...error,
                    [name]: false
               });
          }
     };

     // Hàm xử lý khi submit form
     const handleSubmit = async (e) => {
          e.preventDefault();
          // Kiểm tra validation
          let hasEmptyFields = false;
          let newFieldErrors = { ...error };
          const newAuthorErrors = formData.tacgia.map((author) => {
               if (!author) {
                    hasEmptyFields = true;
                    return true;
               }
               return false;
          });
          if (numAuthors === 0) {
               toast.error('Phải có ít nhất một tác giả!')
               return
          }

          for (const field in formData) {
               if (field !== 'tacgia' && !formData[field]) {
                    hasEmptyFields = true;
                    newFieldErrors[field] = true;
               }
          }

          if (hasEmptyFields) {
               setError({ ...newFieldErrors, tacgia: newAuthorErrors });
               return;
          }


          // Gọi API để thêm sách mới
          let response = await ApiBook.createNewBook(formData);
          if (response && response.success) {
               toast.success(`${response.message}`); // Thông báo thành công
               handleDataSuccess(); // Cập nhật lại dữ liệu của table khi thêm thành công
               closePopup()
               setFormData({
                    tensach: '',
                    theloai: '',
                    tacgia: [],
                    namxuatban: '',
                    nhaxuatban: '',
                    ngaynhap: '',
                    trigia: ''
               });
               setNumAuthors(1);
          } else {
               toast.error(`${response.message}`); // Thông báo lỗi
          }
     };


     return (
          <Container component="main" maxWidth="xs">
               <form onSubmit={handleSubmit}>
                    <Grid container spacing={1} mt={1}>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="tensach"
                                   label="Tên Sách"
                                   name="tensach"
                                   value={formData.tensach}
                                   onChange={handleChange}
                                   error={error.tensach}
                                   helperText={error.tensach ? 'Vui lòng nhập tên sách' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Điều chỉnh nếu cần thiết
                              />
                         </Grid>
                         <Grid item xs={8}>
                              <TextField
                                   select // Thêm prop select để tạo dropdown
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="theloai"
                                   label="Thể Loại"
                                   name="theloai"
                                   value={formData.theloai}
                                   onChange={handleChange}
                                   error={error.theloai}
                                   helperText={error.theloai ? 'Vui lòng chọn thể loại' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Điều chỉnh nếu cần thiết
                              >
                                   {bookGenres.map((genre) => (
                                        <MenuItem key={genre} value={genre}>
                                             {genre}
                                        </MenuItem>
                                   ))}
                              </TextField>
                         </Grid>

                         <FormAddAuthor
                              numAuthors={numAuthors}
                              formData={formData}
                              handleChange={handleChange}
                              error={error}
                         />

                         <Grid item xs={6}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="namxuatban"
                                   label="Năm Xuất Bản"
                                   name="namxuatban"
                                   type='number'
                                   value={formData.namxuatban}
                                   onChange={handleChange}
                                   error={error.namxuatban}
                                   helperText={error.namxuatban ? 'Vui lòng nhập năm xuất bản' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Điều chỉnh nếu cần thiết
                              />
                         </Grid>
                         <Grid item xs={6}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="nhaxuatban"
                                   label="Nhà Xuất Bản"
                                   name="nhaxuatban"
                                   value={formData.nhaxuatban}
                                   onChange={handleChange}
                                   error={error.nhaxuatban}
                                   helperText={error.nhaxuatban ? 'Vui lòng nhập nhà xuất bản' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Điều chỉnh nếu cần thiết
                              />
                         </Grid>
                         <Grid item xs={6}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="ngaynhap"
                                   label="Ngày Nhập"
                                   name="ngaynhap"
                                   type='date'
                                   InputLabelProps={{ shrink: true }}
                                   value={formData.ngaynhap}
                                   onChange={handleChange}
                                   error={error.ngaynhap}
                                   helperText={error.ngaynhap ? 'Vui lòng nhập ngày nhập' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Điều chỉnh nếu cần thiết
                              />
                         </Grid>
                         <Grid item xs={6}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="trigia"
                                   label="Trị Giá"
                                   name="trigia"
                                   type='number'
                                   value={formData.trigia}
                                   onChange={handleChange}
                                   error={error.trigia}
                                   helperText={error.trigia ? 'Vui lòng nhập trị giá' : ''}
                                   FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                                   sx={{ minHeight: '80px' }} // Điều chỉnh nếu cần thiết
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <Button
                                   type="submit"
                                   fullWidth
                                   variant="contained"
                                   color="primary"
                              >
                                   Thêm Sách
                              </Button>
                         </Grid>
                    </Grid>
               </form>
          </Container>
     );
};

export default FormAddBook;
