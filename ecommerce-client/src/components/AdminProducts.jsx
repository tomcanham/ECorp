import React from 'react';
import { Link } from "react-router-dom";

export default ({ products }) => <div>
  <ul>
    {products.map(product => <li key={`product-${product.id}`}><Link className="admin" to={`/admin/products/${product.id}`}>{product.name}</Link></li>)}
  </ul>
</div>;