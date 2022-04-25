import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}

export default App;
