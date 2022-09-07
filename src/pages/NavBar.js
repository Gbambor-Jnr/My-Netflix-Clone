import images from "./netflix.png";
import image2 from "./Netflix-avatar.png";
import classes from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NetflixContext from "./store/netflix-context";
// import { Settings } from "@material-ui/icons";
import SettingsIcon from "@mui/icons-material/Settings";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const netCtx = useContext(NetflixContext);
  const [handleShow, setHandleShow] = useState(false);
  const [input, setInput] = useState("");
  const history = useHistory();

  const scroller = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  const logoutHandler = () => {
    netCtx.logout();
    history.replace("/login");
  };

  const submitHandler = (e) => {
    if (input === "profile") {
      history.push("/profile");
    }
    if (input === "account") {
      history.replace("/welcome");
    }
    setInput(e.target.value);
  };
  console.log(input);

  useEffect(() => {
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, []);
  return (
    <div className={handleShow ? classes.nav : classes.black}>
      <img src={images} className={classes.img1} alt="netflix" />
      <img src={image2} className={classes.img2} alt="netflix2" />
      <div>
        <button onClick={logoutHandler} className={classes.btn}>
          logout
        </button>
      </div>
      <Link to="/profile" className={classes.link}>
        profile
      </Link>
      <div className={classes.navdiv}>
        <SettingsIcon className={classes.icon} />
        <select onChange={submitHandler}>
          <option>account</option>
          <option>profile</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
