import React, { createContext, useContext, useState } from "react";

const loginContext = createContext();

export const useLoginContext = () => useContext(loginContext);

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
    setIsLoggedIn(true);
  };

  console.log(firstName);

  const logout = () => {
    localStorage.clear();
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsLoggedIn(false);
  };

  const state = {
    isLoggedIn,
    setIsLoggedIn,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    login,
    logout,
  };

  return (
    <loginContext.Provider value={state}>{children}</loginContext.Provider>
  );
};

export default LoginProvider;
