import React from 'react';

// context
import { ContentProductContext } from './providers/products.provider';

// custom hooks
import useProducts from './custom-hooks/useProducts';

// components
import ProductsItem from './ProductsItem';

// antd
import { Pagination } from "antd";

// styles
import { StyledProductsList } from './styles';
import ProductsSearch from "./ProductsSearch";

const ProductsList = () => {
    const { state } = React.useContext(ContentProductContext);
    const { changePage } = useProducts();

    const productsListToDisplay = state.productsListToDisplay;
    const products = productsListToDisplay && productsListToDisplay.map(item =>
        <ProductsItem
            key={item.id}
            item={item}
        />);


    return (
        <StyledProductsList>
            <ProductsSearch />
            <div className="products-informations">
                <p className="name">Product name:</p>
                <Pagination simple
                            pageSize={state.itemsPerPage}
                            current={state.page}
                            total={state.totalElements}
                            onChange={(page) => changePage(page)}/>
            </div>
            {productsListToDisplay && productsListToDisplay <= 0 ?
                <p className="statement">The product you are looking for was not found
                </p> : (<ul className="products-list">
                    {products} </ul>)}
        </StyledProductsList>
    )
};

export default ProductsList;
