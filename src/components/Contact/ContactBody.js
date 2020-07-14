import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Paper,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
  paper: {
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPaper: {
    width: theme.spacing(20),
    height: theme.spacing(10),
    padding: theme.spacing(5),
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(10),
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

const ContactBody = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction="row" className={classes.paper}>
        <Typography variant="h3" align="center">
          Contact Page
        </Typography>
        
      </Grid>
    </Paper >
  );
};

export default ContactBody;