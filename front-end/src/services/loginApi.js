const loginApi = async (email, password, name) => {
  if (name) {
    const createBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    };
    await fetch('http://localhost:3001/customer', createBody);
  }
  const loginBody = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  try {
    await fetch('http://localhost:3001/login', loginBody)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

export default loginApi;
