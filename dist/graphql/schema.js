export const typeDefs = `
  type User {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type Manga {
    id: ID!
    title: String!
    price: Float!
    genres: [String!]!
  }

  type Order {
    id: ID!
    status: String!
    totalPrice: Float!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    getMangas: [Manga!]!
    getMyOrders: [Order!]!
  }

  type Mutation {
    register(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createManga(title: String!, price: Float!): Manga
    createOrder: Order
    updateOrderStatus(orderId: ID!, status: String!): Order
  }

  type Subscription {
    orderStatusUpdated(orderId: ID!): Order
  }
`;
//# sourceMappingURL=schema.js.map