import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../store/user/userSlice';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const expiresAt = useSelector((state) => state.user.expiresAt);
    const isAuthenticated = useSelector((state) => state.user.isLoggin);

    // Kiểm tra xem token có hết hạn hay không
    const isTokenExpired = () => {
        if (!expiresAt) return true;
        return new Date() > new Date(expiresAt);
    };

    if (isTokenExpired()) {
        dispatch(logout());
        return <Navigate to="/" />;
    }

    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
