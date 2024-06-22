import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarML = () => {
     return (
          <Box
               flex={6 / 7} p={2}
               sx={{ display: { xs: 'none', sm: 'block' } }}
          >
               <List>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <HomeOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Homepage' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to="/librarian/book" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <LibraryBooksOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Quản lý sách' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to='/librarian/reader' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <AccountCircleOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Quản lý độc giả' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to='/librarian/return-book' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <KeyboardReturnOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Trả sách' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to='/librarian/report-gener' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <AssessmentOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Báo cáo thống kê sách mượn theo thể loại' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to='/librarian/report-return-late' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <AssessmentOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Báo cáo thống kê sách trả trễ' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <ListItemButton sx={{ width: '100%' }}>
                              <ListItemIcon>
                                   <LogoutOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText primary='Log out' />
                         </ListItemButton>
                    </ListItem>
               </List>
          </Box>
     );
}

export default SideBarML;
