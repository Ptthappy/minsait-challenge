import styled from "styled-components";

export const SmallImage = styled.img`
width: 6em;
border-radius: 2px;
align-self: end;
margin: .5em 0em;
`;

export const Data = styled.div`
display: flex;
flex-direction: column;
margin-bottom: .5em;
`;

export const HorizontalCardContainer = styled.div`
margin: 0;
padding: 0 1em;
background-color: #fff;
border-radius: 0;

display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
border-top: .5px solid #999;

&:last-child {
    border-bottom: .5px solid #999;
}
`;
export const SquareButton = styled.button`
color: #0a0a0a;
font-size: .6em;
padding: .5em;
border: none;
cursor: pointer;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.1);
}
`;
export const Square = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: white;
`;

export const SquareContainer = styled.div`
display: flex;
justify-content: space-evenly;
gap: .5em;
`;

export const SmallPrice = styled.span`
font-size: .90em;
font-weight: 400;
text-align: right;
margin-bottom: .5em;
`;

export const SmallTotal = styled.span`
font-size: .90em;
font-weight: 600;
text-align: right;
margin-bottom: .5em;
`;