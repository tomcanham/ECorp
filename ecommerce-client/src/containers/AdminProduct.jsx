import React, { Component } from 'react';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

import AdminProductComponent from '../components/AdminProduct';

export const GET_PRODUCT_QUERY = gql`
query getProductAdmin($id: Int!) {
  product(id: $id) {
    id
    name
    price
    category {
      id
    }
  }
}
`;

export const SET_PRODUCT_MUTATION = gql`
mutation updateProduct($id: Int!, $name: String!, $price: Float!, $category: Int!) {
  updateProduct(id: $id, name: $name, price: $price, category: $category) {
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



export class AdminProductMutation extends Component {
  constructor(props) {
    super(props);

    const { product } = props;
    const { category: { id: category }} = product;

    this.state = {
      name: product.name,
      price: product.price,
      category
    };
  }

  onNameChange(name) {
    this.setState(Object.assign({}, this.state, { name }));
  }

  onPriceChange(price) {
    this.setState(Object.assign({}, this.state, { price }));
  }

  onSave(updateProduct) {
    const { product: { id }} = this.props;
    let { name, price, category } = this.state;

    try {
      price = parseFloat(price);
      category = parseInt(category);

      updateProduct({ variables: { id, name, price, category }});
    } catch(e) {
      // if we're here, one of the conversions probably threw; just ignore
      // a cleaner decision would be to disable the submit button when the int/float isn't valid
    }
  }

  onSaved() {
    alert("Product saved successfully!");
  }

  render() {
    const { name, price } = this.state;

    return <Mutation mutation={SET_PRODUCT_MUTATION} onCompleted={() => this.onSaved()}>
      {updateProduct => <AdminProductComponent
        name={name}
        price={price}
        handleNameChange={(name) => this.onNameChange(name)}
        handlePriceChange={(price) => this.onPriceChange(price)}
        handleSave={() => this.onSave(updateProduct)}
        />}
    </Mutation>;
  }
}

export class AdminProductQuery extends Component {
  render() {
    const { match: { params }} = this.props;
    const id = parseInt(params.id);

    return <Query query={GET_PRODUCT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        const { product } = data;
        return <AdminProductMutation product={product} />;
      }}
    </Query>;
  }
}

export default AdminProductQuery;