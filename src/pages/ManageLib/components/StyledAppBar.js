import React from 'react';
import { Box, AppBar, Button, Typography, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StyledToolbar from './StyledToolbar';

// Styled button for custom button
const CustomButton = styled(Button)(({ theme }) => ({
     color: 'white',
     backgroundColor: theme.palette.success.light,
     '&:hover': {
          backgroundColor: theme.palette.success.dark,
     },
}));

const StyledAppBar = ({ setOpenPopupAdd, setOpenPopupSearch, setOpenPopupReg, setOpenPopupCustom, title, customButton }) => {
     return (
          <AppBar position='static'>
               <StyledToolbar>
                    <Typography variant='h6'>{title}</Typography>
                    <Box component='div'
                         sx={{
                              width: customButton ? '40%' : '25%', // Conditional width for Box
                              display: 'flex',
                              justifyContent: 'space-between',
                         }}
                    >
                         {customButton && (
                              <CustomButton
                                   variant='contained'
                                   startIcon={customButton.icon}
                                   onClick={customButton.onClick}
                              >
                                   {customButton.label}
                              </CustomButton>
                         )}
                         <Button
                              color='secondary'
                              variant='contained'
                              startIcon={<SearchIcon />}
                              onClick={setOpenPopupSearch}
                         >
                              Search
                         </Button>
                         <Button
                              color='success'
                              variant='contained'
                              startIcon={<AddCircleOutlineOutlinedIcon />}
                              onClick={setOpenPopupAdd}
                         >
                              Add
                         </Button>
                         <Button
                              color='warning'
                              variant='contained'
                              startIcon={<ReportProblemOutlinedIcon />}
                              onClick={setOpenPopupReg}
                         >
                              Reguls
                         </Button>
                    </Box>
               </StyledToolbar>
          </AppBar>
     );
}

export default StyledAppBar;
