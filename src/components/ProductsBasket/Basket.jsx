import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// dispatches
import { dispatchRemoveProduct } from '../../store/slices/products-basket.slice';

// components
import ButtonPrimary from '../common/Buttons/ButtonPrimary';
import ItemInBasket from './ItemInBasket';

//styles
import { StyledBasket } from './styles';
import { ThemeProvider } from 'styled-components';

const theme = {
    width: '90%',
    height: '5rem',
    margin: '0 auto',
};

const Basket = () => {
    const selectedProducts = useSelector((state) => state.productsBasket.selectedProducts);
    const totalPrice = useSelector((state) => state.productsBasket.totalPrice);
    const dispatch = useDispatch();
    const [isEmptyBasket, setActive] = useState(true);

    useEffect(() => {
        setActive(!selectedProducts.length > 0);
    }, [selectedProducts]);

    return (
        <div className="col-4">
            <StyledBasket>
                <h2 className="header">Your order</h2>
                <div className="picked-products">
                    {isEmptyBasket ? <p className="info">Your basket is empty !</p> :
                        selectedProducts.map(item =>
                            <ItemInBasket
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                onRemoveItem={() => dispatch(dispatchRemoveProduct({ item }))}
                            />)
                    }
                </div>
                <div className="summary">
                    <p className="sum">Sum:</p>
                    <p className="price">{totalPrice} $</p>
                </div>
                <ThemeProvider theme={theme}>
                    <ButtonPrimary text="Order products" isInactive={isEmptyBasket} />
                </ThemeProvider>
            </StyledBasket>
        </div>
    );
};

export default Basket;
