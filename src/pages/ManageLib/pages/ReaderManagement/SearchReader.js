// Nhập các thành phần và thư viện cần thiết từ Material-UI và React
import { TextField, Button, Grid, Container, Box, BottomNavigationAction, BottomNavigation } from '@mui/material';
import React, { useState, useCallback, useEffect } from "react";
import ApiDocGia from '../../../../untils/api/DocGia'
import { toast } from "react-toastify";
import renderSearchResults from "./renderSearchResults";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

// Hàm định dạng dữ liệu độc giả
const formatReaderData = (reader) => {
     return {
          MaDG: reader.MaDG,
          hoten: reader.hoten,
          ngaysinhtoShow: reader.ngaysinhtoShow,
          ngaylapthetoShow: reader.ngaylapthetoShow,
          email: reader.email,
          loaidocgia: reader.loaidocgia,
          diachi: reader.diachi
     };
};

// Thành phần tìm kiếm độc giả
const SearchReader = React.memo((props) => {
     const { closePopup } = props; // Nhận hàm đóng popup từ props
     const [dataSearch, setDataSearch] = useState({
          hoten: '',
          email: '',
          MaDG: '',
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

     // Hàm xử lý khi gửi biểu mẫu tìm kiếm
     const handleSubmit = useCallback(async (event) => {
          event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
          try {
               let res;
               if (dataSearch.email) {
                    res = await ApiDocGia.getSearchEmail(dataSearch.email); // Tìm kiếm theo email
               } else if (dataSearch.MaDG) {
                    res = await ApiDocGia.getSearchMaDG(dataSearch.MaDG); // Tìm kiếm theo mã độc giả
               } else if (dataSearch.hoten) {
                    res = await ApiDocGia.getSearchHoten(dataSearch.hoten); // Tìm kiếm theo họ tên
               }

               if (res && res.success) {
                    let formattedResults = [];
                    if (Array.isArray(res.data)) {
                         formattedResults = res.data.map(reader => ({ ...formatReaderData(reader), isNew: true }));
                    } else if (res.data._id) {
                         formattedResults = [{ ...formatReaderData(res.data), isNew: true }];
                    }
                    // Đặt trạng thái 'isNew' là false cho các kết quả cũ
                    const updatedPrevResults = searchResults.map(item => ({ ...item, isNew: false }));
                    setSearchResults([...formattedResults, ...updatedPrevResults]); // Cập nhật kết quả tìm kiếm
                    toast.success(res.message); // Hiển thị thông báo thành công
               } else {
                    toast.error(res.message); // Hiển thị thông báo lỗi
               }
          } catch (error) {
               toast.error("Vui lòng nhập dữ liệu tìm kiếm"); // Hiển thị thông báo lỗi
          } finally {
               setDataSearch({ hoten: '', email: '', MaDG: '' }); // Đặt lại dữ liệu đầu vào sau khi gọi API
          }
     }, [dataSearch, searchResults]);

     // Đặt lại dữ liệu đầu vào khi giá trị của BottomNavigation thay đổi
     useEffect(() => {
          setDataSearch({ hoten: '', email: '', MaDG: '' });
     }, [value]);

     console.log(searchResults);

     return (
          <Container component='main-edit-reader' maxWidth='lg'>
               <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
                    <Box component='div'>
                         <BottomNavigation
                              showLabels
                              value={value}
                              onChange={(event, newValue) => {
                                   setValue(newValue);
                              }}
                         >
                              <BottomNavigationAction label="Mã độc giả" icon={<PermIdentityOutlinedIcon />} />
                              <BottomNavigationAction label="Email" icon={<MailOutlineOutlinedIcon />} />
                              <BottomNavigationAction label="Họ tên" icon={<DrawOutlinedIcon />} />
                         </BottomNavigation>
                    </Box>
                    <Grid container spacing={2} my={1}>
                         {value === 0 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='MaDG - VD: DG00001'
                                        id='MaDG'
                                        name='MaDG'
                                        fullWidth
                                        value={dataSearch.MaDG}
                                        onChange={handleChange}
                                   />
                              </Grid>}
                         {value === 1 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='Email'
                                        id='email'
                                        name='email'
                                        type='email'
                                        fullWidth
                                        value={dataSearch.email}
                                        onChange={handleChange}
                                   />
                              </Grid>}
                         {value === 2 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='Họ tên'
                                        id='hoten'
                                        name='hoten'
                                        fullWidth
                                        value={dataSearch.hoten}
                                        onChange={handleChange}
                                   />
                              </Grid>}
                    </Grid>
                    <Box display='flex' justifyContent='end'>
                         <Button variant="contained" color="error" onClick={closePopup}>
                              Cancel
                         </Button>
                         <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mx: '10px' }}>
                              Find
                         </Button>
                    </Box>
               </Box>
               {renderSearchResults({ data: searchResults })} {/* Hiển thị kết quả tìm kiếm */}
          </Container>
     );
});

export default SearchReader;
