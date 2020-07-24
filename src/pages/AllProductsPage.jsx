import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// dispatches
import { dispatchAddProduct } from '../store/slices/products-basket.slice';
import { dispatchFavourite } from '../store/slices/favorite-products.slice';

// components
import Products from '../components/Products/Products';
// custom hooks
import useFetchListOfProducts from '../custom-hooks/useFetchLisfOfProducts';


const AllProductsPage = () => {
    const { getAllProducts } = useFetchListOfProducts();
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.appConfig.productsData.values);
    const favouriteList = useSelector((state) => state.favoriteProducts.list);

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
            <div className="col-8 p-0 lines">
                {productsList && productsList.length > 0 &&
                <Products
                    productList={productsList}
                    favouritesList={favouriteList}
                    itemsPerPage={20}
                    onFavouriteChange={(item, isActive) => dispatch(dispatchFavourite({ item }))}
                    onAddChange={(item) => dispatch(dispatchAddProduct({ item }))}
                />}
            </div>
    );
};

export default AllProductsPage;
