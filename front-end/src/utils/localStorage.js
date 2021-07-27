export default () => ({
  user: {
    get: () => {
      const userString = localStorage.getItem('deliveryAppUser');
      return JSON.parse(userString);
    },
    set: (user) => {
      const userString = JSON.stringify(user);
      localStorage.setItem('deliveryAppUser', userString);
    },
  },
});
