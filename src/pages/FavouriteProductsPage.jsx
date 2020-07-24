import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// dispatches
import { dispatchAddProduct } from '../store/slices/products-basket.slice';
import { dispatchFavourite } from '../store/slices/favorite-products.slice';
// components
import Products from '../components/Products/Products';

const FavouriteProductsPage = () => {
    const dispatch = useDispatch();
    const favouriteList = useSelector((state) => state.favoriteProducts.list);

    return (
        <div className="col-8 p-0">
            {favouriteList && favouriteList.length > 0 ?
                (<Products
                    productList={favouriteList}
                    favouritesList={favouriteList}
                    itemsPerPage={20}
                    onFavouriteChange={(item) => dispatch(dispatchFavourite({ item }))}
                    onAddChange={(item) => dispatch(dispatchAddProduct({ item }))}
                />) : <p className="statement">You don't have any favorite products yet</p>
            }
        </div>
    );
};

export default FavouriteProductsPage;
