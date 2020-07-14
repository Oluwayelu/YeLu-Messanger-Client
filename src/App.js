import React from 'react';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import store from './store';
import { currentUser, logOut, getUsers } from './_actions/userActions'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Common/PrivateRoute';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import setAuthToken from './utils/setAuthToken';
import Auth from './hoc/Auth'
import { getAllRoom } from './_actions/roomAction';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#58a5f0',
      main: '#0277bd',
      dark: '#004c8c',
    },
    secondary: {
      light: '#ffd95a',
      main: '#f9a825',
      dark: '#c17900',
      contrastText: '#212121',
    },
    danger: {
      light: '#DC3545'
    },
    background: {
      default: '#f0f0f0',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

store.dispatch(getUsers())
store.dispatch(getAllRoom())

if (localStorage.YeLuMessToken) {
  setAuthToken(localStorage.YeLuMessToken)
  const decoded = jwt_decode(localStorage.YeLuMessToken)

  store.dispatch(currentUser())

  if (decoded.exp < (Date.now() / 1000)) {
    store.dispatch(logOut())

    window.location.href = '/login'
  }
}


const App = () => {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
            <Switch>
              <Route path="/register" exact component={Register} />
            </Switch>
            <Switch>
              <Route path="/chat" exact component={Chat} />
            </Switch>

            <Switch>
              <PrivateRoute
                exact path="/" component={Home}
              />
            </Switch>
            <Switch>
              <PrivateRoute path="/about" exact component={About} />
            </Switch>
            <Switch>
              <PrivateRoute path="/contact" exact component={Contact} />
            </Switch>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App