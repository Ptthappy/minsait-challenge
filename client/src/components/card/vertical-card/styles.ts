import styled from "styled-components";

export const VerticalCardContainer = styled.div`
max-width: 12em;
margin: .25em;
background-color: #fff;
border-radius: .5em;
box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);

display: flex;
flex-direction: column;
flex-grow: 1;

box-sizing: border-box;
flex: 1 1 12em;
max-width: 18em;
overflow: hidden
`;

export const Image = styled.img`
width: 100%;
max-height: 10em;
align-self: center;
object-fit: cover;
`;

export const Data = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
margin: 0 .65em;
margin-bottom: .65em;
`;

export const Title = styled.span`
display: block;
margin-top: 1em;
font-size: .90em;
font-weight: 400;

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
line-height: 1.50em;
min-height: 1.50em;
max-height: 1.50em;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
`;

export const Description = styled.p`
font-size: .80em;
font-weight: 300;

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
font-size: .80em;
line-height: 1.10em;
min-height: 4.40em;
max-height: 4.40em;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
`;

export const Price = styled.span`
font-size: 1.20em;
font-weight: 600;
`;

export const UnitsLeft = styled.span`
font-size: 0.65em;
`;

export const AddButton = styled.button`
    outline: none;
    border: 1px solid black;
    color: black;
    border-radius: 2em;
    padding: 0.25em 0.75em;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5em;
    position: relative;

    &:hover {
        box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
        background-color: rgba(0,0,0,0.1);
    }
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: end;
margin: .5em 0;
`;

export const ProductQuantity = styled.span`
position: absolute;
top: 2px;
right: -6px;
display: flex;
align-items: center;
justify-content: center;
background: white;
border: 0.5px solid black;
border-radius: 10em;
font-size: 14px;
width: 20px;
height: 20px;
transform: translate(0, -50%);
`;