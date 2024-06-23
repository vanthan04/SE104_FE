import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ApiReg from '../../../../untils/api/Regulation';
import { toast } from 'react-toastify';
import { useBookContext } from '../../../../Context'

const RegBook = ({ closePopup }) => {
     const { handleDataSuccess } = useBookContext()
     const [dataRegBook, setDataRegBook] = useState({
          theloai: [],
          khoangcachxuatban: '',
          soLuongTheLoai: 0
     });

     const get = async () => {
          try {
               const res = await ApiReg.getBookRule();
               setDataRegBook({
                    ...res.data,
                    soLuongTheLoai: res.data.theloai.length
               });
          } catch (error) {
               toast.error("Lỗi lấy thông tin quy định");
               console.error(error);
          }
     };

     useEffect(() => {
          get();
     }, []);

     const handleChange = (e) => {
          const { name, value } = e.target;

          if (name === 'soLuongTheLoai') {
               const soLuong = parseInt(value, 10) || 0;
               const theloai = [...dataRegBook.theloai];

               while (theloai.length < soLuong) {
                    theloai.push('');
               }

               while (theloai.length > soLuong) {
                    theloai.pop();
               }

               setDataRegBook({
                    ...dataRegBook,
                    theloai: theloai,
                    soLuongTheLoai: soLuong
               });
          } else if (name.startsWith('tenTheLoai')) {
               const index = parseInt(name.split('_')[1], 10);
               const theloai = [...dataRegBook.theloai];
               theloai[index] = value;

               setDataRegBook({
                    ...dataRegBook,
                    theloai: theloai
               });
          } else {
               setDataRegBook({
                    ...dataRegBook,
                    [name]: value
               });
          }
     };

     const updateGenres = async (DSTheLoai) => {
          try {
               const response = await ApiReg.updateGenres({ DSTheLoai });
               if (response.success) {
                    toast.success(`${response.message}`);
               } else {
                    toast.error(`Thể loại sách ${response.message}`);
               }
          } catch (error) {
               toast.error("Lỗi cập nhật thể loại sách");
               console.error(error);
          }
     };

     const updatePublishYearDistance = async (khoangcachxuatban) => {
          try {
               const response = await ApiReg.updatePulishYearDistance({ khoangcachxuatban });
               if (response.success) {
                    toast.success(`${response.message}`);
               } else {
                    toast.error(`Khoảng cách xuất bản ${response.message}`);
               }
          } catch (error) {
               toast.error("Lỗi cập nhật khoảng cách năm sản xuất");
               console.error(error);
          }
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               await updateGenres(JSON.stringify(dataRegBook.theloai));
               await updatePublishYearDistance(dataRegBook.khoangcachxuatban);
               closePopup()
               handleDataSuccess()
          } catch (error) {
               console.error('Error updating data:', error);
          }
     };

     return (
          <Container component="main" maxWidth="xs">
               <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} mt={2}>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="khoangcachxuatban"
                                   label="Khoảng Cách Năm"
                                   name="khoangcachxuatban"
                                   type="number"
                                   value={dataRegBook.khoangcachxuatban}
                                   onChange={handleChange}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   variant="outlined"
                                   required
                                   fullWidth
                                   id="soLuongTheLoai"
                                   label="Số Lượng Thể Loại"
                                   name="soLuongTheLoai"
                                   type="number"
                                   value={dataRegBook.soLuongTheLoai}
                                   onChange={handleChange}
                              />
                         </Grid>
                         {dataRegBook.theloai.map((theLoai, index) => (
                              <Grid item xs={12} key={index}>
                                   <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id={`tenTheLoai_${index}`}
                                        label={`Tên Thể Loại ${index + 1}`}
                                        name={`tenTheLoai_${index}`}
                                        value={theLoai}
                                        onChange={handleChange}
                                   />
                              </Grid>
                         ))}
                         <Grid item xs={12}>
                              <Button
                                   type="submit"
                                   fullWidth
                                   variant="contained"
                                   color="primary"
                              >
                                   Cập Nhật
                              </Button>
                         </Grid>
                    </Grid>
               </form>
          </Container>
     );
};

export default RegBook;
