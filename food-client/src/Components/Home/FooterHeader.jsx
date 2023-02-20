import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const useStyles = styled({
  root: {
    marginTop: "2rem",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
});

const FooterHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="subtitle1" className={classes.title}>
            © My Restaurant 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FooterHeader;
