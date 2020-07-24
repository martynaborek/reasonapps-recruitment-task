import { configureStore } from '@reduxjs/toolkit';

import configSlice from './slices/config.slice';
import productsBasketSlice from './slices/products-basket.slice';
import favoriteProductsSlice from './slices/favorite-products.slice';

const store = configureStore({
    reducer: {
        appConfig: configSlice,
        productsBasket: productsBasketSlice,
        favoriteProducts: favoriteProductsSlice,
    },
});

export default store;
