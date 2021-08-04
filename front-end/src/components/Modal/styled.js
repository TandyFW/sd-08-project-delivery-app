import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  top:0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`;
export const Content = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
  width: 900px;
  border-radius: 30px;
  background: url('https://media.istockphoto.com/photos/beer-background-ice-cold-pint-with-water-drops-condensation-picture-id466424908?k=6&m=466424908&s=170667a&w=0&h=X6U1drcTpJj25KMsdQ4iC_K-rWtJJUObSygtp3mteFY=');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 450px;
  height: 900px;
  background-color: white;
 

`;
export const UpContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;
height:400px;
border-top-left-radius: 30px;
border-top-right-radius:30px;

& img{
   width: 200px;
   height: auto;
  }

`;
export const BotContent = styled.div`
width: 100%;
display: flex;

justify-content: center;
align-items: center;
font-size: 50px;
text-transform: uppercase;
flex:1;
  
`;
