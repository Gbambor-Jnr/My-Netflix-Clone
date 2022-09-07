import { useContext, useRef } from "react";

import { useState } from "react";
import NetflixContext from "../store/netflix-context";
import classes from "./ProfileForm.module.css";
import { Link } from "react-router-dom";

const ProfileForm = () => {
  const netCtx = useContext(NetflixContext);
  //   const history = useHistory();
  const [request, setRequest] = useState(false);

  const passwordRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordRef.current.value;
    setRequest(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAPggvG5gT9SsPNVrtIJff3FI-GF4W6Pg4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: netCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
    });
    // history.replace("/welcome");
  };

  return (
    <div>
      <>
        <Link to="/welcome" style={{ color: "white", marginTop: "-200px" }}>
          home
        </Link>
        {!request && (
          <div className={classes.profCont}>
            <div className={classes.profForm}>
              <form onSubmit={submitHandler}>
                <label htmlFor="password">Input New Password:</label>
                <input
                  id="password"
                  type="text"
                  ref={passwordRef}
                  placeholder="new password"
                />
                <button type="submit">change</button>
              </form>
            </div>
          </div>
        )}
        {request && <p>Password changed Succesfully</p>}
      </>
    </div>
  );
};

export default ProfileForm;
