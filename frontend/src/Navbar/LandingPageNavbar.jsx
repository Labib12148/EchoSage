import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import chatImage from '../assets/chat.png';

const useStyles = makeStyles((theme) => ({
    navbar: {
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
    navbarNav: {
      marginLeft: 'auto',
      color: '#fff',
    },
    button: {
      '&:hover': {
        backgroundColor: '#555',
        color: 'inherit',
      },
    },
  }));
  
function LandingPageNavbar() {
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
                <div className={classes.navbarNav}>
                    <Button component={Link} to="/about" color="inherit" className={classes.button}>About</Button>
                    <Button component={Link} to="/Login" color="inherit" className={classes.button}>Login</Button>
                    <Button component={Link} to="/Signup" color="inherit" className={classes.button}>Signup</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default LandingPageNavbar;
