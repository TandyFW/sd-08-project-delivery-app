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
  cart: {
    get: () => {
      const cartString = localStorage.getItem('cart');
      return JSON.parse(cartString);
    },
    set: (item) => {
      const cartString = localStorage.getItem('cart');
      const cartJson = (!cartString) ? {} : JSON.parse(cartString);
      console.log(cartJson);
      cartJson[item.name] = { quantity: item.quantity, price: item.price };
      const newCartString = JSON.stringify(cartJson);
      localStorage.setItem('cart', newCartString);
    },
    remove: () => {
      localStorage.removeItem('cart');
    },
  },
});
