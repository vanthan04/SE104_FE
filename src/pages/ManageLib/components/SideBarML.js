import React, { useState } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { NavLink } from 'react-router-dom';
import ApiUser from "../../../untils/api/user"
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Popup from '../../../components/controls/Popup';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/user/userSlice'

const SideBarML = () => {
     const [showPopup, setShowPopup] = useState(false);
     const navigate = useNavigate()
     const dispatch = useDispatch();
     const handleLogout = async () => {
          setShowPopup(true);
     }
     const handleSubmitLogout = async () => {
          // Xử lý khi người dùng chọn "Yes" trong popup
          await ApiUser.getLogout();
          navigate('/');
          dispatch(logout())
          setShowPopup(false);
          toast.success("Đăng xuất thành công");
      };
  
      const handleNoLogout = () => {
          // Xử lý khi người dùng chọn "No" trong popup
          // Đóng popup sau khi xử lý
          setShowPopup(false);

     };
     return (
          <Box
               flex={6 / 7} p={2}
               sx={{ display: { xs: 'none', sm: 'block' } }}
          >
               <List>
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
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to='/librarian/collection' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <ReportIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Quản lý phiếu phạt' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <ListItemButton sx={{ width: '100%' }} onClick={handleLogout}>
                              <ListItemIcon>
                                   <LogoutOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText primary='Log out' />
                         </ListItemButton>
                    </ListItem>
               </List>
               <Popup
                title="Bạn có muốn đăng xuất?"
                openPopup={showPopup}
                setOpenPopup={setShowPopup}
            >
                <Box display='flex' justifyContent='center'>
                    <Button color='success' onClick={handleSubmitLogout}>Yes</Button>
                    <Button color='error' onClick={handleNoLogout}>No</Button>
                </Box>
            </Popup>
          </Box>
     );
}

export default SideBarML;
