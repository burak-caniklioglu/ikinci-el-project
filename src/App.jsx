import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Router from './routes/Router';

function App() {
  return (

    <UserProvider>
      <Router />
    </UserProvider>

  );
}

export default App;
