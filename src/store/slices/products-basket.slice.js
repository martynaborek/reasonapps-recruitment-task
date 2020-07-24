import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    selectedProducts: [],
    totalPrice: '00,00',
}

function calculateTotalPrice(productsList) {
    const totalPrice = productsList.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    return totalPrice.toFixed(2);
}

const productsBasketSlice = createSlice({
    name: 'products-basket',
    initialState,
    reducers: {
        dispatchAddProduct(state, action) {
            const { item } = action.payload;
            const itemInBasketIndex = state.selectedProducts.findIndex((el) => el.id === item.id);
            if (itemInBasketIndex >= 0) {
                const oldItemInBasket = state.selectedProducts[itemInBasketIndex];
                state.selectedProducts.splice(itemInBasketIndex, 1, {
                    ...oldItemInBasket,
                    quantity: oldItemInBasket.quantity + 1
                });
            } else {
                state.selectedProducts = [...state.selectedProducts, {
                    ...item,
                    quantity: 1
                }];
            }
            state.totalPrice = calculateTotalPrice(state.selectedProducts);
        },
        dispatchRemoveProduct(state, action) {
            const { item } = action.payload;

            const itemInBasketIndex = state.selectedProducts.findIndex((el) => el.id === item.id);
            const itemInBasket = state.selectedProducts[itemInBasketIndex];

            if (itemInBasket.quantity - 1 === 0) {
                state.selectedProducts.splice(itemInBasketIndex, 1);
            } else {
                state.selectedProducts.splice(itemInBasketIndex, 1, {
                    ...itemInBasket,
                    quantity: itemInBasket.quantity - 1
                });
            }

            state.totalPrice = calculateTotalPrice(state.selectedProducts);
        }
    },

});

export const { dispatchAddProduct, dispatchRemoveProduct } = productsBasketSlice.actions;

export default productsBasketSlice.reducer;
