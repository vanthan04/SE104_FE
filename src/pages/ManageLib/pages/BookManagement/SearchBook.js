import React, { useState, useCallback, useEffect } from "react";
// Nhập các thành phần và thư viện cần thiết từ Material-UI và React
import { TextField, Button, Grid, Container, Box, MenuItem } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { toast } from "react-toastify";

import { BottomNav } from '../../../../components/controls';
import { useBookContext } from "../../../../Context";
import ApiBook from "../../../../untils/api/Book";

// Labels cho thanh Nav
const labels = [
     {
          title: 'Mã Sách',
          Icon: <AutoStoriesOutlinedIcon />
     },
     {
          title: 'Tên Sách',
          Icon: <BookIcon />
     },
     {
          title: 'Thể loại',
          Icon: <ListOutlinedIcon />
     }
]
// Hàm định dạng dữ liệu độc giả
const formatBookData = (book) => {
     return {
          _id: book._id,
          MaSach: book.MaSach,
          tensach: book.tensach,
          theloai: book.theloai,
          tacgia: book.tacgia,
          tinhtrang: book.tinhtrang,
          borrowerInfo: book.borrowerInfo
     };
};
// Thành phần tìm kiếm độc giả
const SearchBook = React.memo(({ closePopup, resultSearch }) => {
     const { bookGenres, data } = useBookContext()
     const [dataSearch, setDataSearch] = useState({
          MaSach: '',
          tensach: '',
          theloai: '',
     });
     const [searchResults, setSearchResults] = useState([]); // Trạng thái lưu trữ kết quả tìm kiếm
     const [value, setValue] = useState(0); // Trạng thái lưu trữ giá trị của BottomNavigation

     // Hàm xử lý thay đổi dữ liệu đầu vào
     const handleChange = useCallback((event) => {
          const { name, value } = event.target;
          setDataSearch((prevData) => ({
               ...prevData,
               [name]: value
          }));
     }, []);

     const handleCancel = () => {
          resultSearch(data)
          closePopup()
     }

     // Hàm xử lý khi gửi biểu mẫu tìm kiếm
     const handleSubmit = useCallback(async (event) => {
          event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
          try {
               let res;
               if (dataSearch.MaSach) {
                    res = await ApiBook.findBookByBookID(dataSearch.MaSach)
               } else if (dataSearch.tensach) {
                    res = await ApiBook.findBookByName(dataSearch.tensach)
               } else if (dataSearch.theloai) {
                    res = await ApiBook.findBookByGener(dataSearch.theloai)
               }
               if (res && res.success) {
                    let formattedResults = [];
                    if (Array.isArray(res.data)) {
                         formattedResults = res.data.map(reader => ({ ...formatBookData(reader), isNew: true }));
                    } else if (res.data._id) {
                         formattedResults = [{ ...formatBookData(res.data), isNew: true }];
                    }
                    // Đặt trạng thái 'isNew' là false cho các kết quả cũ
                    const updatedPrevResults = searchResults.map(item => ({ ...item, isNew: false }));
                    const finalResults = [...formattedResults, ...updatedPrevResults];
                    setSearchResults(finalResults); // Cập nhật kết quả tìm kiếm
                    resultSearch(finalResults); // Truyền kết quả tìm kiếm về component cha
                    toast.success(res.message);
                    closePopup()
               } else {
                    toast.error(res.message); // Hiển thị thông báo lỗi
               }

          } catch (error) {
               toast.error("Vui lòng nhập dữ liệu tìm kiếm"); // Hiển thị thông báo lỗi
          } finally {
               setDataSearch({ MaSach: '', tensach: '', theloai: '' }); // Đặt lại dữ liệu đầu vào sau khi gọi API
          }
     }, [dataSearch, searchResults, closePopup, resultSearch]);

     // Đặt lại dữ liệu đầu vào khi giá trị của BottomNavigation thay đổi
     useEffect(() => {
          setDataSearch({ MaSach: '', tensach: '', theloai: '' });
     }, [value]);

     return (
          <Container component='main-edit-reader' maxWidth='lg'>
               <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
                    <Box component='div'>
                         <BottomNav value={value} setValue={setValue} labels={labels} />
                    </Box>
                    <Grid container spacing={2} my={2}>
                         {value === 0 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='MaSach - VD: MS00001'
                                        id='MaSach'
                                        name='MaSach'
                                        fullWidth
                                        value={dataSearch.MaSach}
                                        onChange={handleChange}
                                   />
                              </Grid>}
                         {value === 1 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='Tên Sách'
                                        id='tensach'
                                        name='tensach'
                                        type='tensach'
                                        fullWidth
                                        value={dataSearch.tensach}
                                        onChange={handleChange}
                                   />
                              </Grid>}
                         {value === 2 &&
                              <Grid item xs={12}>
                                   <TextField
                                        select
                                        variant='outlined'
                                        label='Thể loại'
                                        id='theloai'
                                        name='theloai'
                                        fullWidth
                                        value={dataSearch.theloai}
                                        onChange={handleChange}
                                   >
                                        {bookGenres.map((genre) => (
                                             <MenuItem key={genre} value={genre}>
                                                  {genre}
                                             </MenuItem>
                                        ))}
                                   </TextField>
                              </Grid>}
                    </Grid>
                    <Box display='flex' justifyContent='end' margin={2}>
                         <Button variant="contained" color="error" onClick={handleCancel}>
                              Hủy
                         </Button>
                         <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mx: '10px' }}>
                              Tìm kiếm
                         </Button>
                    </Box>
                    {/* {renderSearchBook({ data: searchResults })} */}
               </Box>
          </Container>
     );
});

export default SearchBook;
