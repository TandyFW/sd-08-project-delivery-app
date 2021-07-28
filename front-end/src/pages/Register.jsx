import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Components from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    height: '100vh',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.root }>
      <Components.Register />
    </Grid>
  );
};

// const [user, setUser] = useState({});

// useEffect(() => {
//   const getUser = async () => {
//     const resp = await fetch('http://localhost:3001/login', {
//       headers: { 'Content-Type': 'application/json' },
//       method: 'POST',
//       body: JSON.stringify({ email: 'adm@deliveryapp' }),
//     });
//     const userObj = await resp.json();
//     console.log(userObj);
//     setUser(userObj);
//   };

//   getUser();
// }, []);

export default Register;
