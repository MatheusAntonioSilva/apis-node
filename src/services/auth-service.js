const jwt = require('jsonwebtoken')

exports.generateToken = async(data) => { 
  return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' })
}

exports.decodeToken = async(token) => {
  return await jwt.verify(token, global.SALT_KEY)
}

exports.authorize = async(req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if(!token) { return res.status(401).json({ message: 'Acesso negado!' }) }

  jwt.verify(token, global.SALT_KEY, function(error, decode) {
    if(error) { return res.status(401).json({ message: 'Token Inválido', error: error }) }

    next()
  })
}