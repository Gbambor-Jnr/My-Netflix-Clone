import NetflixContext from "./netflix-context";
import { useState } from "react";

const NetflixProvider = (props) => {
  const [token, setToken] = useState("");
  let [email, setEmail] = useState("");

  const isLogedIn = token;
  const signinUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPggvG5gT9SsPNVrtIJff3FI-GF4W6Pg4";
  const signupUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPggvG5gT9SsPNVrtIJff3FI-GF4W6Pg4";

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  const updateEmail = (val) => {
    setEmail(val);
  };

  const defaultValue = {
    signinUrl: signinUrl,
    signupUrl: signupUrl,
    token: token,
    islogin: isLogedIn,
    login: login,
    logout: logout,
    updateEmail: updateEmail,
    email: email,
  };

  return (
    <NetflixContext.Provider value={defaultValue}>
      {props.children}
    </NetflixContext.Provider>
  );
};

export default NetflixProvider;
