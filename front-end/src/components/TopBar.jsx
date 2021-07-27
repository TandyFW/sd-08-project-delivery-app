import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const TopBar = ({ subject, user }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={ classes.menuButton }
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={ classes.title }>
            {subject}
          </Typography>
          <Typography variant="h6" className={ classes.title }>
            {user}
          </Typography>
          <Button color="inherit">Exit</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
  subject: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default TopBar;
