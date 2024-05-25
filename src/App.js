import { RouterProvider } from "react-router-dom";

import router from './routers/index'
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import SessionChecker from "./routers/SessionChecker";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer />
      <SessionChecker />
    </ThemeProvider>
  );
}
export default App;
