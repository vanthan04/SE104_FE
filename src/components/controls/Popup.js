import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const Popup = ({ title, children, openPopup, setOpenPopup }) => {
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <Dialog open={openPopup} maxWidth="lg">
      <DialogTitle display="flex" sx={{ alignItems: "center" }}>
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
