import React from "react";
import { Button, ButtonGroup, Container, Typography } from "@material-ui/core";

export default function Create() {
  return (
    <Container>
      <Typography 
        variant='h6' 
        component='h2' 
        gutterBottom
        color='textSecondary'
      >
        Create New Note
      </Typography>

      <Button 
        onClick={()=> console.log('You clicked')}
        type='submit'
        color='secondary'
        variant='contained'
      >
        Submit
      </Button>
    </Container>
  );
}
