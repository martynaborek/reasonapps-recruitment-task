import {
    CHANGE_PAGE,
    SET_FAVOURITE_LIST_ACTION,
    SET_PRODUCT_LIST_ACTION,
    SET_SEARCH
} from '../types/products-action-types';

const setProductListAction = (productList) => ({
    type: SET_PRODUCT_LIST_ACTION,
    payload: { productList }
});

const setFavouriteListAction = (favouritesList) => ({
    type: SET_FAVOURITE_LIST_ACTION,
    payload: { favouritesList }
});

const changePageAction = (page) => ({
    type: CHANGE_PAGE,
    payload: { page }
});

const setSearchAction = (search) => ({
    type: SET_SEARCH,
    payload: { search }
});

export { changePageAction, setSearchAction, setProductListAction, setFavouriteListAction };
