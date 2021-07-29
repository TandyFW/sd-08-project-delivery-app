import styled from 'styled-components';
import React from 'react';

const StyledListContainer = styled.div`
  background-color: rgba(251, 255, 254, 1);
  border: 1px solid rgba(177, 194, 190, 1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  > *:not( :last-child ) {
    margin-bottom: 10px;
  }
`;

const ListContainer = ({ header, children }) => (
  <StyledListContainer>
    { header }
    <Body>
      { children }
    </Body>
  </StyledListContainer>
);

ListContainer.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ListContainer;
