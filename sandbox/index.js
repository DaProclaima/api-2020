const JWT  = require('../app/JWT')
const jwt = new JWT()

const user = {
  id: '5e4412ea8b5a20f27a2a4979',
  email: 'sebastien@gmail.com'
}

console.log(jwt.JWTgenerator(user))
