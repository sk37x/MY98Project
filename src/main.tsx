import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './index.css'
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  breakpoints: {
    xxs: '19em',
    xs: '36em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontFamily: "Inter, sans-serif" 
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'     
     theme={theme}
      withGlobalClasses>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
