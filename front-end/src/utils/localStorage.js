export default () => ({
  user: {
    get: () => {
      const userString = localStorage.getItem('user');
      return JSON.parse(userString);
    },
    set: (user) => {
      const userString = JSON.stringify(user);
      localStorage.setItem('user', userString);
    },
    remove: () => {
      localStorage.removeItem('user');
    },
  },
});
