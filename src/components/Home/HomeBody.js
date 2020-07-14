import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Paper,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FcPlus, FcSettings, FcManager, FcAssistant } from 'react-icons/fc'
import { AddAPhotoOutlined } from '@material-ui/icons'

import Join from '../Room/Join';
import Create from '../Room/Create';
import Edit from '../Profile/Edit';
import Settings from '../Profile/Settings';
import FileUpload from '../Common/FileUpload';
import HomeTable from './HomeTable';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
  grid: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  innerPaper: {
    width: theme.spacing(25),
    height: theme.spacing(20),
    padding: theme.spacing(5),
    margin: theme.spacing(2)
  },
  button: {
    color: '#FFF',
    width: '350px',
    backgroundColor: theme.palette.primary.main,
  },
  avatar: {
    width: '350px',
    height: '350px'
  }
}));

const HomeBody = ({
  user,
  error,
  upload,
  history
}) => {
  const classes = useStyles();

  const [showCreateRoom, setShowCreateRoom] = useState(false)
  const [showJoinRoom, setShowJoinRoom] = useState(false)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <Paper className={classes.root}>
      <Grid container direction="row" className={classes.grid}>
        <Grid item md={6}>
          <Grid container direction="column" className={classes.paper}>
            <Grid item>
              <Avatar
                alt="Logo"
                className={classes.avatar}
                src={user.avatar ? `http://localhost:8000/${user.avatar}` : ''}
                variant="square"
              />
            </Grid>
            <Grid item>
              <FileUpload upload={upload}>
                <Button className={classes.button} type="submit" fullWidth>
                  Upload Avatar{' '}
                  <AddAPhotoOutlined fontSize="small" />
                </Button>
              </FileUpload>
            </Grid>

            <Grid item>
              <Typography variant="h4" align="center">
                Welcome {user.name}
              </Typography>
              {user.email}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container direction="column" className={classes.paper}>
            <Grid container direction="row" >
              <Grid item sm={6}>
                <Paper className={classes.innerPaper} elevation={3} onClick={() => setShowCreateRoom(true)}>
                  <FcPlus size={35} />
                  <Typography variant="h5" align="center">
                    Create Room
                  </Typography>
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper className={classes.innerPaper} elevation={3} onClick={() => setShowJoinRoom(true)}>
                  <FcAssistant size={35} />
                  <Typography variant="h5" align="center">
                    Join Room
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container direction="row" >
              <Grid item sm={6}>
                <Paper className={classes.innerPaper} elevation={3} onClick={() => setShowEditProfile(true)}>
                  <FcManager size={35} />
                  <Typography variant="h5" align="center">
                    Edit Profile
                  </Typography>
                </Paper>
              </Grid>
              <Grid item sm={6}>
                <Paper className={classes.innerPaper} elevation={3} onClick={() => setShowSettings(true)}>
                  <FcSettings size={35} />
                  <Typography variant="h5" align="center">
                    Settings
                  </Typography>
                </Paper>
              </Grid>
              {
                showJoinRoom && (
                  <Join open={showJoinRoom} setOpen={setShowJoinRoom} />
                )
              }
              {
                showCreateRoom && (
                  <Create open={showCreateRoom} setOpen={setShowCreateRoom} />
                )
              }
              {
                showEditProfile && (
                  <Edit open={showEditProfile} setOpen={setShowEditProfile} />
                )
              }
              {
                showSettings && (
                  <Settings open={showSettings} setOpen={setShowSettings} />
                )
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <HomeTable />
      </Grid>
    </Paper >
  );
};

export default HomeBody;