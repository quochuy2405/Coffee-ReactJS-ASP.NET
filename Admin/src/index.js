import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './app/AuthContext';
import store from './app/Store';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import ContextProvider from './app/Context';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <AuthContextProvider>
   
    <BrowserRouter>
    <ContextProvider>
    <Provider store={store}>

    <SnackbarProvider  autoHideDuration={1500}  maxSnack={2} anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
    <App /> 
    </SnackbarProvider>

    </Provider>
    </ContextProvider>
    </BrowserRouter>

    </AuthContextProvider>
    </StyledEngineProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

