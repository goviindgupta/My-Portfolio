const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: [{  // ✅ Change this to an array of strings
    type: String,
    required: true,
  }], 
  color: {
    type: String,
    required: true,
  },
});

// categorySchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// categorySchema.set('toJSON', {
//     virtuals: true,
// });

exports.Category = mongoose.model('Category', categorySchema);

// exports.categorySchema = categorySchema
