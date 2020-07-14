import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import io from 'socket.io-client';

import { logOut, uploadAvatar } from '../../_actions/userActions';
import { getMyRooms } from '../../_actions/roomAction'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import HomeBody from './HomeBody';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
    borderRadius: theme.spacing(2),
  },
  grid: {
    width: '60%',
    height: '60%'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    marginRight: theme.spacing(10),
  },
  innerPaper: {
    padding: theme.spacing(5),
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(10),
  },
  logout: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.danger.light,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

const Home = ({
  msg,
  user,
  error,
  logOut,
  getMyRooms,
  uploadAvatar
}) => {
  let socket
  const { enqueueSnackbar } = useSnackbar()
  const ENDPOINT = 'http://localhost:8000'

  useEffect(() => {
    getMyRooms()
  }, [])

  useEffect(() => {
    if (error.msg) {
      enqueueSnackbar(error.msg, {
        variant: "error"
      })
    }
    if (msg) {
      enqueueSnackbar(msg, {
        variant: "success"
      })
    }
  })

  return (
    <div>
      <Header />
      <HomeBody
        user={user.user}
        logOut={logOut}
        upload={uploadAvatar}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  msg: state.msg,
  user: state.user,
  error: state.error
})

export default connect(mapStateToProps, {
  logOut,
  uploadAvatar,
  getMyRooms
})(Home);