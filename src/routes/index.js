import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';

import Loader from '../components/common/Loader';
import Header from "../components/common/Header";
import Basket from "../components/ProductsBasket";

const AllProductsPage = lazy(() => import('../pages/AllProductsPage'));
const FavouriteProductsPage = lazy(() => import('../pages/FavouriteProductsPage'));

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Router history={history}>
                <Header />
                <div className="row">
                    <Switch>
                        <Route exact path="/" component={AllProductsPage}/>
                        <Route exact path="/favourites" component={FavouriteProductsPage}/>
                    </Switch>
                    <Basket />
                </div>
            </Router>
        </Suspense>
    );
}

export default Routes;
