import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme();

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  padding: "20px",
  borderRadius: "4px",
  background: "#fff",
});

const StyledPage = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "#f2f2f2",
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) {
      alert("Invalid username or password. Please try again.");
      return;
    }
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", user.username);
    history.push("/products");
  };
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Typography variant="h4" component="h1" align="center">
          Log in
        </Typography>
        <StyledForm onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Log in
          </Button>
          <Typography variant="body1" align="center">
            Don't have an account?{" "}
            <Link href="/signup" color="primary">
              Sign up
            </Link>
          </Typography>
        </StyledForm>
      </StyledPage>
    </ThemeProvider>
  );
};

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username already exists
    const userExists = existingUsers.find((user) => user.username === username);
    if (userExists) {
      alert("This username is already taken. Please choose a different one.");
      return;
    }

    // Add the new user to local storage
    existingUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Sign up successful! Please log in.");
    history.push("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Typography variant="h4" component="h1" align="center">
          Sign up
        </Typography>
        <StyledForm onSubmit={handleSignup}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Sign up
          </Button>
          <Typography variant="body1" align="center">
            Already have an account?{" "}
            <Link href="/login" color="primary">
              Log in
            </Link>
          </Typography>
        </StyledForm>
      </StyledPage>
    </ThemeProvider>
  );
};

export { LoginPage, SignupPage };
