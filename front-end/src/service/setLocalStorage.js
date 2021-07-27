const setUserInfo = (args) => {
  localStorage.setItem('user', JSON.stringify(args));
};

export default setUserInfo;
