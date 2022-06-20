import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MUITheme from './themes/MUITheme';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline enableColorScheme />
    <ThemeProvider theme={MUITheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
