import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const useStyles = styled({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
});

const FoodTitle = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2">Our Delicious Food</Typography>
      <Typography variant="subtitle1">
      </Typography>
    </Container>
  );
};

export default FoodTitle;
