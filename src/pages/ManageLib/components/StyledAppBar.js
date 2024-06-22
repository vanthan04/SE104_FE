import React from 'react';
import { Box, AppBar, Button, Typography, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StyledToolbar from './StyledToolbar';


const StyledAppBar = ({ setOpenPopupAdd, setOpenPopupSearch, setOpenPopupReg, title }) => {
     return (
          <AppBar position='static'>
               <StyledToolbar>
                    <Typography variant='h6'>{title}</Typography>
                    <Box component='div'
                         sx={{
                              width: '25%',
                              display: 'flex',
                              justifyContent: 'right',
                         }}
                    >
                         <Button
                              color='secondary'
                              variant='contained'
                              startIcon={<SearchIcon />}
                              onClick={setOpenPopupSearch}
                              sx={{ mx: "2px" }}
                         >
                              Search
                         </Button>
                         <Button
                              color='success'
                              variant='contained'
                              startIcon={<AddCircleOutlineOutlinedIcon />}
                              onClick={setOpenPopupAdd}
                              sx={{ mx: "2px" }}
                         >
                              Add
                         </Button>
                         <Button
                              color='warning'
                              variant='contained'
                              startIcon={<ReportProblemOutlinedIcon />}
                              onClick={setOpenPopupReg}
                              sx={{ mx: "2px" }}
                         >
                              Reguls
                         </Button>
                    </Box>
               </StyledToolbar>
          </AppBar>
     );
}

export default StyledAppBar;
