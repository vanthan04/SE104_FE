<<<<<<< Updated upstream
import MyComponent from "./components/header"

function App() {
  return (
    <MyComponent></MyComponent>
=======
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/Authentication/Login';
import HomeContent from './pages/HomeContent';
import DashBar from './components/DashBar';
function App() {
  return (    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/home' element={<HomeContent />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/dashbar' element={<DashBar/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
