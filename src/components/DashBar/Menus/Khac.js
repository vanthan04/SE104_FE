import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Khac() {
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
        id="basic-button-KHAC"
        aria-controls={open ? 'basic-menu-KHAC' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon/>}
      >
        Khác
      </Button>
      <Menu
        id="basic-menu-KHAC"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-KHAC',
        }}
      >
        <MenuItem onClick={handleClose}>Lập phiếu phạt</MenuItem>
        <MenuItem onClick={handleClose}>Thống kê sách trả trễ</MenuItem>
        <MenuItem onClick={handleClose}>Thống kê tình hình mượn sách theo thể loại </MenuItem>
      </Menu>
     </Box>
  );
}