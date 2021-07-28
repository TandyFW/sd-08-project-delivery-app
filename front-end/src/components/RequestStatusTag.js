import styled, { css } from 'styled-components';

const RequestStatusTag = styled.div`
  align-items: center;
  border-radius: 5px;
  display: inline-flex;
  font-weight: 700;
  justify-content: center;
  padding: 20px;
  text-transform: uppercase;
  width: 150px;

  ${ (props) => {
    switch (props.status) {
      case 'delivered':
        return css`
          background-color: rgba(0, 204, 155, 0.75);
        `;
      case 'preparing':
        return css`
          background-color: rgba(102, 204, 0, 0.75);
        `;
      case 'pending':
        return css`
          background-color: rgba(204, 184, 0, 0.75);
        `;
      default:
        return css`
          background-color: rgba(0, 0, 0, 0.2);
        `;
    }
  }}
`

export default RequestStatusTag;
