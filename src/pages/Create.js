import React, { useState } from "react";

import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Category } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  /*btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline", 
  },*/

  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();

  const history = useHistory();

  const [title, setTitle] = useState(" ");
  const [details, setDetails] = useState(" ");

  const [category, setCategory] = useState("todos")

  const [titleError, setTitleError] = useState(" ");
  const [detailsError, setDetailsError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }

    if (title && details) {
      fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={setTitleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={setDetailsError}
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio/>} label="Money"/>
          <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
          <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
          <FormControlLabel value="work" control={<Radio/>} label="Work"/>
        </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
