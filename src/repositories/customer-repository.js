const Customer = require('../app/models/customer')

exports.create = async(data) => {
  const customer = new Customer()

  customer.name = data.name
  customer.email = data.email
  customer.password = customer.generateHash(data.password)

  return await customer.save()
}

exports.all = async() => { return await Customer.find() }

exports.findById = async(id) => { return await Customer.findById(id) }

exports.update = async(id, data) => { return await Customer.findOneAndUpdate(id, data, { new: true }) }

exports.delete = async(id) => { return await Customer.findByIdAndRemove(id) }

