const isAuthenticated = () => {
  const SID = localStorage.getItem('user');
  if (SID) return true;
  return false;
};

export default isAuthenticated;
