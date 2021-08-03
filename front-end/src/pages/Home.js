// import PropTypes from 'prop-types';
// import React from 'react';

// function Homepage({ socket }) {
//   // activates joinRoom function defined on the backend

//   return (
//     <div className="homepage">
//       <h1>Welcome to ChatApp</h1>

//       <button
//         type="button"
//         onClick={ () => socket.emit('ping') }
//       >
//         Join

//       </button>

//     </div>
//   );
// }

// Homepage.propTypes = {
//   socket: PropTypes.shape({
//     emit: PropTypes.func,
//   }).isRequired,

// };

// export default Homepage;
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components';

const SECOND_HALF = 1500;

const Home = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('./login');
    }, SECOND_HALF);
  });

  return (
    <div className="home">
      <Loader />
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
