import React, { useEffect, useState } from "react";

//Page
import { Container, Grid, Paper } from "@material-ui/core";



import NoteCard from "../components/NoteCard"

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async(id) => {
    await fetch('http://localhost:3000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
