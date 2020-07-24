import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    list: []
}

const favoriteProductsSlice = createSlice({
    name: 'favorite-products',
    initialState,
    reducers: {
        dispatchFavourite(state, action) {
            const { item } = action.payload;

            const itemInFavouriteIndex = state.list.findIndex((el) => el.id === item.id);
            if (itemInFavouriteIndex > -1) {
                state.list.splice(itemInFavouriteIndex, 1);
            } else {
                state.list = [...state.list, item];
            }
        },
    },

});

export const { dispatchFavourite } = favoriteProductsSlice.actions;

export default favoriteProductsSlice.reducer;
