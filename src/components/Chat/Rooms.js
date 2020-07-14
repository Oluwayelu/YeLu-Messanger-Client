import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Language } from '@material-ui/icons'
import { connect } from 'react-redux';

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
}));

const Rooms = ({
  room
}) => {
  const classes = useStyles()
  return (
    <List>
      <ListItem
        button
      >
        <ListItemAvatar>
          <Avatar >
            <Language />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Global Room"
        />
      </ListItem>
      <Divider />
      {room.myrooms || room.loading && (
        <>
          {room.myrooms.map(room => (
            <ListItem
              className={classes.listItem}
              button
            >
              <ListItemAvatar>
                <Avatar>RM</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Room Name"
                secondary={
                  <React.Fragment>
                    Room Last Message
                </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </>
      )}

    </List>
  );
};

const mapStateToProps = state => ({
  room: state.room
})

export default connect(mapStateToProps)(Rooms);