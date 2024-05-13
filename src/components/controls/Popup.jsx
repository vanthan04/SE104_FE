import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup, onClose } = props;
  return (
    <Dialog open={openPopup} onClose={onClose}>
      <DialogTitle display="flex">
        <Typography variant="h4" flexGrow={1}>
          {title}
        </Typography>
        <IconButton color="error">
          <HighlightOffOutlinedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div>Content here</div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
