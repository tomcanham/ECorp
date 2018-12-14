const { ApolloServer, gql } = require('apollo-server');

const schemaDefinition = gql `
type Product {
  id: Int!
  name: String!
  category: Category!
  price: Float!
}

type Category {
  id: Int!
  name: String!
  products: [Product!]!
}

type Query {
  products: [Product!]!
  product(id: Int!): Product
  categories: [Category!]!
  category(id: Int!): Category
}

type Mutation {
  updateProduct(id: Int!, name: String!, price: Float!, category: Int!): Product
  updateCategory(id: Int!, name: String!): Category
}
`;

const categories = new Map();
categories.set(1, { id: 1, name: "Household Items" });
categories.set(2, { id: 2, name: "Hardware" });
categories.set(3, { id: 3, name: "Electronics" });

const products = new Map();
products.set(1, { id: 1, name: "Broom", category: 1, price: 7.99 });
products.set(2, { id: 2, name: "Mop", category: 1, price: 9.99 });
products.set(3, { id: 3, name: "Hammer", category: 2, price: 8.99 });
products.set(4, { id: 4, name: "Wrench", category: 2, price: 7.99 });
products.set(5, { id: 5, name: "Radio", category: 3, price: 19.99 });
products.set(6, { id: 6, name: "Television", category: 3, price: 99.99 });

const resolvers = {
  Query: {
    products() {
      return [...products.values()];
    },
    product(parent, args) {
      return products.get(args.id);
    },
    categories() {
      return [...categories.values()];
    },
    category(parent, args) {
      return categories.get(args.id);
    }
  },
  Mutation: {
    updateProduct(parent, args) {
      const { id, name, price, category: categoryId } = args;
      const product = products.get(id);
      const category = categories.get(categoryId);

      if (product && category) {
        product.name = name;
        product.price = price;
        product.category = category.id;
      }

      return product;
    },
    updateCategory(parent, args) {
      const { id, name } = args;
      const category = categories.get(id);

      if (category) {
        category.name = name;
      }

      return category;
    }
  },
  Product: {
    category(product) {
      return categories.get(product.category);
    }
  },
  Category: {
    products(category) {
      return [...products.values()].filter(product => product.category === category.id);
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemaDefinition,
  resolvers,
});

server.listen().then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});