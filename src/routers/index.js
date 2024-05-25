import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ManageLibPage from "../pages/ManageLib";
import { ReaderManagementPage } from "../pages/ManageLib/pages/ReaderManagement";
import LoginForm from "../components/Auth/Login";
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute
import BookManagementPage from '../pages/ManageLib/pages/BookManagement';

const isAuthenticated = true; // Thay thế bằng logic kiểm tra đăng nhập thực tế

const router = createBrowserRouter([
     {
          path: '/',
          element: <LoginForm />
     },
     {
          path: '/librarian',
          element: (
              <PrivateRoute
                  element={ManageLibPage}
                  isAuthenticated={isAuthenticated}
              />
          ),
          children: [
               {
                    path: '/librarian/book',
                    element: (
                        <PrivateRoute
                            element={BookManagementPage} // Giả sử bạn có trang quản lý sách
                            isAuthenticated={isAuthenticated}
                        />
                    )
               },
               {
                    path: '/librarian/reader',
                    element: (
                        <PrivateRoute
                            element={ReaderManagementPage}
                            isAuthenticated={isAuthenticated}
                        />
                    )
               },
          ]
     }
]);

export default router;
