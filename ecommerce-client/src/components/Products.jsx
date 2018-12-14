import React from 'react';
import { Link } from "react-router-dom";

export default ({ products }) => <div>
  <ul>
    {products.map(product => <li key={`category-${product.id}`}><Link to={`/products/${product.id}`}>{product.name}</Link></li>)}
  </ul>
</div>;