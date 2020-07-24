import React, { useEffect } from 'react';
// reducer
import reducer from './reducers/products.reducer';

// provider
import { ProductsProvider } from './providers/products.provider';

// components
import ProductsList from './ProductsList';

// actions
import { setFavouriteListAction, setProductListAction } from './actions/products.action';

const Products = ({ productList, favouritesList, itemsPerPage = 10, onFavouriteChange, onAddChange }) => {
    // todo: consider to move to external object pagination: {page, itemsPerPage, totalElements}
    const initialState = {
        productList: [],
        favouritesList: [],
        productsListToDisplay: [],
        filteredElements: null,
        page: 1,
        itemsPerPage,
        totalElements: productList.length
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    useEffect(() => {
        dispatch(setProductListAction(productList));
    }, [productList]);

    useEffect(() => {
        dispatch(setFavouriteListAction(favouritesList));
    }, [favouritesList]);

    return (
        <ProductsProvider value={{ state, dispatch, onFavouriteChange, onAddChange }}>
            <ProductsList/>
        </ProductsProvider>
    );
};

export default Products;
