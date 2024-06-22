import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ManageLibPage from "../pages/ManageLib";
import { ReaderManagementPage } from "../pages/ManageLib/pages/ReaderManagement";
import LoginForm from "../components/Auth/Login";
import BookManagementPage from '../pages/ManageLib/pages/BookManagement';
import SessionChecker from './SessionChecker';
import RegisterForm from '../components/Auth/Register';
import { ReturnBookManagementPage } from '../pages/ManageLib/pages/LoanManagement/ReturnBook';

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LoginForm />
        },
        {
            path: '/register',
            element: <RegisterForm />
        },
        {
            path: '/librarian',
            element: (
                <SessionChecker>
                    <ManageLibPage />
                </SessionChecker>
            ),
            children: [
                {
                    path: 'book', // Use relative path
                    element: (
                        <BookManagementPage />
                    )
                },
                {
                    path: 'reader', // Use relative path
                    element: (
                        <ReaderManagementPage />
                    )
                },
                {
                    path: 'return-book',
                    element: (
                        <ReturnBookManagementPage />
                    )
                },
                {
                    path: 'report',
                    element: (
                        <h1>Report</h1>
                    )
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;