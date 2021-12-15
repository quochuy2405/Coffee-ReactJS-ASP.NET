import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './app/AuthContext';
import ContextProvier from './app/Context';
import store from './app/Store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ContextProvier>
    <BrowserRouter>
    <Provider store={store}>
    <SnackbarProvider  autoHideDuration={1500}  maxSnack={4} anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
    <App /> 
    </SnackbarProvider>
    </Provider>
    </BrowserRouter>
    </ContextProvier>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

