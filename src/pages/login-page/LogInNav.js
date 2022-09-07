import image from "../../pages/netflix.png";
import classes from "./LogInNav.module.css";

import { Link } from "react-router-dom";

const LogInNav = () => {
  return (
    <div className={classes.logindiv}>
      <img src={image} alt="neflix logo" className={classes.loginnav} />
      <div className={classes.selBtn}>
        <select>
          <option>English</option>
          <option>Deutsch</option>
        </select>
        {/* <button onClick={clickHandler}>Sign In</button> */}
        <Link to="/sign-in">Sign in</Link>
      </div>
    </div>
  );
};

export default LogInNav;
