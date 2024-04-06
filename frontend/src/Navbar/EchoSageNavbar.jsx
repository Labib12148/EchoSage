import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import chatImage from '../assets/chat.png';

const useStyles = makeStyles((theme) => ({
    navbar: {
      top: 0,
      backgroundColor: '#333',
      position: 'fixed',
      boxShadow: 'none',
    },
    navbarBrand: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
    logo: {
      width: 40,
      marginRight: theme.spacing(1),
    },
    navbarTitle: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#fff',
      '&:hover': {
        color: '#ffffff69',
    },
    },
  }));
  
function EchoSageNavbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Link to="/" className={classes.navbarBrand}>
                    <img src={chatImage} alt="LabiBot Logo" className={classes.logo} />
                    <Typography variant="h6" className={classes.navbarTitle}>
                        EchoSage
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default EchoSageNavbar;
