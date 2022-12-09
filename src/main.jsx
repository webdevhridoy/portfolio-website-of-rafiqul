import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AuthProvider from './context/AuthProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <App />
      <Toaster></Toaster>
    </AuthProvider>
  </>
);
