import React from 'react';
import { Switch, Route } from "react-router-dom";

// component containers
import Products from './containers/Products';
import Product from './containers/Product';
import Categories from './containers/Categories';
import Category from './containers/Category';
import AdminProducts from './containers/AdminProducts';
import AdminProduct from './containers/AdminProduct';
import AdminCategories from './containers/AdminCategories';
import AdminCategory from './containers/AdminCategory';

export default () => <main>
  <Switch>
    <Route exact path="/" component={Categories} />
    <Route exact path="/products" component={Products} />
    <Route path="/products/:id" component={Product} />
    <Route exact path="/categories" component={Categories} />
    <Route path="/categories/:id" component={Category} />
    <Route exact path="/admin/products" component={AdminProducts} />
    <Route path="/admin/products/:id" component={AdminProduct} />
    <Route exact path="/admin/categories" component={AdminCategories} />
    <Route path="/admin/categories/:id" component={AdminCategory} />
  </Switch>
</main>;