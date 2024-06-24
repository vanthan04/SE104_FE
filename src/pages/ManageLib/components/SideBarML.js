import React, { useState, useEffect } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LockResetIcon from '@mui/icons-material/LockReset';
import ReportIcon from '@mui/icons-material/Report';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { NavLink } from 'react-router-dom';
import ApiUser from "../../../untils/api/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Popup from '../../../components/controls/Popup';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/user/userSlice';

const SideBarML = () => {
     const [showPopup, setShowPopup] = useState(false);
     const [showResetPassword, setShowResetPassword] = useState(false);
     const [fullname, setFullname] = useState('');
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          const fullname = JSON.parse(localStorage.getItem('fullname'));
          if (fullname) {
               setFullname(fullname);
          }
     }, []);

     const handleLogout = async () => {
          setShowPopup(true);
     };

     const handleSubmitLogout = async () => {
          await ApiUser.getLogout();
          navigate('/');
          dispatch(logout());
          setShowPopup(false);
          toast.success("Đăng xuất thành công");
     };

     const handleNoLogout = () => {
          setShowPopup(false);
     };

     const toggleResetPassword = () => {
          setShowResetPassword(!showResetPassword); // Toggle visibility
     };

     return (
          <Box flex={6 / 7} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
               <List>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <ListItemButton sx={{ width: '100%' }} onClick={toggleResetPassword}>
                              <ListItemIcon>
                                   <PortraitOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText
                                   primary={fullname}
                              />
                              <Box display="flex" justifyContent="flex-end" alignItems="center">
                                   {showResetPassword ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowRightOutlinedIcon />}
                              </Box>
                         </ListItemButton>
                    </ListItem>

                    {showResetPassword && (
                         <>
                              <ListItem sx={{ width: '100%', padding: 1 }}>
                                   <NavLink to="/librarian/resetpw" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                        <ListItemButton sx={{ width: '100%' }}>
                                             <ListItemIcon>
                                                  <LockResetIcon />
                                             </ListItemIcon>
                                             <ListItemText primary='Đổi mật khẩu' />
                                        </ListItemButton>
                                   </NavLink>
                              </ListItem>
                              <ListItem sx={{ width: '100%', padding: 1 }}>
                                   <ListItemButton sx={{ width: '100%' }} onClick={handleLogout}>
                                        <ListItemIcon>
                                             <LogoutOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Đăng xuất' />
                                   </ListItemButton>
                              </ListItem>
                         </>
                    )}
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
                                   <ListItemText primary='Thống kê sách mượn theo thể loại' />
                              </ListItemButton>
                         </NavLink>
                    </ListItem>
                    <ListItem sx={{ width: '100%', padding: 1 }}>
                         <NavLink to='/librarian/report-return-late' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                              <ListItemButton sx={{ width: '100%' }}>
                                   <ListItemIcon>
                                        <AssessmentOutlinedIcon />
                                   </ListItemIcon>
                                   <ListItemText primary='Thống kê sách trả trễ' />
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
               </List>
               <Popup
                    title="Bạn có muốn đăng xuất?"
                    openPopup={showPopup}
                    setOpenPopup={setShowPopup}
               >
                    <Box display='flex' justifyContent='center'>
                         <Button color='success' onClick={handleSubmitLogout}>Đồng ý</Button>
                         <Button color='error' onClick={handleNoLogout}>Hủy</Button>
                    </Box>
               </Popup>
          </Box>
     );
}

export default SideBarML;
