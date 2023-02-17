import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Typography
} from "@mui/material";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signed up successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 16 }}>
        <Typography variant="h4" align="center">
          Sign Up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Signup;
