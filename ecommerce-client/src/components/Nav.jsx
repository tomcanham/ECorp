import React from 'react';
import { NavLink } from "react-router-dom";

// style
import './Nav.css';

const Nav = () => <nav>
  <NavLink to="/products">Products</NavLink>
  <NavLink to="/categories">Categories</NavLink>
  <NavLink className="admin" to="/admin/products">Products (Admin)</NavLink>
  <NavLink className="admin" to="/admin/categories">Categories (Admin)</NavLink>
</nav>;

export default Nav;