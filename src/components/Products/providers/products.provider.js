import React from 'react';

const ContentProductContext = React.createContext({});
const ProductsProvider = ContentProductContext.Provider;

export {
    ContentProductContext,
    ProductsProvider
};
