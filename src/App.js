import AppRoutes from "./routers/index";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes/>
      <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
               />
    </ThemeProvider>
  );
}
export default App;
