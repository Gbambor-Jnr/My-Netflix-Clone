import React from "react";

const NetflixContext = React.createContext({
  signinUrl: "",
  signupUrl: "",
  token: "",
  islogin: true,
  login: () => {},
  logout: () => {},
  email: "",
  updateEmail: () => {},
});

export default NetflixContext;
