import { VerticalCard } from './vertical-card';
import { HorizontalCard } from './horizontal-card';
import { MiniCard } from './mini-card';

interface CardProps {
    changeQuantity: Function;
    id: string;
    image_url: string;
    stock: number;
    productName: string;
    price: number;
    productDescription: string;
    favorite: boolean;
    quantity: number;
    variation?: string;
}

export interface CardVariantProps extends CardProps {
    handleAdd: () => void;
    handleDecrease: () => void;
}

export const Card: React.FC<CardProps> = ({ changeQuantity, id, image_url, stock, productName, price, productDescription, favorite, quantity, variation }) => {

    const handleAdd = () => {
        changeQuantity(id, quantity, quantity + 1);
    }

    const handleDecrease = () => {
        changeQuantity(id, quantity, quantity - 1);
    }

    const parsedProps = {
        changeQuantity, id, image_url, stock, productName, price, productDescription, favorite, quantity, handleAdd, handleDecrease
    }

    const getVariation = () => {
        switch(variation) {
            case 'horizontal': return <HorizontalCard {...parsedProps} />;
            case 'mini': return <MiniCard {...parsedProps} />
            case 'vertical': default: return <VerticalCard {...parsedProps} />;
        }
    }

    return(getVariation());
}