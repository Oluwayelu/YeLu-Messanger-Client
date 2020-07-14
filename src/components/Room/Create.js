import React, { useState } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
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
import * as Yup from 'yup';

import { createRoom } from '../../_actions/roomAction'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.65)',
  },
  paper: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(5),
  },
  button: {
    padding: theme.spacing(2),
    margin: theme.spacing(3, 0, 2),
  },
  close: {
    left: '230px',
    bottom: '40px',
    color: '#dc3545'
  }
}));

const Create = ({
  open,
  setOpen,
  createRoom
}) => {
  const classes = useStyles()
  const [pass, setPass] = useState(false);

  return (
    <Modal open={open} className={classes.root}>
      <Paper className={classes.paper} >
        <Grid item>
          <Button className={classes.close} onClick={() => setOpen(false)}>
            <CancelOutlined />
          </Button>
          <Typography component="h1" variant="h3" align="center">
            Create Room
          </Typography>
          <Divider />
          <Formik
            initialValues={{
              name: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required('Room name is required'),
              password: Yup.string()
                .max(100, 'Password is too long')
                .min(6, 'Password too short'),
            })}
            onSubmit={(
              values,
              { setStatus, setSubmitting }
            ) => {
              setStatus()
              createRoom(values)
              setOpen(false)
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
            }) => (
                <form
                  onSubmit={handleSubmit}
                  className={classes.form}
                >
                  <TextField
                    id="name"
                    className={classes.input}
                    name="name"
                    label="Room Name"
                    placeholder="Room Name"
                    fullWidth={true}
                    variant="outlined"
                    margin="normal"
                    required={true}
                    helperText={
                      touched.login ? errors.login : ''
                    }
                    error={
                      touched.login &&
                      Boolean(errors.login)
                    }
                    value={values.name}
                    onChange={handleChange}
                  />
                  {
                    pass && (
                      <TextField
                        id="password"
                        className={classes.input}
                        name="password"
                        label="Password"
                        placeholder="Password"
                        fullWidth={true}
                        variant="outlined"
                        margin="normal"
                        required={true}
                        hidden={true}
                        helperText={
                          touched.password ? errors.password : ''
                        }
                        error={
                          touched.password &&
                          Boolean(errors.password)
                        }
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                      />
                    )
                  }
                  <Button
                    type="button"
                    color="default"
                    onClick={() => setPass(!pass)}
                  >
                    {pass ? "Remove Password" : "Add Password"}
                  </Button>
                  <Button
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Create Room
                  </Button>
                </form>
              )}
          </Formik>
        </Grid>
      </Paper>
    </Modal>
  )
}

const mapStateToProps = state => ({
  room: state.room
})

export default connect(mapStateToProps, { createRoom })(Create);