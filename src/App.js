import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Authentication/Login';
import HomeContent from './pages/HomeContent/index';
import DashBar from './components/DashBar/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="/home" element={<HomeContent/>}/>
        <Route path="/dashbar" element={<DashBar/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
