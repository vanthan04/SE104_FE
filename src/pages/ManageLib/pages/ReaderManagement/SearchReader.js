import { TextField, Button, Grid, Container, Box, BottomNavigationAction, BottomNavigation } from '@mui/material';
import { useState } from "react";
import ApiUser from "../../../../untils/api/user";
import { toast } from "react-toastify";
import renderSearchResults from "./renderSearchResults";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


// Hàm định dạng dữ liệu đọc giả
const formatReaderData = (reader) => {
     return {
          MaDG: reader.MaDG,
          hoten: reader.hoten,
          ngaysinhtoShow: reader.ngaysinhtoShow,
          ngaylapthetoShow: reader.ngaylapthetoShow,
          email: reader.email,
          loaidocgia: reader.loaidocgia,
          diachi: reader.diachi
     };
};

const SearchReader = (props) => {
     const { closePopup } = props;
     const [dataSearch, setDataSearch] = useState({
          hoten: '',
          email: '',
          MaDG: '',
     });
     const [searchResults, setSearchResults] = useState([]);
     const [value, setValue] = useState(0);


     const handleChange = (event) => {
          const { name, value } = event.target;
          setDataSearch({
               ...dataSearch,
               [name]: value
          });
     };

     const handleSubmit = async () => {
          if (dataSearch.email) {
               const res = await ApiUser.getSearchEmail(`/readerManage/findReaderByEmail?email=${dataSearch.email}`);
               if (res && res.success && res.data._id) {
                    setSearchResults(prevResults => [formatReaderData(res.data), ...prevResults]);
                    toast.success(`${res.message}`);
               } else {
                    toast.error(`${res.message}`);
               }
          } else if (dataSearch.MaDG) {
               const res = await ApiUser.getSearchMaDG(`/readerManage/findReaderByMaDG?MaDG=${dataSearch.MaDG}`);
               if (res && res.success && res.data._id) {
                    setSearchResults(prevResults => [formatReaderData(res.data), ...prevResults]);
                    toast.success(`${res.message}`);
               } else {
                    toast.error(`${res.message}`);
               }
          }
     };
     return (
          <Container component='main-edit-reader' maxWidth='lg'>
               <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
                    <Box component='div'>
                         <BottomNavigation
                              showLabels
                              value={value}
                              onChange={(event, newValue) => {
                                   setValue(newValue);
                              }}
                         >
                              <BottomNavigationAction label="Mã độc giả" icon={<PermIdentityOutlinedIcon />} />
                              <BottomNavigationAction label="Email" icon={<MailOutlineOutlinedIcon />} />
                              <BottomNavigationAction label="Họ tên" icon={<DrawOutlinedIcon />} />
                         </BottomNavigation>
                    </Box>
                    <Grid container spacing={2} my={1}>
                         {value === 0 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='MaDG - VD: DG00001'
                                        id='MaDG'
                                        name='MaDG'
                                        fullWidth
                                        onChange={handleChange}
                                   />
                              </Grid>}
                         {value === 1 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='Email'
                                        id='email'
                                        name='email'
                                        type='email'
                                        fullWidth
                                        onChange={handleChange}
                                   />
                              </Grid>}
                         {value === 2 &&
                              <Grid item xs={12}>
                                   <TextField
                                        variant='outlined'
                                        label='Họ tên'
                                        id='hoten'
                                        name='hoten'
                                        fullWidth
                                        onChange={handleChange}
                                   />
                              </Grid>}
                    </Grid>
                    <Box display='flex' justifyContent='end'>
                         <Button variant="contained" color="error" onClick={closePopup}>
                              Cancel
                         </Button>
                         <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mx: '10px' }}>
                              Find
                         </Button>
                    </Box>
               </Box>
               {renderSearchResults({ data: searchResults })}
          </Container>
     )
}

export default SearchReader;
