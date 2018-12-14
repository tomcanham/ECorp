import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Products from '../components/Products';

export const GET_PRODUCTS_QUERY = gql`
{
  products {
    id
    name
  }
}
`;

export const ProductsContainer = () => <Query query={GET_PRODUCTS_QUERY}>
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <Products {...data} />;
  }}
</Query>;

export default ProductsContainer;