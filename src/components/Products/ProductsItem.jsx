import React from 'react';
import { Link } from 'react-router-dom';

// context
import { ContentProductContext } from './providers/products.provider';

// styles
import { StyledProductItem, StyledButtonFavorite } from './styles';

const ProductsItem = ({ item }) => {
    const { id, name, desc, price } = item;
    const { state, onFavouriteChange, onAddChange } = React.useContext(ContentProductContext);
    const formatPrice = price.toString().replace(".", ",");
    const isActive = state.favouritesList.findIndex((el) => el.id === id) > -1;

    return (
        <StyledProductItem>
                <Link to="#" className="item">
                    <div className="product-details">
                        <StyledButtonFavorite isActive={isActive} onClick={() => onFavouriteChange(item)}/>
                        <div className="product-info">
                            <h2 className="name">{name}</h2>
                            <p className="description">{desc}</p>
                        </div>
                    </div>
                    <div className="product-shop-details">
                        <p className="price">{formatPrice} $</p>
                        <button className="btn-add" onClick={() => onAddChange(item)}>
                            <span>+</span>
                        </button>
                    </div>
                </Link>
        </StyledProductItem>
    );
};

export default ProductsItem;
