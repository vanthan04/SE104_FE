import { Container, Typography, Grid, Button, TextField, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"




function FormAddUser() {
     const formik = useFormik({
          initialValues: {
               hoten: '',
               loaidocgia: '',
               ngaysinh: '',
               diachi: '',
               email: '',
               ngaylapthe: ''
          },
          validationSchema: Yup.object({
               hoten: Yup.string().required("Bắt buộc").min(4, 'Độ dài tối thiểu là 4'),
               email: Yup.string().required("Bắt buộc").matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, 'Địa chỉ email không hợp lệ'),
               ngaysinh: Yup.date().required("Bắt buộc"),
               loaidocgia: Yup.string().required("Bắt buộc"),
               diachi: Yup.string().required("Bắt buộc"),
               ngaylapthe: Yup.date().required("Bắt buộc")
          }),

          onSubmit: (values) => {
               console.log(values)
          }
     })

     return (
          <Container component="main" maxWidth="xs" onSubmit={formik.handleSubmit} sx={{ mt: '10px' }}>
               <form>
                    <Grid container spacing={2}>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   label="Tên đầy đủ"
                                   name="hoten"
                                   value={formik.values.hoten}
                                   onChange={formik.handleChange}
                              />
                              {formik.errors.hoten && (
                                   <Typography component='div' sx={{ color: 'red' }}>{formik.errors.hoten}</Typography>
                              )}
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   label="Email"
                                   name="email"
                                   type="email"
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                              />
                              {formik.errors.email && (
                                   <Typography component='div' sx={{ color: 'red' }}>{formik.errors.email}</Typography>
                              )}
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   select
                                   label="Loại Độc giả"
                                   name="loaidocgia"
                                   value={formik.values.loaidocgia}
                                   onChange={formik.handleChange}
                              >
                                   <MenuItem value="X">X</MenuItem>
                                   <MenuItem value="Y">Y</MenuItem>
                              </TextField>
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   label="Ngày sinh"
                                   name="ngaysinh"
                                   type="date"
                                   InputLabelProps={{
                                        shrink: true,
                                   }}
                                   value={formik.values.ngaysinh}
                                   onChange={formik.handleChange}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   label="Địa chỉ"
                                   name="diachi"
                                   value={formik.values.diachi}
                                   onChange={formik.handleChange}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <TextField
                                   fullWidth
                                   label="Ngày lập thẻ"
                                   name="ngaylapthe"
                                   type="date"
                                   InputLabelProps={{
                                        shrink: true,
                                   }}
                                   value={formik.values.ngaylapthe}
                                   onChange={formik.handleChange}
                              />
                         </Grid>
                         <Grid item xs={12}>
                              <Button
                                   type="submit"
                                   fullWidth
                                   variant="contained"
                                   sx={{ mt: 1, mb: 2 }}
                              >
                                   Đăng ký
                              </Button>
                         </Grid>
                    </Grid>
               </form>
          </Container>
     )
}

export default FormAddUser