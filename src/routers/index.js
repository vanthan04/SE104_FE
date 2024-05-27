import { createBrowserRouter } from "react-router-dom";
import ManageLibPage from "../pages/ManageLib";
import { ReaderManagementPage } from "../pages/ManageLib/pages/ReaderManagement";
import LoginForm from "../components/Auth/Login";
import RegisterForm from "../components/Auth/Register";

const router = createBrowserRouter([
     {
          path: '/',
          element: <LoginForm />,
     },
     {
          path: '/register',
          element: <RegisterForm />
     }
     ,
     {
          path: '/librarian',
          element: <ManageLibPage />,
          children: [
               {
                    path: '/librarian/book',
                    // element: <BookManagementPage />
               },
               {
                    path: '/librarian/reader',
                    element: <ReaderManagementPage />
               },

          ]
     }
])

export default router