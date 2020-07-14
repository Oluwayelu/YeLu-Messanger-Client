import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import {
  Grid,
  Link,
  Paper,
  Button,
  Checkbox,
  TextField,
  Typography,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';

import { register } from '../../_actions/userActions'

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

const Register = ({
  user,
  error,
  history,
  register
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    if (error.msg) {
      enqueueSnackbar(error.msg, {
        variant: 'error'
      })
    }
  }, [error])

  return (
    <Paper className={classes.root}>
      <Grid container direction="row">
        <Grid item sm={6}>
          <Paper className={classes.paper} >
            <Grid item>
              <Typography component="h1" variant="h3" align="center">
                Register
            </Typography>
              <Divider />
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  username: '',
                  password: '',
                  checked: false
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string()
                    .required('Your Name is required'),
                  email: Yup.string()
                    .required('Email is required')
                    .email('Email is not valid'),
                  username: Yup.string()
                    .required('Username is required'),
                  password: Yup.string()
                    .required('Password is required')
                    .max(100, 'Password is too long')
                    .min(6, 'Password too short'),
                  password1: Yup.string()
                    .equals([Yup.ref('password')], 'Password does not match'),
                  checked: Yup.bool()
                    .required('You have to accept the Terms and Condition')
                })}
                onSubmit={(
                  values,
                  { setStatus, setSubmitting }
                ) => {
                  setStatus()
                  register(values, history)
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
                        className={classes.textField}
                        name="name"
                        label="Full Name"
                        placeholder="Surname  Firstname  Middlename"
                        fullWidth={true}
                        variant="outlined"
                        margin="normal"
                        required={true}
                        helperText={
                          touched.name ? errors.name : ''
                        }
                        error={
                          touched.name &&
                          Boolean(errors.name)
                        }
                        value={values.name}
                        onChange={handleChange}
                      />
                      <TextField
                        id="email"
                        className={classes.textField}
                        name="email"
                        label="Email"
                        placeholder="example@gmail.com"
                        fullWidth={true}
                        variant="outlined"
                        margin="normal"
                        required={true}
                        helperText={
                          touched.email ? errors.email : ''
                        }
                        error={
                          touched.email &&
                          Boolean(errors.email)
                        }
                        value={values.email}
                        onChange={handleChange}
                      />
                      <TextField
                        id="username"
                        className={classes.textField}
                        name="username"
                        label="Username"
                        placeholder="Username"
                        fullWidth={true}
                        variant="outlined"
                        margin="normal"
                        required={true}
                        helperText={
                          touched.username ? errors.username : ''
                        }
                        error={
                          touched.username &&
                          Boolean(errors.username)
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
                      <TextField
                        id="password1"
                        className={classes.textField}
                        name="password1"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        fullWidth={true}
                        variant="outlined"
                        margin="normal"
                        required={true}
                        helperText={
                          touched.password1 ? errors.password1 : ''
                        }
                        error={
                          touched.password1 &&
                          Boolean(errors.password1)
                        }
                        value={values.password1}
                        onChange={handleChange}
                        type="password"
                      />
                      <Checkbox
                        color="primary"
                        id="checked"
                        name="checked"
                        value={values.checked}
                        onChange={handleChange}
                      /> Accept{' '}
                      <Link href="/terms_&_conditions">
                        Terms and Condition
                    </Link>
                      <Button
                        type="submit"
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Register
                    </Button>
                    </form>
                  )}
              </Formik>
            </Grid>
            <Grid item xs={9}>
              <Typography>
                <Link
                  href="/"
                >
                  Already have an account?
              </Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item className={classes.about} sm={4}>
          <img src={require('../../img/logo.png')} alt="" style={{ width: '100px' }} />
          <h2>Welcome to YeLu Messanger</h2>
          <label>{user.users && user.users.length} people uses YeLu Messanger</label>
        </Grid>
      </Grid>
    </Paper>
  );
};


const mapStateToProps = state => ({
  user: state.user,
  error: state.error
})

export default connect(mapStateToProps, { register })(Register);