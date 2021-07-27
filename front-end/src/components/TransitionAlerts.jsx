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
    '& > *': {
      position: 'absolute',
      bottom: theme.spacing(2),
      left: theme.spacing(2),

    },
  },
}));


export default function TransitionAlerts({ message, open, testId, severity }) {

  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  return (
    <Collapse className={ classes.root } in={ open.value }>
      <Alert
        // inputProps={ { 'data-testid': testId } }
        data-testid={ testId }
        severity={ severity }
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={ () => {
              open.set(!open.value);
            } }
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        { message }
      </Alert>
    </Collapse>

  );
}

TransitionAlerts.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    set: PropTypes.func,
  }).isRequired,
  testId: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,

};
