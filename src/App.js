import * as React from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Authentication/Login';
import HomePage from './pages/Home/home';
import About from './pages/About';
import Users from './pages/User';
import QuanLyDocGia from './pages/User/Menus/QuanLyDocGia';
import QuanLySach from './pages/User/Menus/QuanLySach';
import ChucNangKhac from './pages/User/Menus/ChucNangKhac';
import TimKiemDocGia from './pages/User/Menus/QuanLyDocGia/FormQuanLyDocGia/TimKiemDocGia';
import ChinhSuaDocGia from './pages/User/Menus/QuanLyDocGia/FormQuanLyDocGia/ChinhSuaDocGia';
import DangKiDocGia from './pages/User/Menus/QuanLyDocGia/FormQuanLyDocGia/DangKiDocGia';

function App() {
  return (
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
  );
}
export default App;
