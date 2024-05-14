import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;

  const [close, setClose] = useState(false);
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <Dialog open={openPopup} onClose={handleClose} maxWidth="md">
      <DialogTitle display="flex" sx={{alignItems:'center'}}>
        <Typography variant="h5" component="div" flexGrow={1}>
          {title}
        </Typography>
        <IconButton color="error" onClick={handleClose}>
          <HighlightOffOutlinedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
