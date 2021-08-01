import React, { useContext } from 'react';
import './App.css';
import Routes from './Routes';
import NavBar from './views/Components/NavBar';
import Context from './context/Context';

function App() {
  const { userData } = useContext(Context);
  // console.log(userdata);
  return (
    <>
      {(userData.token)
        ? <NavBar userType="customer" userName={ userData.user.name } />
        : ''}
      <Routes />
    </>
  );
}

export default App;
