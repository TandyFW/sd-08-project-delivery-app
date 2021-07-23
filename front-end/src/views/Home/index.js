import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/login');
    }
  }, [history, location]);
  return (
    <div>
      ...Redirecionando
    </div>
  );
}

export default Home;
