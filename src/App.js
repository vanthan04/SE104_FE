import { RouterProvider } from "react-router-dom";

import router from './routers/index'
import { ThemeProvider } from "@mui/material";
import theme from "./theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
