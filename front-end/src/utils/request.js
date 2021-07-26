const request = async (route, method, body) => {
  const resp = await fetch(`http://localhost:3001/${route}`, {
    headers: { 'Content-Type': 'application/json' },
    method,
    body: JSON.stringify(body),
  });
  const userObj = await resp.json();
  return userObj;
};

module.exports = {
  request,
};
