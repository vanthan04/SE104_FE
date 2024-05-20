//React
import { useState } from 'react';
//Icon
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
//Components

import { Box, AppBar, Button, InputBase, Toolbar, Typography, styled, Tooltip } from '@mui/material';
import { TableFormate } from '../../../../components/controls/TableFormate';
//Local
// import Popup from '../../../../components/controls/Popup';
// import FormAddReader from './FormAddReader';


const data = [
     { id: 1, madg: 'Snow1', hoten: 'Jon1', ngaysinh: '01/01/2004', loai: 'X', diachi: '1', email: 'test1@gmail.com', ngaylapthe: '01/01/2024' },
     { id: 2, madg: 'Snow2', hoten: 'Jon2', ngaysinh: '02/01/2004', loai: 'Y', diachi: '2', email: 'test2@gmail.com', ngaylapthe: '02/02/2024' },
     { id: 3, madg: 'Snow3', hoten: 'Jon3', ngaysinh: '03/01/2004', loai: 'Y', diachi: '3', email: 'test3@gmail.com', ngaylapthe: '12/03/2024' },
     { id: 4, madg: 'Snow4', hoten: 'Jon4', ngaysinh: '04/01/2004', loai: 'X', diachi: '4', email: 'test4@gmail.com', ngaylapthe: '12/04/2024' },
     { id: 5, madg: 'Snow5', hoten: 'Jon5', ngaysinh: '05/01/2004', loai: 'Y', diachi: '5', email: 'test5@gmail.com', ngaylapthe: '12/05/2024' },
     { id: 6, madg: 'Snow6', hoten: 'Jon6', ngaysinh: '06/01/2004', loai: 'X', diachi: '6', email: 'test6@gmail.com', ngaylapthe: '12/06/2024' },
     { id: 7, madg: 'Snow7', hoten: 'Jon7', ngaysinh: '07/01/2004', loai: 'Y', diachi: '7', email: 'test7@gmail.com', ngaylapthe: '12/07/2024' },
     { id: 8, madg: 'Snow8', hoten: 'Jon8', ngaysinh: '08/01/2004', loai: 'X', diachi: '8', email: 'test8@gmail.com', ngaylapthe: '12/08/2024' },
     { id: 9, madg: 'Snow9', hoten: 'Jon9', ngaysinh: '09/01/2004', loai: 'Y', diachi: '9', email: 'test9@gmail.com', ngaylapthe: '12/09/2024' },
     { id: 10, madg: 'Snow10', hoten: 'Jon10', ngaysinh: '10/01/2004', loai: 'X', diachi: '10', email: 'test10@gmail.com', ngaylapthe: '12/10/2024' },
     { id: 11, madg: 'Snow11', hoten: 'Jon11', ngaysinh: '11/01/2004', loai: 'Y', diachi: '11', email: 'test11@gmail.com', ngaylapthe: '12/11/2024' },
     { id: 12, madg: 'Snow12', hoten: 'Jon12', ngaysinh: '12/01/2004', loai: 'X', diachi: '12', email: 'test12@gmail.com', ngaylapthe: '12/12/2024' },
];


const StyledToolbar = styled(Toolbar)({
     display: 'flex',
     justifyContent: 'space-between'
}
)

const Search = styled('div')(({ theme }) => ({
     backgroundColor: "white",
     padding: '0 10px',
     borderRadius: theme.shape.borderRadius,
     width: '40%',
}))

export const BookManagementPage = () => {
     const [openPopup, setOpenPopup] = useState(false)

     return (
          <Box sx={{ height: 400, width: '100%', mt: 5 }}>
               <AppBar position='static'>
                    <StyledToolbar>
                         <Typography variant='h6'>Book Management - Book Table</Typography>
                         <Search><InputBase placeholder='seacrh book...' sx={{ width: "100%" }} /></Search>
                         <Tooltip title="Add Book" arrow placement='left'>
                              <Button
                                   color='success'
                                   variant='contained'
                                   startIcon={<BookmarkAddIcon />}
                                   onClick={() => setOpenPopup(!openPopup)}
                              >
                                   Add
                              </Button>
                         </Tooltip>
                    </StyledToolbar>
               </AppBar>
               <TableFormate rows={data} />
               {/* <Popup
                    title='Form Add Reader'
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
               >
                    <FormAddReader />
               </Popup> */}
          </Box>
     );
}