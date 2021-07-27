// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getAllUsers } from '../services';
// import { productsAction } from '../redux/actions';

// class UserTable extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

// async componentDidMount() {
//   const { dispatchTable } = this.props;
//   const users = await getAllUsers();
//   dispatchTable(users);
// }

// render() {
// const { history } = this.props;
// console.log(history);
//   const { stateUsers } = this.props;
//   const keyOfstatateUsers = Object.keys(stateUsers);
//   keyOfstatateUsers.push('Excluir');
//   console.log(keyOfstatateUsers);
//   console.log(stateUsers);
//   return (
//     <div className="cardlist-container">
//       <table>
//         <thead>
//           <th>
//             { keyOfstatateUsers
//           && keyOfstatateUsers.map((title) => (
//             <th key={ title }>title</th>
//           ))}
//           </th>
//         </thead>
//         <tbody>

//           { stateUsers && stateUsers.map((user, index) => (
//             <tr id={ `${index}` } className="user" key={ user.id }>
//               { keyOfstatateUsers.map((key) => (
//                 <th key={ key }>stateUsers[key]</th>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// }

// const mapDispatchToProps = (dispatch) => ({
//   dispatchTable: (array) => dispatch(productsAction(array)),
// });

// const mapStateToProps = (state) => ({
//   stateUsers: state.products.products,
// });

// UserTable.propTypes = {
//   // history: PropTypes.shape().isRequired,
//   dispatchTable: PropTypes.func.isRequired,
//   stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
// export default (UserTable);
