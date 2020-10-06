const repository = require('../repositories/customer-repository')

exports.create = async(req, res) => {
  try { } catch(error) { res.status(500).send({ message: 'Ação não permitida' }) }
}
