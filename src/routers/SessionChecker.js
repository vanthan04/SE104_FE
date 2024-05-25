import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout, extendSession } from '../store/user/userSlice';

const SessionChecker = () => {
    const dispatch = useDispatch();
    const expiresAt = useSelector((state) => state.user.expiresAt);

    useEffect(() => {
        if (!expiresAt) return;

        const timeLeft = new Date(expiresAt) - new Date();
        if (timeLeft <= 0) {
            dispatch(logout());
            toast.error('Đã hết phiên đăng nhập. Vui lòng đăng nhập lại');
            return;
        }

        const timeoutId = setTimeout(() => {
            toast.info('Bạn có muốn mở rộng phiên làm việc?', {
                onClose: () => {
                    const newExpiresAt = new Date(new Date().getTime() + 30 * 60 * 1000); // Extend by 1 hour
                    dispatch(extendSession({ expiresAt: newExpiresAt.toISOString() }));
                },
                autoClose: false,
                closeOnClick: false,
            });
        }, timeLeft - 10000); // 10s before expiry

        return () => clearTimeout(timeoutId);
    }, [expiresAt, dispatch]);

    return null;
};

export default SessionChecker;
