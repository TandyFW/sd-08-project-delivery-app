const isAuthenticated = () => {
  const SID = localStorage.getItem('users');
  if (SID) return true;
  return false;
};

export default isAuthenticated;
