import React from 'react'
import { 
    AddButton,
    ButtonContainer,
    Data,
    Description,
    Image,
    Price,
    Title,
    UnitsLeft,
    VerticalCardContainer
} from './styles';
import { ProductQuantity } from './styles'
import { useTranslation } from 'react-i18next';
import { useFormatCurrency } from '../../../hooks/useFormatCurrency';
import { CardVariantProps } from '..';
import { FiShoppingCart } from 'react-icons/fi';

export const VerticalCard: React.FC<CardVariantProps> = ({ changeQuantity, id, image_url, stock, productName, price, productDescription, favorite, quantity, handleAdd, handleDecrease }) => {
    const formatCurrency = useFormatCurrency();
    const { t } = useTranslation();
  return (
    <VerticalCardContainer>
        <Image src={image_url} alt={productName} />
        <Data>
            <Title>{productName}</Title>
            <Description>{productDescription}</Description>
            <Price>{formatCurrency(price)}</Price>
            <ButtonContainer>
                <UnitsLeft>{t('left')}{stock}</UnitsLeft>
                <AddButton onClick={handleAdd}>
                    {quantity > 0 && <ProductQuantity>{quantity}</ProductQuantity>}
                    <FiShoppingCart />
                </AddButton>
            </ButtonContainer>
        </Data>
    </VerticalCardContainer>
  )
}
