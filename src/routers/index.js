import { createBrowserRouter } from "react-router-dom";
import ManageLibPage from "../pages/ManageLib";
import { BookManagementPage } from "../pages/ManageLib/pages/BookManagement";
import { ReaderManagementPage } from "../pages/ManageLib/pages/ReaderManagement";
import LoginForm from "../components/Auth/Login";
import QuiDinhPage from "../pages/ManageLib/pages/Quydinh";

const router = createBrowserRouter([
     {
          path: '/',
          element: <LoginForm />
     },
     {
          path: '/librarian',
          element: <ManageLibPage />,
          children: [
               {
                    path: '/librarian/book',
                    element: <BookManagementPage />
               },
               {
                    path: '/librarian/reader',
                    element: <ReaderManagementPage />
               },
               {
                    path: '/librarian/quidinh',
                    element: <QuiDinhPage />
               }
          ]
     }
])

export default router