import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import React from 'react'
import { Link, NavLink } from 'react-router-dom';



const SideBarML = () => {
     return (
          <Box
               flex={1} p={2}
               sx={{ display: { xs: 'none', sm: 'block' } }}
          >
               <List>
                    <ListItem>
                         <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <ListItemButton>
                                   <ListItemIcon>
                                        <HomeOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Homepage' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <Divider />
                    <ListItem>
                         <NavLink to="/librarian/book" style={{ textDecoration: 'none', color: 'inherit' }}>
                              <ListItemButton>
                                   <ListItemIcon>
                                        <LibraryBooksOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Book Management' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem>
                         <NavLink to='/librarian/reader' style={{ textDecoration: 'none', color: 'inherit' }}>
                              <ListItemButton>
                                   <ListItemIcon>
                                        <AccountCircleOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Reader Management' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem>
                         <ListItemButton>
                              <ListItemIcon>
                                   <FeedOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText primary='Loan Management' />
                         </ListItemButton>
                    </ListItem>
                    <ListItem>
                         <ListItemButton>
                              <ListItemIcon>
                                   <AssessmentOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText primary='Report preparation' />
                         </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                         <ListItemButton>
                              <ListItemIcon>
                                   <LogoutOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText primary='Log out' />
                         </ListItemButton>
                    </ListItem>
               </List>
          </Box>
     )
}

export default SideBarML