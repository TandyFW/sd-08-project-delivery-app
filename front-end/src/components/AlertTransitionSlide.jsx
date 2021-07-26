import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Transition from './Transition';
import ContextProvider from '../context';

export default function AlertTransitionSlide({ title, text, open }) {
  const {
    openRegisterAlert,
  } = useContext(ContextProvider);

  // const [open] = React.useState(openRegisterAlert.value);

  // const handleClickOpen = () => {
  //   openRegisterAlert.set(true);
  // };

  const handleClose = () => {
    openRegisterAlert.set(false);
  };

  AlertTransitionSlide.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={ handleClickOpen }>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={ open }
        TransitionComponent={ Transition }
        keepMounted
        onClose={ handleClose }
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose } color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
