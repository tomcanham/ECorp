import React from 'react';
import { Link } from "react-router-dom";

export default ({ categories }) => <div>
  <ul>
    {categories.map(category => <li key={`category-${category.id}`}><Link className="admin" to={`/admin/categories/${category.id}`}>{category.name}</Link></li>)}
  </ul>
</div>;