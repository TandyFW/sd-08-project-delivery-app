import React, { useEffect } from 'react';
import Components from '../components';

const AdminManage = () => {
  // const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const resp = await fetch('http://localhost:3001/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ email: 'adm@deliveryapp' }),
      });
      const userObj = await resp.json();
      console.log(userObj);
      setUser(userObj);
    };

    getUser();
  }, []);

  return (
    <div>
      <Components.TopBar subject="Gerenciar Usuários" user="Admin" />
      <Components.RegistrationByManager />
    </div>
  );
};

export default AdminManage;
