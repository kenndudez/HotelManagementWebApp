const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  middlename: {
    type: String
  },
  email: {
    type: String
  },
  phonenumber: {
    type: String
  },
  address: {
    type: String
  },
}, {
  collection: 'customers'
})

module.exports = mongoose.model('Customers', Book)