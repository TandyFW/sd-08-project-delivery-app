import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, UpContent, BotContent } from './styled';

const Modal = ({ data, setVisible }) => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <Container>
      <button type="button" onClick={ () => setVisible(false) }>FECHAR</button>
      <Content>
        <UpContent>
          <img src={ data.urlImage } alt={ data.name } />
          <p>{data.price}</p>
          <p>BEBIDA GOSTOSA</p>
        </UpContent>
        <BotContent>
          <h1>{data.name}</h1>
        </BotContent>
      </Content>
    </Container>
  );
};
export default Modal;
Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
