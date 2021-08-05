import STATUS_CODES from '../common/httpStatusCodes';

export const getUrl = (url) => (
  fetch(url)
    .then((response) => {
      if (response.status !== STATUS_CODES.OK) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
    .then((data) => data)
);

export const postUrl = (url, { body, token }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  if (token) options.headers.Authorization = token;

  return fetch(url, options);
};
