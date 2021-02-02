import React, { createContext, useContext, useState } from "react";

const loginContext = createContext();

export const useLoginContext = () => useContext(loginContext);

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstState] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const login = () => {
    setFirstState(firstName);
    setLastName(lastName);
    setEmail(email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setFirstState("");
    setLastName("");
    setEmail("");
    setIsLoggedIn(false);
  };

  const state = {
    isLoggedIn,
    firstName,
    lastName,
    email,
    login,
    logout,
  };

  return (
    <loginContext.Provider value={state}>{children}</loginContext.Provider>
  );
};

export default LoginProvider;
