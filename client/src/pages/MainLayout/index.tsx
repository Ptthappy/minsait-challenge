import NavbarComponent from "../../components/navbar"
import {
  CartContainerDesktop,
  CartContainerMobile,
  Checkout, 
  MainContainer, 
  MainLayoutContainer, 
  MainWrapper, 
  Modal, 
  SectionTitle, 
  StoreContainer,
  Subtotal
} from "./styles"
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { useFormatCurrency } from '../../hooks/useFormatCurrency';
import { Card } from '../../components/card';
import axios from 'axios';


export const MainLayout: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const [cart, setCart] = useState<ItemType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const formatCurrency = useFormatCurrency();
  const { t } = useTranslation();
  const { isDesktop } = useWindowWidth();

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  }

  useEffect(() => {
    axios.get('http://localhost:3000/grocery')
      .then(res => {
        setItems(res.data.map((item: any) => ({
          ...item,
          quantity: 0
        })))
      }).catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach(item => {
      newTotal += (item.price * item.quantity);
    })
    setTotal(newTotal);
  }, [cart])

  const changeQuantity = (id: any, oldQ: any, newQ: any) => {
    console.log('Debugging Zone:')
    console.log(cart);
    console.log(id, oldQ, newQ);
    console.log(isDesktop);
    const index = items.findIndex(i => id === i.id);
    if (newQ > items[index].stock) return;
    items[index].quantity = newQ;

    if (oldQ === 0) {
      setCart(prev => [...prev, items[index]]);
    }
    
    else {
      if(newQ === 0) {
        setCart(prev => prev.filter(item => item.id !== id));
      }
  
      else {
        let newCart = [...cart]
        // [cart.findIndex(item => item.id === id)].quantity = newQ;
        console.log(newCart)
        setCart(newCart)
      }
    }
  }
    return(
      <MainLayoutContainer>
        <NavbarComponent openCart={toggleCart}  />
        <MainWrapper>
          <SectionTitle>{t('welcome')}</SectionTitle>
          <MainContainer>
            {/* Store */}
            <StoreContainer>
              {items && items.length > 0 && items.map((i: any) => <Card key={i.id} changeQuantity={changeQuantity} {...i} />)}
            </StoreContainer>
            {/* WideScreen Cart */}
            {isDesktop ?
              <CartContainerDesktop>
                <Checkout>Checkout ({cart.length})</Checkout>
                <Subtotal>Subtotal: <b>{formatCurrency(total)}</b></Subtotal>
                {cart.length > 0 && cart.map((i: any) => <Card key={i.id} variation="mini" changeQuantity={changeQuantity} {...i} />)}
              </CartContainerDesktop>
              : <Modal isCartOpen={cartOpen}>
                <CartContainerMobile>
                  <Checkout>Checkout ({cart.length})</Checkout>
                  <Subtotal>Subtotal: <b>{formatCurrency(total)}</b></Subtotal>
                  {cart.length > 0 && cart.map((i: any) => <Card key={i.id} variation="horizontal" changeQuantity={changeQuantity} {...i} />)}
                </CartContainerMobile>
              </Modal>
            }
          </MainContainer>
        </MainWrapper>
      </MainLayoutContainer>
    )
}

interface ItemType {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorite: number;
  quantity: number;
}