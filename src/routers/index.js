import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import ManageLibPage from "../pages/ManageLib";
import { BookManagementPage } from "../pages/ManageLib/pages/BookManagement";
import { ReaderManagementPage } from "../pages/ManageLib/pages/ReaderManagement";

const router = createBrowserRouter([
     {
          path: '/',
          element: <HomePage />
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

          ]
     }
])

export default router