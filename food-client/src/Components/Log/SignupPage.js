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



// The given code is a React code that contains two components - LoginPage and SignupPage. These components are responsible for rendering login and signup forms respectively.

// The code imports several modules from the Material-UI library, including ThemeProvider, Button, TextField, Typography, and Link. It also imports createTheme and styled from Material-UI for styling purposes, and useHistory from react-router-dom for navigating between pages.

// The createTheme function is used to create a new theme that will be applied to the components. The ThemeProvider component is used to wrap the components and pass the theme down to them.

// The styled function is used to create custom styles for the form and div elements, which are then passed to the corresponding components - StyledForm and StyledPage.

// Both LoginPage and SignupPage components use useState to manage the state of the input fields for the username and password. They also use useHistory to navigate to different pages when the user submits the form.

// The handleLogin function is responsible for validating the user's input and logging them in. It first retrieves the list of existing users from local storage, then checks if the entered username and password match any of the stored user objects. If a match is found, the user is logged in by setting loggedIn to true in local storage and redirecting them to the product page.

// The handleSignup function is responsible for validating the user's input and registering a new user. It first retrieves the list of existing users from local storage, then checks if the entered username already exists. If it does, an alert message is shown to the user, and they are asked to choose a different username. If the username is unique, the new user object is added to the list of existing users and stored in local storage. An alert message is then shown to the user, and they are redirected to the login page.

// Finally, both components render a form with two input fields for the username and password, a submit button, and a link to the other page. If the user is on the login page, they will see a link to the signup page, and vice versa. The components use the StyledForm and StyledPage components to apply custom styles to the form and page elements.