import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuanlySach() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{color: 'primary.main'}}>
      <Button
        id="basic-button-QLDG"
        aria-controls={open ? 'basic-menu-QLS' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon/>}
      >
        Quản lý sách
      </Button>
      <Menu
        id="basic-menu-QLS"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-QLS',
        }}
      >
        <MenuItem onClick={handleClose}>Tiếp nhận sách</MenuItem>
        <MenuItem onClick={handleClose}>Tìm kiếm sách</MenuItem>
        <MenuItem onClick={handleClose}>Mượn sách</MenuItem>
        <MenuItem onClick={handleClose}>Trả sách</MenuItem>
        <MenuItem onClick={handleClose}>Xóa sách</MenuItem>
        <MenuItem onClick={handleClose}>Chỉnh sửa</MenuItem>
      </Menu>
     </Box>
  );
}