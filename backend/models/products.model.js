const {model, Schema} = require('mongoose')

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  material: {
    type: String,
  },
  year: {
    type: String,
  },
  manufacturerСountry: {
    type: String,
  },
  volume: {
    type: String,
  },
  alcohol: {
    type: String,
  },
  Memory: {
    type: String,
  },
  speed: {
    type: String,
  },
  weight: {
    type: String,
  },
  width: {
    type: String,
  },
  type: {
    type: String,
  },
  season: {
    type: String,
  },
  state: {
    type: String,
  },
  shoeType: {
    type: String,
  },
  imageUrl: String,
  comments: [
      {
          type: Schema.Types.ObjectId,
          ref: 'comments'
      }
  ]
})

module.exports = model('products', productSchema)