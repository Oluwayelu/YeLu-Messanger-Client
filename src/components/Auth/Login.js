import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import {
  Grid,
  Link,
  Button,
  TextField,
  Typography,
  Paper,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';

import { login } from '../../_actions/userActions'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1D',
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
    padding: theme.spacing(5),
    marginLeft: theme.spacing(10),
  },
  submit: {
    padding: theme.spacing(2),
    margin: theme.spacing(3, 0, 2),
  },
  about: {
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(5),
    marginLeft: theme.spacing(10),
  }
}));

const Login = ({
  user,
  room,
  error,
  login,
  history
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (error.msg) {
      enqueueSnackbar(error.msg, {
        variant: 'error'
      })
    }
  }, [user.isAuth, error, history])

  return (
    <Paper className={classes.root}>
      <Grid container direction="row">
        <Grid item sm={6}>
          <Paper className={classes.paper} >
            <Grid item>
              <Typography component="h1" variant="h3" align="center">
                Login
              </Typography>
              <Divider />
              <Formik
                initialValues={{
                  login: '',
                  password: '',
                }}
                validationSchema={Yup.object().shape({
                  login: Yup.string()
                    .required('Email/Username is required'),
                  password: Yup.string()
                    .required('Password is required')
                    .max(100, 'Password is too long')
                    .min(6, 'Password too short'),
                })}
                onSubmit={(
                  values,
                  { setStatus, setSubmitting }
                ) => {
                  setStatus()
                  login(values, history)

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
                        id="login"
                        className={classes.textField}
                        name="login"
                        label="User"
                        placeholder="Email/Username"
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
                        value={values.username}
                        onChange={handleChange}
                      />
                      <TextField
                        id="password"
                        className={classes.textField}
                        name="password"
                        label="Password"
                        placeholder="Password"
                        fullWidth={true}
                        variant="outlined"
                        margin="normal"
                        required={true}
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
                      <Button
                        type="submit"
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Login
                    </Button>
                    </form>
                  )}
              </Formik>
            </Grid>
            <Grid item>
              <Typography>
                <Link
                  href="/register"
                >
                  Don't have an account?
              </Link>
              </Typography>
              <Typography>
                <Link
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item className={classes.about} sm={4}>
          <img src={require('../../img/logo.png')} alt="" style={{ width: '100px' }} />
          <h2>Welcome to YeLu Messanger</h2>
          <label>{user.users && user.users.length} people uses YeLu Messanger</label>
          <label>There is a total of {room.rooms && room.rooms.length} rooms on YeLu Messanger</label>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  room: state.room,
  error: state.error
})

export default connect(mapStateToProps, { login })(Login);