import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './pages/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomeContent';
import LoginForm from './pages/Authentication/Login';
import HomeContent from './pages/HomeContent';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/home' element={<HomeContent />} />
          <Route path='/login' element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);