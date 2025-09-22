// graphql/resolvers.js
const Item = require('../models/Item');

module.exports = {
  Query: {
    // ✅ each time this runs, we build & exec a new query
    items: async () => {
      return await Item.find();  
      // or: return Item.find().exec();
    },

    item: async (_, { id }) => {
      return await Item.findById(id);
      // or: return Item.findById(id).exec();
    },
  },

  Mutation: {
    createItem: async (_, { input }) => {
      return await Item.create(input);
    },
    updateItem: async (_, { id, input }) => {
      return await Item.findByIdAndUpdate(id, input, { new: true });
    },
    deleteItem: async (_, { id }) => {
      return await Item.findByIdAndDelete(id);
    },
  },
};
