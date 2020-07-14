import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu,
  AppBar,
  Button,
  Toolbar,
  MenuItem,
  Typography,
  Link,
} from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'

import { logOut } from '../../_actions/userActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    color: '#FFF'
  },
  titleImg: {
    display: 'flex',
    marginRight: theme.spacing(20)
  },
  userDropdown: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
    },
  },
}));

const Header = ({
  user,
  logOut,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropClose = () => {
    setDropdownOpen(false);
    setAnchorEl(null);
  };

  const handleDropOpen = event => {
    setDropdownOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const arrowIcon = () => {
    if (dropdownOpen) {
      return <ArrowDropUp />;
    }
    return <ArrowDropDown />;
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#1A1A1D' }}>
          <img src={require('../../img/logo.png')} alt="Logo" className={classes.titleImg} />
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/chat">
              Room
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/about">
              About
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/contact">
              Contact
            </Link>
          </Typography>
          <Button
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={handleDropOpen}
            className={classes.userDropdown}
            color="default"
          >
            {user.user.username}
            {arrowIcon()}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => logOut()}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { logOut })(Header);
