import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import AdminCategories from '../components/AdminCategories';

export const GET_CATEGORIES_QUERY = gql`
{
  categories {
    id
    name
  }
}
`;

export const AdminCategoriesContainer = () => (
  <Query query={GET_CATEGORIES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const categories = data.categories;
      return <AdminCategories categories={categories} />;
    }}
  </Query>
);

export default AdminCategoriesContainer;