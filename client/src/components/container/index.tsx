import { PropsWithChildren } from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
height: 100vh;
background: #F7F7F7;
display: flex;
flex-direction: column;
align-items: stretch;
`;

export const Container = ({children}: PropsWithChildren) => {
    return <ContainerStyles>{children}</ContainerStyles>
}