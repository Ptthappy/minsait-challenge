import styled from "styled-components";

export const MainLayoutContainer = styled.div`
height: 100vh;
background: #F7F7F7;
display: flex;
flex-direction: column;
align-items: stretch;
`;

export const MainWrapper = styled.div`
  padding: 1em;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const CartWrapper = styled.div`
display: fle;
padding: 1em;
flex-direction: column;
flex-grow: 1;
`;

export const ItemsContainer = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: .5em;
justify-content: center;
`;

export const SectionTitle = styled.h2`
font-weight: 400;
`;

export const Checkout = styled.button`
font-size: .90em;
font-weight: 500;
margin: .5em 0;
padding: .60em 2em;
border: 1px solid black;
border-radius: 50px;
cursor: pointer;
float: right;

&:hover {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.1);
}
`;

export const Subtotal = styled.span`
text-align: center;
margin-top: .25em;
margin-bottom: .75em;
`;

export const MainContainer = styled.div`
display: flex;
flex-direction: row;
overflow: hidden;
height: 100%;

`;

export const CartContainerDesktop = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-left: .75em;
  width: 9em;
  min-width: 9em;
  max-width: 9em;
  background-color: white;
  padding: .5em;
`;

export const CartContainerMobile = styled.div`  
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 20em;
`;

export const Modal = styled.div<{isCartOpen: boolean}>`
position: absolute;
z-index: 999;
inset: 0;
background: white;
height: 100vh;
width: 100vw;
left: ${({isCartOpen}) => isCartOpen ? 0 : '100%'};
opacity: ${({isCartOpen}) => isCartOpen ? 1 : 0};
transition: all 250ms ease-in;
display: flex;
align-items: center;
justify-content: center;
`;

export const StoreContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
flex-grow: 1;
overflow: auto;
gap: 0.75em;
`;
