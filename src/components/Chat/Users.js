import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Avatar, ListItemText, ListItemAvatar } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  subheader: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  globe: {
    backgroundColor: theme.palette.primary.dark,
  },
  subheaderText: {
    color: theme.palette.primary.dark,
  },
  list: {
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  avatar: {
    margin: theme.spacing(0, 3, 0, 1),
  },
}));

const Users = () => {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem
        button
      >
        <ListItemAvatar className={classes.avatar}>
          <Avatar>AD</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ifeoluwa" />
      </ListItem>
    </List>
  );
};

export default Users;