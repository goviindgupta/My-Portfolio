const { gql } = require('apollo-server-express')

module.exports = gql`
    type Item {
        _id : ID!
        name : String!
        quantity : Int!
    }

    type Query {
        items : [Item!]!
        item(id: ID!): Item
    }

    input ItemInput {
        name : String!
        quantity : Int!
    }

    type Mutation {
        createItem(input: ItemInput!): Item!
        updateItem(id: ID!, input:ItemInput!): Item!
        deleteItem(id: ID!): Item!
    }
`;