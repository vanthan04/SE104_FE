import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function SideBar() {
     return (
          <Box sx={{
               width: '100%',
               height: '100%',
               bgcolor: ' #cce0ff',
               alignContent: 'center',
          }}>
               <List>
                    <Divider />
                    <ListItemButton>
                         <ListItemIcon>
                              <AccountCircleIcon />
                         </ListItemIcon>
                         <Link to='/users/quanlydocgia' >
                              <ListItemText>Quản lý Độc giả</ListItemText>
                         </Link>
                    </ListItemButton>
                    <ListItemButton>
                         <ListItemIcon>
                              <LibraryBooksIcon />
                         </ListItemIcon>

                         <Link to='/users/quanlysach'>
                              <ListItemText>Quản lý Sách</ListItemText>
                         </Link>
                    </ListItemButton>
                    <ListItemButton>
                         <ListItemIcon>
                              <SettingsIcon />
                         </ListItemIcon>
                         <Link to='/users/chucnangkhac' >
                              <ListItemText>Chức năng khác</ListItemText>
                         </Link>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                         <ListItemIcon>
                              <LogoutIcon />
                         </ListItemIcon>
                         <ListItemText>Logout</ListItemText>
                    </ListItemButton>
               </List>
          </Box>
     );
}

export default SideBar;
