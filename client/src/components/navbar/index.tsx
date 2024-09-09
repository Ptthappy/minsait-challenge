import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import styled from 'styled-components';
import { Navbar, ToggleButton } from './navbar-styles';

interface NavbarProps {
    openCart: any;
  }
  
  interface ItemType {
    id: string;
    image_url: string;
    stock: number;
    productName: string;
    price: number;
    productDescription: string;
    favorite: number;
  }

const NavbarComponent: React.FC<NavbarProps> = ({ openCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggle = () => {
    openCart();
  };

  return (
    <>
      <Navbar>
        <ToggleButton onClick={handleToggle}>
        <FaShoppingCart style={{ color: 'black' }} />
        </ToggleButton>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
