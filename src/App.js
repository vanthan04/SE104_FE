import * as React from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Authentication/Login';
import HomeContent from './pages/Home/home';
import DashBar from './components/DashBar/index';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent/>}/>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="/home" element={<HomeContent/>}/>
          <Route path="/dashbar" element={<DashBar/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;
