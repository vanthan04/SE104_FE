import { Box, Container, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiUser from '../../../untils/api/user'
import { toast } from "react-toastify";

const ResetPW = () => {
     const [data, setData] = useState({
          CurPassword: "",
          NewPassword: "",
          confirmNewPassword: "",
     });

     const [errorMessages, setErrorMessages] = useState({
          CurPassword: "",
          Newpassword: "",
          confirmNewPassword: "",
     });

     const handleChange = (event) => {
          setData({
               ...data,
               [event.target.name]: event.target.value,
          });
          setErrorMessages({
               ...errorMessages,
               [event.target.name]: "", // Clear the error message when the user types
          });
     };

     const handleRegister = async (event) => {
          event.preventDefault();
          let valid = true;

          const newErrorMessages = {
               CurPassword: "",
               Newpassword: "",
               confirmNewPassword: "",
          };

          for (const field in data) {
               if (!data[field]) {
                    valid = false;
                    newErrorMessages[field] = "Bắt buộc";
               }
          }

          if (data.NewPassword && /\s/.test(data.NewPassword)) {
               valid = false;
               newErrorMessages.password = "Mật khẩu không có khoảng cách";
          }

          if (data.NewPassword !== data.confirmNewPassword) {
               valid = false;
               newErrorMessages.confirmNewPassword = "Mật khẩu không khớp";
          }

          setErrorMessages(newErrorMessages);

          

          const response = await ApiUser.postResetPassword(data.CurPassword, data.NewPassword);
          if (!response.success){
               toast.error(response.message);
          }
          else{
               toast.success(response.message);
          }

          if (!valid) return;
     };

     const handleKeyDown = (event) => {
          if (event.key === "Enter") {
               handleRegister(event);
          }
     };

     return (
          <Container sx={{ height: "60vh" }} component="main" maxWidth="sm">
               <Box
                    sx={{
                         marginTop: "20%",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         border: "solid 1px",
                         padding: "16px",
                         borderRadius: "20px",
                         px: 5,
                    }}
               >
                    <Typography component="h1" variant="h3">
                         Đổi mật khẩu
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                         <TextField
                              required
                              margin="dense" // Adjust this to change the vertical spacing
                              fullWidth
                              id="CurPassword"
                              label="Mật khẩu hiện tại"
                              name="CurPassword"
                              type="password"
                              value={data.CurPassword}
                              autoComplete="CurPassword"
                              onChange={handleChange}
                              error={Boolean(errorMessages.CurPassword)}
                              helperText={errorMessages.CurPassword}
                              FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                              sx={{ minHeight: '80px' }}
                         />

                         <TextField
                              required
                              margin="dense" // Adjust this to change the vertical spacing
                              fullWidth
                              id="NewPassword"
                              label="Mật khẩu mới"
                              type="password"
                              name="NewPassword"
                              value={data.Newpassword}
                              autoComplete="current-password"
                              onChange={handleChange}
                              error={Boolean(errorMessages.NewPassword)}
                              helperText={errorMessages.NewPassword}
                              FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                              sx={{ minHeight: '80px' }}
                         />

                         <TextField
                              required
                              margin="dense" // Adjust this to change the vertical spacing
                              fullWidth
                              id="confirmNewPassword"
                              label="Xác nhận mật khẩu mới"
                              type="password"
                              name="confirmNewPassword"
                              value={data.confirmNewPassword}
                              autoComplete="current-password"
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              error={Boolean(errorMessages.confirmNewPassword)}
                              helperText={errorMessages.confirmNewPassword}
                              FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                              sx={{ minHeight: '80px' }}
                         />

                         <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={handleRegister}
                         >
                              Xác nhận
                         </Button>
                    </Box>
               </Box>
          </Container>
     );
}

export default ResetPW