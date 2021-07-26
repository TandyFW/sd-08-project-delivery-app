import React from 'react';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(
  (props, ref) => <Slide direction="up" ref={ ref } { ...props } />,
);

export default Transition;
