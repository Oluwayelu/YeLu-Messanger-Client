import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Rooms from './Rooms';
import Users from './Users';
import ChatBox from './ChatBox';
import Header from '../Common/Header';

import { getChats, sendChat } from '../../_actions/chatActions'
import { getMyRooms } from '../../_actions/roomAction'

const useStyles = makeStyles(theme => ({
  paper: {
    minHeight: 'calc(100vh - 64px)',
    borderRadius: 0,
    backgroundColor: theme.palette.primary.light
  },
  sidebar: {
    zIndex: 8,
  },
  subheader: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  tab: {
    width: '50%'
  },
  globe: {
    backgroundColor: theme.palette.primary.dark,
  },
  subheaderText: {
    color: theme.palette.primary.dark,
  },
}));

const Chat = ({
  chat,
  room,
  user,
  getChats,
  sendChat,
  getMyRooms
}) => {
  const classes = useStyles()
  const [tab, setTab] = useState(0)

  useEffect(() => {
    getChats()
    getMyRooms()
  }, [])
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={4}>
          <Paper square elevation={5} className={classes.paper}>
            <Paper square>
              <Tabs
                variant="standard"
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={(e, val) => setTab(val)}
              >
                <Tab label="Rooms"
                  className={classes.tab} />
                <Tab label="Members"
                  className={classes.tab} />
              </Tabs>
            </Paper>
            {tab === 0 && (
              <Rooms rooms={room} />
            )}
            {tab === 1 && (
              <Users user={user.users} />
            )}
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <ChatBox chat={chat} send={sendChat} />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  chat: state.chat,
  room: state.room,
  user: state.user
})

export default connect(mapStateToProps, { getChats, sendChat, getMyRooms })(Chat);