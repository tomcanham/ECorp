import React from 'react';
import { Link } from "react-router-dom";

export default ({ categories }) => <div>
  <ul>
    {categories.map(category => <li key={`category-${category.id}`}><Link to={`/categories/${category.id}`}>{category.name}</Link></li>)}
  </ul>
</div>;