import React from 'react';

// components
import ButtonPrimary from '../common/Buttons/ButtonPrimary';

// styles
import { StyledItemInBasket } from './styles';

const ItemInBasket = ({ name, price, quantity, onRemoveItem }) => {
    return (
        <StyledItemInBasket>
            <div className="info">
                <span className="quantity">{quantity} x</span>
                <span className="name">{name}</span>
            </div>
            <div className="info">
                <span className="price">{price}$</span>
                <ButtonPrimary text="-" onClick={onRemoveItem}/>
            </div>
        </StyledItemInBasket>
    );
};

export default ItemInBasket;
