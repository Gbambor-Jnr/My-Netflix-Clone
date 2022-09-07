import { useState } from "react";

import { Link } from "react-router-dom";
import { useContext } from "react";
import NetflixContext from "../store/netflix-context";
import classes from "./SignInForm.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  const [signin, setSignin] = useState(true);
  const netCtx = useContext(NetflixContext);
  const [email, setEmail] = useState(netCtx.email);
  const emailRef = useRef("");
  const PasswordRef = useRef("");
  const history = useHistory();
  const [errorMessage, setmessage] = useState("");
  const [isLoading, setIsloading] = useState(false);

  //   const [token, setToken] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch("url");
  //     };
  //   }, []);

  const linkClickHandler = () => {
    setSignin(false);
  };
  let url;
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = PasswordRef.current.value;
    setIsloading(true);
    if (signin) {
      url = netCtx.signinUrl;
    } else {
      url = netCtx.signupUrl;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((res) => {
        setIsloading(false);
        if (!res.ok) {
          return res.json().then((err) => {
            setmessage(err.error.message);
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);

        netCtx.login(data.idToken);
        history.replace("/welcome");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={classes.page}>
      <div className={classes.signinContainer}>
        <form onSubmit={submitHandler}>
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder={"Email or phone number"}
            className={classes.formInp}
            ref={emailRef}
            onChange={emailChangeHandler}
            value={email}
          />
          <input
            type="text"
            placeholder="password"
            className={classes.formInp}
            ref={PasswordRef}
          />
          <p style={{ color: "red", marginLeft: "50px" }}>
            {errorMessage.toLowerCase()}
          </p>
          {!isLoading && (
            <button type="submit" className={classes.formbut}>
              {signin ? "Sign In" : "Sign Up"}
            </button>
          )}
          {isLoading && (
            <p style={{ marginLeft: "30px" }}>sending request...</p>
          )}
          <div className={classes.inpP}>
            <input type="checkbox" id="check" />
            <label htmlFor="check" style={{ marginLeft: "-80px" }}>
              Remember me
            </label>
            <label>Need Help?</label>
          </div>
          <div className={classes.newdiv}>
            <span>
              New to Netflix?{" "}
              <Link to="/sign-in" onClick={linkClickHandler}>
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
