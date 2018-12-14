import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Product from '../components/Product.jsx';

export const GET_PRODUCT_QUERY = gql`
query getProduct($id: Int!) {
  product(id: $id) {
    id
    name
    price
    category {
      id
      name
    }
  }
}
`;

export const ProductContainer = ({ match }) => {
  const id = parseInt(match.params.id);

  return <Query query={GET_PRODUCT_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const product = data.product;

      return <Product product={product} />;
    }}
  </Query>;
};

export default ProductContainer;