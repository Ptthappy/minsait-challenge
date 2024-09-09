import styled from "styled-components";

export const Navbar = styled.nav`
  background: #E0E0E0;
  color: #fff;
  padding: 1em;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 99;
  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 1199px) {
    display: flex;
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const CartIcon = styled.div`
  font-size: 1.5em;
  margin-left: 10px;
`;
