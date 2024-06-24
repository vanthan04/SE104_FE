import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout, loginSuccess } from '../store/user/userSlice';
import Popup from '../components/controls/Popup';
import { Button, Box } from '@mui/material';
import ApiUser from '../untils/api/user';
import { Navigate } from 'react-router-dom';

const SessionChecker = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggin = useSelector((state) => state.user.isLoggin);
    const expiresAt = useSelector((state) => state.user.expiresAt);
    const [toggle, setToggle] = useState(false);
    const [isSessionValid, setIsSessionValid] = useState(true);

    useEffect(() => {
        if (!expiresAt) return;

        const checkSession = () => {
            console.log("Checking session...");
            const timeLeft = new Date(expiresAt) - new Date();
            if (timeLeft <= 0) {
                dispatch(logout());
                toast.error('Đã hết phiên đăng nhập. Vui lòng đăng nhập lại!');
                setIsSessionValid(false);
                return;
            }
            if (timeLeft <= 60 * 1000) { // 1 minute before expiry
                setToggle(true);
            }
        };

        checkSession(); // Initial check
        const intervalId = setInterval(checkSession, 5 * 60 * 1000); // Check every 5 minutes

        return () => clearInterval(intervalId);
    }, [expiresAt, dispatch]);

    const handleExtendSession = async () => {
        try {
            const response = await ApiUser.getRefreshToken();
            if (response.success) {
                dispatch(loginSuccess({
                    token: response.accessToken,
                    expiresAt: new Date(new Date().getTime() + response.expiresAt * 60 * 1000).toISOString()
                }));
                setToggle(false);
            } else {
                toast.error(response.message || 'Đã hết phiên đăng nhập. Vui lòng đăng nhập lại');
                setToggle(false);
                dispatch(logout());
                setIsSessionValid(false);
            }
        } catch (error) {
            console.error("Error while refreshing token:", error);
            toast.error('Đã hết phiên đăng nhập. Vui lòng đăng nhập lại');
            setToggle(false);
            dispatch(logout());
            setIsSessionValid(false);
        }
    };

    const handleDeleteSession = () => {
        dispatch(logout());
        setToggle(false);
        setIsSessionValid(false);
    };

    if (!isSessionValid || !isLoggin) {
        return <Navigate to="/" />;
    }

    return (
        <>
            {children}
            <Popup
                title="Phiên đăng nhập đã hết hạn. Bạn có muốn mở rộng phiên làm việc?"
                openPopup={toggle}
                setOpenPopup={setToggle}
            >
                <Box display='flex' justifyContent='center'>
                    <Button color='success' onClick={handleExtendSession}>Yes</Button>
                    <Button color='error' onClick={handleDeleteSession}>No</Button>
                </Box>
            </Popup>
        </>
    );
};

export default SessionChecker;
