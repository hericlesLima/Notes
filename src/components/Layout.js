import React from "react";

import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"; 
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

  drawer: {
    width: drawerWidth
  },

  drawerPaper: {
    width: drawerWidth
  },

  root: {
    display: "flex"
  }
});

export default function Layout(props) {
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary"/>,
      path: "/"
    },

    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary"/>,
      path: "/create"
    }
  ]

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">
            Ninja Notes
          </Typography>
        </div>

        {/* List items */}

        <List>
          {menuItems.map(item => (
            <ListItem key={item.text} button onClick={() => history.push(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>


      </Drawer>
      <div className={classes.page}>{props.children}</div>
    </div>
  );
}
