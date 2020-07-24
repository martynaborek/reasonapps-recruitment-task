import React from 'react';

// custom hooks
import useProducts from './custom-hooks/useProducts';

// antd
import { Input } from "antd";
const { Search } = Input;

const ProductsSearch = () => {
    const { setSearch } = useProducts();

    // todo: maybe debounce for search input
    return (
        <Search
            placeholder="Searching..."
            onChange={event => setSearch(event.target.value)}
            size="large"
        />
    );
};

export default ProductsSearch;
