import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import AdminProducts from '../components/AdminProducts';

export const GET_PRODUCTS_QUERY = () => gql`
{
  products {
    id
    name
  }
}
`;

export const AdminProductsContainer = () => (
  <Query query={GET_PRODUCTS_QUERY()}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const products = data.products;
      return <AdminProducts products={products} />;
    }}
  </Query>
);

export default AdminProductsContainer;