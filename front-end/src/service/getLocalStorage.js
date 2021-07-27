const getUserInfo = () => {
  const data = localStorage.getItem('user');
  return JSON.parse(data);
};

export default getUserInfo;
