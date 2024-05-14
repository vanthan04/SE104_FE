import { RouterProvider } from "react-router-dom";

import router from './routers/index'
import { ThemeProvider } from "@mui/material";
import theme from "./theme";



function App() {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
=======
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/users" element={<Users />} >
            <Route path="quanlydocgia" element={<QuanLyDocGia />}>
              <Route path="dangki" element={<DangKiDocGia />} />
              <Route path="timkiem" element={<TimKiemDocGia />} />
              <Route path="chinhsua" element={<ChinhSuaDocGia />} />
            </Route>
            <Route path="quanlysach" element={<QuanLySach />} />
            <Route path="chucnangkhac" element={<ChucNangKhac />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
>>>>>>> e968784ee8747615bc66c81d72b0d3715dca02a1
  );
}
export default App;
