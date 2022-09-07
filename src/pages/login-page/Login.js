import classes from "./Login.module.css";
import LoginForm from "./LoginForm";
import LogInNav from "./LogInNav";

const Login = () => {
  return (
    <div className={classes.login}>
      <LogInNav />
      <LoginForm />
    </div>
  );
};

export default Login;
