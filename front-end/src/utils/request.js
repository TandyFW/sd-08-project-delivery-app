const request = async (route, method, body) => {
  const resp = await fetch(`http://localhost:3001/${route}`, {
    headers: { 'Content-Type': 'application/json' },
    method,
    body: JSON.stringify(body),
  });
  const userObj = await resp.json();
  return userObj;
};

const requestSeller = async (route, method) => {
  const resp = await fetch(`http://localhost:3001/${route}`, {
    headers: { 'Content-Type': 'application/json' },
    method,
  });
  const salesList = await resp.json();
  console.log(salesList, 'de utils');
  return salesList;
};

module.exports = {
  request,
  requestSeller,
};
