import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransitionAlerts({ message, handler, open }) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  return (
    <div className={ classes.root }>
      <Collapse in={ open }>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={ () => {
                handler(false);
              } }
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </div>
  );
}

TransitionAlerts.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};
