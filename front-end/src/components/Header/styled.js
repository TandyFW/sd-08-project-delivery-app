import styled from 'styled-components';

const NavBar = styled.header`align-items: center;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 9px;

  div {
    display: flex;
  }

  a {
    color: white;
    font-weight: 550;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover {
    background: rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }

  button {
    border: none;
  }
`;

export default NavBar;
