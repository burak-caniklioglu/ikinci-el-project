/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const values = {
    user,
    setUser,
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
