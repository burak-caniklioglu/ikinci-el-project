/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState(null);
  const values = {
    user,
    setUser,
    auth,
    setAuth,
  };
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useUser() {
  return useContext(UserContext);
}

export { UserContext, UserProvider, useUser };
