import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Divider,
  TextField,
  Typography,
  Button,
  Modal
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CancelOutlined } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.65)',
  },
  paper: {
    minHeight: '80%',
    borderRadius: '10px',
    padding: '50px'
  },
  button: {
    color: '#FFF !important',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '15px',
    width: '90%'
  },
  input: {
    margin: '10px',
    width: '90%'
  },
  close: {
    left: '230px',
    bottom: '40px',
    color: '#dc3545'
  }
}));

const Edit = ({
  open,
  setOpen
}) => {
  const classes = useStyles()

  return (
    <Modal open={open}>
      <Paper className={classes.root}>
        <Grid item>
          <Paper className={classes.paper} elevation={5}>
            <Button className={classes.close} onClick={() => setOpen(false)}>
              <CancelOutlined />
            </Button>
            <Typography component="h1" variant="h3" align="center">
              Edit Profile
            </Typography>
            <Divider />
          </Paper>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default Edit;