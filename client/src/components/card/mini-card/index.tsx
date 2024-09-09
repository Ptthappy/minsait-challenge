import React from 'react'
import { 
    Data,
    MiniCardContainer,
    SmallImage,
    SmallPrice,
    SmallTotal,
    Square,
    SquareButton,
    SquareContainer,
} from './styles';
import { useFormatCurrency } from '../../../hooks/useFormatCurrency';
import { useTranslation } from 'react-i18next';
import { CardVariantProps } from '..';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const MiniCard: React.FC<CardVariantProps> = ({ changeQuantity, id, image_url, stock, productName, price, productDescription, favorite, quantity, handleAdd, handleDecrease }) => {
    const formatCurrency = useFormatCurrency();
    const { t } = useTranslation();
  return (
    <MiniCardContainer>
        <SmallImage src={image_url} alt={productName} />
        <Data>
            <SquareContainer>
                <SquareButton onClick={handleDecrease}><FaMinus /></SquareButton>
                <SquareButton onClick={handleAdd}><FaPlus /></SquareButton>
            </SquareContainer>
        </Data>
        <SmallPrice>{quantity} x {formatCurrency(price)}</SmallPrice>
        <SmallTotal>{formatCurrency(price*quantity)}</SmallTotal>
    </MiniCardContainer>
  )
}
