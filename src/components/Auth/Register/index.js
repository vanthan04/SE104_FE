import { Box, Container, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiUser from '../../../untils/api/user'
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
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

    if (data.password && /\s/.test(data.password)) {
      valid = false;
      newErrorMessages.password = "Mật khẩu không có khoảng cách";
    }

    if (data.password !== data.confirmPassword) {
      valid = false;
      newErrorMessages.confirmPassword = "Mật khẩu không khớp";
    }

    setErrorMessages(newErrorMessages);

    if (!valid) return;


    const { confirmPassword, ...user } = data;
    const response = await ApiUser.postRegister(user);
    if (response.success) {
      toast.success(`${response.message}`);
      navigate('/')
    } else {
      toast.error(`${response.message}`);
      return
    }

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
          Đăng ký
        </Typography>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            required
            margin="dense" // Adjust this to change the vertical spacing
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            type="text"
            value={data.fullname}
            autoComplete="fullname"
            onChange={handleChange}
            error={Boolean(errorMessages.fullname)}
            helperText={errorMessages.fullname}
            FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
            sx={{ minHeight: '80px' }}
          />
          <TextField
            required
            margin="dense" // Adjust this to change the vertical spacing
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            value={data.email}
            autoComplete="email"
            onChange={handleChange}
            error={Boolean(errorMessages.email)}
            helperText={errorMessages.email}
            FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
            sx={{ minHeight: '80px' }}
          />

          <TextField
            required
            margin="dense" // Adjust this to change the vertical spacing
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            value={data.password}
            autoComplete="current-password"
            onChange={handleChange}
            error={Boolean(errorMessages.password)}
            helperText={errorMessages.password}
            FormHelperTextProps={{ style: { whiteSpace: 'nowrap' } }}
            sx={{ minHeight: '80px' }}
          />

          <TextField
            required
            margin="dense" // Adjust this to change the vertical spacing
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            autoComplete="current-password"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            error={Boolean(errorMessages.confirmPassword)}
            helperText={errorMessages.confirmPassword}
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
            Đăng ký
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
