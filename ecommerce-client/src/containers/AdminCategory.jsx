import React, { Component } from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

import AdminCategory from '../components/AdminCategory';

export const GET_CATEGORY_QUERY = gql`
query getCategoryAdmin($id: Int!) {
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

export const SET_CATEGORY_MUTATION = gql`
mutation updateCategory($id: Int!, $name: String!) {
  updateCategory(id: $id, name: $name) {
    id
    name
  }
}
`;

export class AdminCategoryMutation extends Component {
  constructor(props) {
    super(props);

    const { category } = props;

    this.state = { name: category.name };
  }

  onNameChange(name) {
    this.setState(Object.assign({}, this.state, { name }));
  }

  onSave(updateCategory) {
    const { category: { id }} = this.props;
    const { name } = this.state;

    updateCategory({ variables: { id, name }});
  }

  onSaved() {
    alert("Category saved successfully!");
  }

  render() {
    const { name } = this.state;

    return <Mutation mutation={SET_CATEGORY_MUTATION} onCompleted={() => this.onSaved()}>
      {updateCategory => <AdminCategory
        name={name}
        handleNameChange={(name) => this.onNameChange(name)}
        handleSave={() => this.onSave(updateCategory)} />
        }
    </Mutation>;
  }
}

export class AdminCategoryContainer extends Component {
  render() {
    const { match: { params }} = this.props;
    const id = parseInt(params.id);

    return <Query query={GET_CATEGORY_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const { category } = data;
        return <AdminCategoryMutation category={category} />;
      }}
    </Query>;
  }
}

export default AdminCategoryContainer;