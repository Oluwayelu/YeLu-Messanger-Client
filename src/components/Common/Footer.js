import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar
} from '@material-ui/core'

const Footer = () => {
  return (
    <div>
      <Toolbar style={{ backgroundColor: '#1A1A1D', textAlign: 'center', color: '#007bff' }}>
        Copyright &copy; {new Date().getFullYear()} YeLu Tech.

      </Toolbar>
    </div>
  );
};

export default Footer;