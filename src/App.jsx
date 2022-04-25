import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './contexts/UserContext';
import Router from './routes/Router';

function App() {
  return (

    <UserProvider>
      <Router />
      <ToastContainer />
    </UserProvider>

  );
}

export default App;
