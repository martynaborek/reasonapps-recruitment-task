import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsData: {
        values: [],
        loading: false,
        error: null,
    }
}
// todo: napisać testy
const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        dispatchSetData(state) {
            state.productsData.loading = true;
        },
        dispatchSetDataSuccess(state, action) {
            const { data } = action.payload;
            state.productsData.values = data;
            state.productsData.loading = false;
        },
        dispatchSetDataError(state, action) {
            const { error } = action.payload;
            state.productsData.error = error;
        }
    },
});

export const { dispatchSetData, dispatchSetDataSuccess, dispatchSetDataError } = configSlice.actions;

export default configSlice.reducer;
