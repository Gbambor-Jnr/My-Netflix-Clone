import { useContext, useRef, useState } from "react";
// import { useContext } from "react";
// import NetflixContext from "../store/netflix-context";
import classes from "./LoginForm.module.css";
import { useHistory } from "react-router-dom";
import NetflixContext from "../store/netflix-context";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef("");
  const netCtx = useContext(NetflixContext);
  const [placeHolder, setPlaceHolder] = useState("Email address");

  // const [token, setToken] = useState("");
  // const netCtx = useContext(NetflixContext);
  const history = useHistory();

  const focusHandler = () => {
    const enteredEmail = emailRef.current.value;
    if (enteredEmail.length === 0) {
      setPlaceHolder("Email address");
    } else {
      setPlaceHolder("");
    }
  };

  const submitHandler = () => {
    // const enteredEmail = emailRef.current.value;
    // const fetchData = async () => {
    //   const response = await fetch("", {
    //     method: "POST",
    //     body: JSON.stringify({ email: enteredEmail }),
    //   });
    //   const data = await response.json();
    //   // setToken(data.result.tokenId);
    // };
    history.push("/sign-in");
  };
  const changeHandler = (e) => {
    setEmail(e.target.value);
    netCtx.updateEmail(e.target.value);
  };

  return (
    <div className={classes.loginContainer}>
      <h2>Unlimited movies, TV shows, and more.</h2>
      <p>Watch anywhere. Cancel anytime</p>
      <h6>
        Ready to watch? Enter your email to create or restart your membership
      </h6>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          // ref={emailRef}
          placeholder={placeHolder}
          className={classes.input}
          onFocus={focusHandler}
          onChange={changeHandler}
        />
        <button>Get Started</button>
      </form>
    </div>
  );
};

export default LoginForm;
