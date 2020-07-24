import React from 'react';
// context
import { ContentProductContext } from '../providers/products.provider';
// actions
import { changePageAction, setSearchAction } from '../actions/products.action';
// todo: napisać testy do tego -> mokapowanie
const useProducts = () => {
    const { dispatch } = React.useContext(ContentProductContext);

    const changePage = (page) => {
        dispatch(changePageAction(page));
    };

    const setSearch = (search) => {
        dispatch(setSearchAction(search));
    };

    return {
        changePage, setSearch
    };
};

export default useProducts;
