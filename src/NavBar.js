import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
      color: 'white',
      paddingLeft: '20px',
      textDecoration: 'none'
  }
}));

export default function DenseAppBar({ authToken }) {
  const classes = useStyles();

  async function signOut() {
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h6" color="inherit">
                AWS Amplify
            </Typography>
          </Link>
          <Link to="/serverless" className={classes.link}>
            Try serverless
          </Link>
          <Link to="/polly" className={classes.link}>
            Try polly
          </Link>
            {authToken ?
                <Button onClick={signOut} style={{ marginLeft: 'auto', color: 'white', border: '1px solid white' }}>Sign Out</Button>
                :
                <></>
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}
