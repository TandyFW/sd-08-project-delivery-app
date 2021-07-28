import React from 'react';
import rockGlass from '../images/rockGlass.svg';

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <span className="logo">Loading..</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
    );
  }
}

export default Loader;
