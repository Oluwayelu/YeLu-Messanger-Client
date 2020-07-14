import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, TextField, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons'
import { AiOutlineUpload } from 'react-icons/ai'
import { Formik } from 'formik';
import * as Yup from 'yup';



const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: '#CCC',
  },
  headerRow: {
    maxHeight: 60,
    zIndex: 5,
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.palette.primary.dark,
  },
  messageContainer: {
    height: '100%',
  },
  messagesRow: {
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  newMessageRow: {
    width: '100%',
    padding: theme.spacing(0, 2, 1),
  },
  inputRow: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  form: {
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1, 1.5),
  },
  messageItem: {
    float: 'left',
    maxWidth: '60%',
    backgroundColor: '#FFF',
    margin: theme.spacing(1),
    borderRadius: theme.spacing(0, 2)
  },
  myMessageItem: {
    color: '#FFF',
    float: 'right',
    maxWidth: '60%',
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2, 0)
  },
  file: {
    maxWidth: '90%'
  }
}));
const name = 'Ifeoluwa'
const ChatBox = ({
  send,
}) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.headerRow}>
        <Paper square elevation={3} className={classes.paper}>
          <Typography color="primary" variant="h6">
            Room Name
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.messageContainer}>
          <Grid item xs={12} className={classes.messagesRow}>
            <List>
              <ListItem
                className={classes.messageItem}
                alignItems="flex-start"
              >
                <ListItemAvatar
                  className={classes.avatar}
                >
                  <Avatar>H</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="David"
                  secondary={
                    <React.Fragment>
                      Hello Ifeoluwau jbasiis nisisnv dfghjnaa  bajja ajbjsd jabja kjbabsas asbjs ja kjbajc ajdbajsbjd ja bcdlsalja cjcdbaj sjcbcj dcj cjac acak jdzaodb dfkjz
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem
                className={name === "Ifeoluwa" ? classes.myMessageItem : classes.messageItem}
                alignItems="flex-start"
              >
                <ListItemAvatar
                  className={classes.avatar}
                >
                  <Avatar>H</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Ifeoluwa"
                  secondary={
                    <React.Fragment>
                      <img src={'http://localhost:8000/uploads/avatar/avatar_1594598009577_1.jpg'} alt="img" className={classes.file} />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem
                className={classes.messageItem}
                alignItems="flex-start"
              >
                <ListItemAvatar
                  className={classes.avatar}
                >
                  <Avatar>H</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="David"
                  secondary={
                    <React.Fragment>
                      <video src={'http://localhost:8080/uploads/1594160261274_TRUE_LOVE_(Mark_Angel_Comedy)_(Episode_191)(720p).mp4'} alt="vide" type="vide0/mpd" controls className={classes.file} />
                    </React.Fragment>
                  }
                />
              </ListItem>

            </List>
          </Grid>
          <Grid item xs={12} className={classes.inputRow} >
            <Formik
              initialValues={{
                message: ''
              }}
              validationSchema={Yup.object().shape({
                message: Yup.string()
                  .required('Message is required')
                  .max(500, 'Message is too long')
              })}
              onSubmit={(
                { message },
                { setStatus, setSubmitting }
              ) => {
                setStatus()
                const msgData = {
                  message,
                  room: '5f0b7d0cfc594a12ece9dec6'
                }
                send(msgData)
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors
              }) => (
                  <form
                    onSubmit={handleSubmit}
                    className={classes.form}
                  >
                    <Grid
                      container
                      className={classes.newMessageRow}
                      alignItems="flex-end"
                    >
                      <Grid item xs={10}>
                        <TextField
                          id="message"
                          label="Message"
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          value={values.message}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton type="submit">
                          <AiOutlineUpload />
                        </IconButton>
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton type="submit">
                          <Send color="primary" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </form>
                )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatBox;