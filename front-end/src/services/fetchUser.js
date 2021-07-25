const fetchUser = async (email) => {
  try {
    const userEmail = await fetch(`${URL}/${email}`);
    if (userEmail) return true;
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default fetchUser;
