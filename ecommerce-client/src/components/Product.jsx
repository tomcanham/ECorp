import React from 'react';
import { Link } from "react-router-dom";

export default ({ product }) => <div>
  <h1>{product.name}</h1>
  <dl>
    <dt>Price</dt>
    <dd>${product.price}</dd>
    <dt>Category</dt>
    <dd><Link to={`/categories/${product.category.id}`}>{product.category.name}</Link></dd>
  </dl>
</div>;