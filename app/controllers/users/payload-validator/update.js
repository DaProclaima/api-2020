const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('first_name', _.isString())
  .withOptional('last_name', _.isString())
  .withOptional('email', _.isString({
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email'
  }))
  .withOptional('password', _.isString())
  .withOptional('age', _.isNumber({min: 0, max: 120}))
  .withOptional('height', _.isNumber())
  .withOptional('weight', _.isNumber())
  .withOptional('city', _.isString())
  .withOptional('city_code', _.isString())
  .withOptional('street_number', _.isNumber())
  .withOptional('street_type', _.isString())
  .withOptional('street_name', _.isString())
  .withOptional('phone', _.isString({
    regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    message: 'Wrong phone number'
  }))
  .withOptional('image_profil', _.isString())
