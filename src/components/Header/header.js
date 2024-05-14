import { Box, Button } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

function AppBar() {
  return (
    <Box
      sx={{
        height: 60,
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        px: 2,
        backgroundColor: "primary.light",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link to="/">
          <Button
            id="basic-button-home"
            variant="contained"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
        </Link>
        <Link to="/about">
          <Button
            id="basic-button-about"
            variant="contained"
            startIcon={<InfoIcon />}
          >
            About
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link to="/auth/login">
          <Button
            id="basic-button-login"
            variant="contained"
            startIcon={<LoginIcon />}
          >
            Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default AppBar;
