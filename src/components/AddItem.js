import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddItem({ addItem }) {
  const [newCompany, setCompany] = useState("");
  const [newPosition, setPosition] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newDate, setNewDate] = useState("");
  const classes = useStyles();

  const newItem = {
    company: newCompany,
    position: newPosition,
    link: newLink,
    date: newDate,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    reset(); 
  };

  const reset = () => {
    setCompany("");
    setPosition("");
    setNewLink("");
    setNewDate("");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <h2>ADD NEW</h2>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField
            value={newCompany}
            onChange={(e) => setCompany(e.target.value)}
            label="Company"
          />
          <TextField
            value={newPosition}
            onChange={(e) => setPosition(e.target.value)}
            label="Job Title"
          />
          <TextField
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            label="Job Link"
          />
          <TextField
            id="date"
            type="date"
            className={classes.date}
            value={newDate}
            dafault="Date"
            onChange={(e) => setNewDate(e.target.value)}
          />
          {/* <TextField label="Company" />
          <TextField label="Job Title" />
          <TextField label="Job Link" />
          <TextField label="Date Applied" /> */}
          <Button type="submit" variant="outlined" color="secondary">
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
}
