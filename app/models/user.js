const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  city: String,
  gender: String,
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  age: Number,
  height: Number,
  weight: Number,
  city_code: String,
  street_number: Number,
  street_type: String,
  street_name: String,
  phone: String,
  image_profile: {
    type: String,
    default: 'https://placehold.it/64x64'
  }
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = Schema
