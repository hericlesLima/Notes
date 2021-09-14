import React from "react";

//Card
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

//

export default function Notes({ note, handleDelete }) {
  return (
    <Card elevation={2}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary">
                {note.details}
            </Typography>
        </CardContent>
    </Card>
  );
}
