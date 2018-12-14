import React from 'react';
import { Link } from "react-router-dom";

export default ({ category, products = [] }) => {
  let productsList;
  if (products && products.length > 0) {
    productsList = <ul>
      {products.map(product => <li key={`product-${product.id}`}><Link to={`/products/${product.id}`}>{product.name}</Link></li>)}
    </ul>;
  }

  return <div>
    <h1>{category.name}</h1>
    {productsList}
  </div>;
};

