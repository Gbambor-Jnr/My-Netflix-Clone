import Banner from "./pages/Banner";
import NavBar from "./pages/NavBar";

import RowItem from "./components/RowItem";
import Login from "./pages/login-page/Login";

import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";
import { useContext } from "react";
import NetflixContext from "./pages/store/netflix-context";
import ProfileForm from "./pages/profile/ProfileForm";

function App() {
  const netCtx = useContext(NetflixContext);

  const remove = (str, n) => {
    return str.length > n ? str.substr(0, n) + "..." : str;
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>

      {!netCtx.islogin && (
        <Route path="/login">
          <Login />
        </Route>
      )}
      {netCtx.islogin && (
        <Route path="/profile">
          <ProfileForm />
        </Route>
      )}

      {netCtx.islogin && (
        <Route path="/welcome">
          <>
            <Banner />
            <NavBar />
            <RowItem />
          </>
        </Route>
      )}

      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
