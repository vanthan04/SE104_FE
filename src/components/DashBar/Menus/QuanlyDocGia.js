import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuanlyDocGia() {
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
        aria-controls={open ? 'basic-menu-QLDG' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon/>}
      >
        Quản lý độc giả
      </Button>
      <Menu
        id="basic-menu-QLDG"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-QLDG',
        }}
      >
        <MenuItem onClick={handleClose}>Lập thẻ độc giả</MenuItem>
        <MenuItem onClick={handleClose}>Tìm kiếm độc giả</MenuItem>
        <MenuItem onClick={handleClose}>Chỉnh sửa</MenuItem>
        <MenuItem onClick={handleClose}>Xóa độc giả</MenuItem>
      </Menu>
     </Box>
  );
}