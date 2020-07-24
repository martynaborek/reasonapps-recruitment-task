import {
    CHANGE_PAGE,
    SET_FAVOURITE_LIST_ACTION,
    SET_PRODUCT_LIST_ACTION,
    SET_SEARCH
} from '../types/products-action-types';

const initialState = {
    productList: [],
    favouritesList: [],
    productsListToDisplay: [],
    filteredElements: null,
    page: 1,
    itemsPerPage: 20,
    totalElements: 0
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCT_LIST_ACTION: {
            const { productList } = payload;
            const productsListToDisplay = productList.slice(0, state.itemsPerPage);
            return {
                ...state,
                productList,
                productsListToDisplay,
                filteredElements: null,
                page: 1,
                totalElements: productList.length
            }
        }

        case SET_FAVOURITE_LIST_ACTION: {
            const { favouritesList } = payload;
            return {
                ...state,
                favouritesList
            }
        }

        case CHANGE_PAGE: {
            const { page } = payload;
            const offset = (page - 1) * state.itemsPerPage;
            const lastElement = offset + state.itemsPerPage;
            const listToSlice = state.filteredElements && state.filteredElements.length > 0 ?
                state.filteredElements :
                state.productList;
            const productsListToDisplay = listToSlice.slice(offset, lastElement);
            return {
                ...state,
                page,
                productsListToDisplay
            }
        }

        case SET_SEARCH: {
            const { search } = payload;
            const searchPhrase = search.toLowerCase();
            const filteredElements = state.productList
                .filter(({ name, desc }) => (name?.toLowerCase().includes(searchPhrase)) || (desc?.toLowerCase().includes(searchPhrase)));
            const productsListToDisplay = filteredElements.slice(0, state.itemsPerPage)
            return {
                ...state,
                page: 1,
                totalElements: filteredElements.length,
                productsListToDisplay,
                filteredElements
            }
        }

        default:
            return state;
    }
};

export default reducer;
