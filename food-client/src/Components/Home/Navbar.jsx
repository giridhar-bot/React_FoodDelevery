import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const useStyles = styled({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
