export const typeDefs = `
  enum OrderStatus {
    PENDING
    PAID
    SHIPPED
  }

  type User {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type Manga {
    id: ID!
    title: String!
    description: String!
    price: Float!
    stock: Int!
    genres: [String!]!
    rating: Float!
  }

  type OrderItem {
    mangaId: ID!
    quantity: Int!
    priceAtPurchase: Float!
  }

  type Order {
    id: ID!
    status: OrderStatus!
    totalPrice: Float!
    items: [OrderItem!]!
    createdAt: String!
  }

  type Review {
    id: ID!
    rating: Int!
    comment: String!
    userId: ID!
    mangaId: ID!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    getMangas: [Manga!]!
    getMangaById(id: ID!): Manga
    searchManga(query: String!): [Manga!]!
    getMyOrders: [Order!]!
    getReviewsByManga(mangaId: ID!): [Review!]!
  }

  type Mutation {
    register(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload

    createManga(
      title: String!
      description: String!
      price: Float!
      stock: Int!
      genres: [String!]!
      coverImage: String!
    ): Manga

    updateManga(
      id: ID!
      title: String
      description: String
      price: Float
      stock: Int
      genres: [String!]
      coverImage: String
    ): Manga


    deleteManga(id: ID!): Manga
    createOrder: Order

    createReview(
      mangaId: ID!
      rating: Int!
      comment: String!
    ): Review
  }

  type Subscription {
    orderStatusUpdated(orderId: ID!): Order!
  }
`;
