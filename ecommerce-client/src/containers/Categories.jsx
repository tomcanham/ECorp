import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Categories from '../components/Categories';

export const GET_CATEGORIES_QUERY = gql`
{
  categories {
    id
    name
  }
}
`;

export const CategoriesContainer = () => (
  <Query query={GET_CATEGORIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const categories = data.categories;
      return <Categories categories={categories} />;
    }}
  </Query>
);

export default CategoriesContainer;