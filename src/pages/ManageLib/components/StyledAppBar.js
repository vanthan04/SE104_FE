//Icon
import SearchIcon from '@mui/icons-material/Search';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
//Components
import { Box, AppBar, Button, Typography } from '@mui/material';
//Local
import StyledToolbar from './StyledToolbar';

const StyledAppBar = ({ setOpenPopupAdd, setOpenPopupSearch, title }) => {
     return (
          <AppBar position='static'>
               <StyledToolbar>
                    <Typography variant='h6'>{title}</Typography>
                    <Box component='div' sx={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
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
                              color='success'
                              variant='contained'
                              startIcon={<ReportProblemOutlinedIcon />}
                              onClick={setOpenPopupAdd}
                         >
                              Reg
                         </Button>
                    </Box>
               </StyledToolbar>
          </AppBar>
     )
}

export default StyledAppBar