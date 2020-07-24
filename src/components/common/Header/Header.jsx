import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// styles
import { StyledHeader } from './styles';

const Header = () => {

    const productsList = useSelector((state) => state.appConfig.productsData.values);
    const favouritesList = useSelector((state) => state.favoriteProducts.list);

    return (
        <div className="row">
            <div className="col p-0">
                <StyledHeader>
                    <h1 className="title">Products</h1>
                    <div className="categories">
                        <div className="categories-wrapper">
                            <NavLink
                                exact
                                className="button"
                                to={'/'}
                                activeClassName="active-route"
                            >
                                <p className="text">All products</p>
                                <div className="quantity">
                                    <span>{productsList.length}</span>
                                </div>
                            </NavLink>
                            <NavLink
                                className="button"
                                to={'/favourites'}
                                activeClassName="active-route"
                            >
                                <p className="text">Favorite</p>
                                <div className="quantity">
                                    <span>{favouritesList.length}</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </StyledHeader>
            </div>
        </div>
    );
};

export default Header;
