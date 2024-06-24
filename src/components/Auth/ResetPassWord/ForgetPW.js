import { Box, Container, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiUser from "../../../untils/api/user";
import { toast } from "react-toastify";

const ForgetPW = () => {
     const navigate = useNavigate();
     const [data, setData] = useState({
          email: "",
     });

     const [errorMessages, setErrorMessages] = useState({
          email: "",
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
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          let valid = true;

          const newErrorMessages = {
               email: "",
          };

          for (const field in data) {
               if (!data[field]) {
                    valid = false;
                    newErrorMessages[field] = "Bắt buộc";
               }
          }

          if (data.email && !emailPattern.test(data.email)) {
               valid = false;
               newErrorMessages.email = "Không đúng định dạng email";
          }

          const response = await ApiUser.postForgetPassword(data.email);
          if(response.success){
               toast.success(response.message);
               navigate('/')
          } else {
               toast.error(response.message);
          }
          
          setErrorMessages(newErrorMessages);

          if (!valid) return;
     };

     const handleKeyDown = (event) => {
          if (event.key === "Enter") {
               handleRegister(event);
          }
     };

     return (
          <Container sx={{ height: "50vh" }} component="main" maxWidth="sm">
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
                         Quên mật khẩu
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                         <TextField
                              required
                              margin="dense" // Adjust this to change the vertical spacing
                              fullWidth
                              id="email"
                              label="Xác nhận email"
                              name="email"
                              type="email"
                              value={data.email}
                              autoComplete="email"
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              error={Boolean(errorMessages.email)}
                              helperText={errorMessages.email}
                              FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
                              sx={{ minHeight: '80px' }}
                         />
                         <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ my: 2 }}
                              onClick={handleRegister}
                         >
                              Gửi xác nhận
                         </Button>
                    </Box>
               </Box>
          </Container>
     );
}

export default ForgetPW