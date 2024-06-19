import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ManageLibPage from "../pages/ManageLib";
import { ReaderManagementPage } from "../pages/ManageLib/pages/ReaderManagement";
import LoginForm from "../components/Auth/Login";
import BookManagementPage from '../pages/ManageLib/pages/BookManagement';
import SessionChecker from './SessionChecker';
import RegisterForm from '../components/Auth/Register';

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
                        <h1>Return Book</h1>
                    )
                },
                {
                    path: 'borrow-book',
                    element: (
                        <h1>Borrow Book</h1>
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