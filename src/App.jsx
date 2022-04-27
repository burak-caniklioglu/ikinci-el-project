import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from './contexts/ProductContext';
import { UserProvider } from './contexts/UserContext';
import Router from './routes/Router';

function App() {
  return (

    <UserProvider>
      <ProductProvider>
        <Router />
        <ToastContainer />
      </ProductProvider>
    </UserProvider>

  );
}

export default App;
