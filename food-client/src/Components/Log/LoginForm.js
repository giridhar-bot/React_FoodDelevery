import React, { useState } from "react";
import styled from "@emotion/styled";
import {TextField, Button} from "@mui/material";

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "fit-content",
    border: "1px solid #ccc",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // TODO: Add authentication logic here
    if (email === "example@example.com" && password === "password") {
      localStorage.setItem("authenticated", "true");
      window.location.reload();
    }
  };

  return (
    <form className={classes.root}>
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
