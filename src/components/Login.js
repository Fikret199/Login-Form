import { useState } from "react";
import Button from "./Button";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    if (event.target.value.length > 4) {
      setEnteredPasswordIsValid(true);
    }
  };

  const passwordBlurChangeHandler = (event) => {
    setEnteredPasswordIsTouched(true);

    if (enteredPassword.length < 4) {
      setEnteredPasswordIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    if (enteredPassword.length <= 4) {
      setEnteredPasswordIsValid(false);
      return;
    }
    setEnteredPasswordIsValid(true);

    setEnteredNameIsValid(true);

    console.log(enteredPassword.length);

    setEnteredName("");
    setEnteredPassword("");
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameIsTouched;
  const passwordInputIsValid =
    !enteredPasswordIsValid && enteredPasswordIsTouched;

  return (
    <div>
      <form onSubmit={formSubmissionHandler}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Type your username"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          ></input>
          {nameInputIsValid && (
            <p className={classes.invalid}>Please enter a name</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordBlurChangeHandler}
            value={enteredPassword}
          ></input>
          {passwordInputIsValid && (
            <p className={classes.invalid}>Password must have 5 words</p>
          )}
        </div>
        <Button />
      </form>
    </div>
  );
};

export default Login;
