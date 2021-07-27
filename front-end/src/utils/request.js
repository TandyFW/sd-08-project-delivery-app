const request = async (route, options) => {
  if (!options.headers) options.headers = { 'Content-Type': 'application/json' };
  else options.headers['Content-Type'] = 'application/json';

  if (options.body) options.body = JSON.stringify(options.body);

  if (!options.method) options.method = 'GET';

  const resp = await fetch(`http://localhost:3001/${route}`, options);
  const userObj = await resp.json();
  return userObj;
};

export default request;
