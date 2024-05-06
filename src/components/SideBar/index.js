import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#99c2ff",
        alignContent: "center",
      }}
    >
      <List>
        <Divider />
        <Link to="/users/quanlydocgia">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>

            <ListItemText>Quản lý Độc giả</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/users/quanlysach">
          <ListItemButton>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>

            <ListItemText>Quản lý Sách</ListItemText>
          </ListItemButton>
        </Link>
        <Link to="/users/chucnangkhac">
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>

            <ListItemText>Chức năng khác</ListItemText>
          </ListItemButton>
        </Link>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
}

export default SideBar;
