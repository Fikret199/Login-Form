import { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [onClick, setOnClick] = useState(false);

  const makeItClick = () => {
    setOnClick(true);
  };

  return (
    <div>
      <button className={classes.button} onClick={makeItClick}>
        Login
      </button>
    </div>
  );
};

export default Button;
