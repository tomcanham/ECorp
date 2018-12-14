import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Category from '../components/Category';

export const GET_CATEGORY_QUERY = gql`
query getCategory($id: Int!) {
  category(id: $id) {
    id
    name
    products {
      id
      name
    }
  }
}
`;

export const CategoryContainer = ({ match }) => {
  const id = parseInt(match.params.id);

  return <Query query={GET_CATEGORY_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const category = data.category;
      const products = category.products;

      return <Category category={category} products={products} />;
    }}
  </Query>;
};

export default CategoryContainer;