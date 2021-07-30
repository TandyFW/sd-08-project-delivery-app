import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const HeaderDate = ({ testId, date }) => {
  const formatDate = () => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-br');
  };

  return (
    <Typography
      variant="h5"
      color="textPrimary"
      data-testid={ testId }
    >
      { formatDate() }
    </Typography>
  );
};

HeaderDate.propTypes = {
  testId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default HeaderDate;
