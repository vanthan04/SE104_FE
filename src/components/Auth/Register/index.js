import { Box, Container, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiUser from '../../../untils/api/user'

const RegisterForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);
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
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(false);
    setErrorMessages({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    for (const field in data) {
      if (!data[field]) {
        setError(true);
        setErrorMessages(prevState => ({
          ...prevState,
          [field]: "This field is required",
        }));
      }
    }

    if (!emailPattern.test(data.email)) {
      toast.error("Định dạng email chưa đúng");
      return;
    }
    if (/\s/.test(data.password)) {
      toast.error("Password không được có khoảng trắng");
      return;
    }
    if (data.password !== data.confirmPassword) {
      toast.error("Mật khẩu không trùng khớp");
      return;
    }
    try {
      const { confirmPassword, ...user } = data;
      const response = await ApiUser.postRegister(user);
      if (response.success) {
        console.log('Đăng kí thành công:', response);
        toast.success(response.message);
        navigate('/')
      } else {
        console.error('Đăng kí thất bại:', response);
        toast.error(response.message)
      }
    } catch (error) {
      console.error("Error during registration:", error);
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
            margin="normal"
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            type="text"
            value={data.fullname}
            autoComplete="fullname"
            onChange={handleChange}
            error={error && !data.fullname}
            helperText={error && !data.fullname && errorMessages.fullname}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            value={data.email}
            autoComplete="email"
            onChange={handleChange}
            error={error && !data.email}
            helperText={error && !data.email && errorMessages.email}
          />

          <TextField
            required
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            value={data.password}
            autoComplete="current-password"
            onChange={handleChange}
            error={error && !data.password}
            helperText={error && !data.password && errorMessages.password}
          />

          <TextField
            required
            margin="normal"
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            autoComplete="current-password"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            error={error && !data.confirmPassword}
            helperText={error && !data.confirmPassword && errorMessages.confirmPassword}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
